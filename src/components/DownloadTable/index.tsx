import './index.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { DatePicker, FormField, SpaceBetween, Spinner, Table } from '@cloudscape-design/components'
import { cloneDeep, filter, padStart } from 'lodash'
import Dropdown from '../Dropdown'
import { formatData, isValidDate } from './functions'
import { useCollection } from '@cloudscape-design/collection-hooks'
import { COLUMN_DEFINITIONS } from './config'


export default function DownloadTable() {
    const [knownVersions, setKnownVersions] = useState(new Set())
    const [knownBranches, setKnownBranches] = useState(new Set())
    const [knownDebugLevels, setKnownDebugLevels] = useState(new Set())
    const [knownPlatforms, setKnownPlatforms] = useState(new Set())
    const [knownArchitectures, setArchitectures] = useState(new Set())
    const [originalItems, setOriginalItems] = useState([])
    const [renderItems, setRenderItems] = useState([])
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false)

    const [
        selectedVersion,
        setSelectedVersion
    ] = useState('all')
    const [
        selectedBranch,
        setSelectedBranch
    ] = useState('all')
    const [
        selectedDebugLevel,
        setSelectedDebugLevel
    ] = useState('all')
    const [
        selectedPlatform,
        setSelectedPlatform
    ] = useState('all')
    const [
        selectedArchitecture,
        setSelectedArchitecture
    ] = useState('all')

    const [firstRun, setFirstRun] = useState(true)

    useEffect(() => {
        if (!isValidDate(date) && !firstRun) {
            return
        }
        setLoading(true)
        let url = 'https://corretto.aws/nightly/latest/manifest.json'


        if (!firstRun) {
            let [year, month, day] = date.split('-')
            month = padStart(month, 2, '0')
            day = padStart(day, 2, '0')
            url = `https://corretto.aws/nightly/${year}/${month}/${day}/manifest.json`
        }

        setFirstRun(false)

        axios.get(url)
            .then((res) => {
                if (firstRun) {
                    setDate(res.data.date)
                }

                formatData(res.data, {
                    setOriginalItems,
                    setKnownVersions,
                    setKnownBranches,
                    setKnownDebugLevels,
                    setKnownPlatforms,
                    setArchitectures
                })
            })
            .catch(() => {
                setOriginalItems([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [date])

    useEffect(() => {
        let newItems: any = cloneDeep(originalItems)
        if (selectedDebugLevel !== 'all') {
            newItems = filter(newItems, { debugLevel: selectedDebugLevel })
        }
        if (selectedPlatform !== 'all') {
            newItems = filter(newItems, { platform: selectedPlatform })
        }

        if (selectedVersion !== 'all') {
            newItems = filter(newItems, { version: selectedVersion })
        }

        if (selectedBranch !== 'all') {
            newItems = filter(newItems, item => {
                return item.branch.text === selectedBranch
            })
        }

        if (selectedArchitecture !== 'all') {
            newItems = filter(newItems, { architecture: selectedArchitecture })
        }
        setRenderItems(newItems)

    }, [originalItems, selectedVersion, selectedBranch, selectedPlatform, selectedArchitecture, selectedDebugLevel])


    const { items, collectionProps } = useCollection(
        renderItems,
        {
            sorting: { defaultState: { sortingColumn: COLUMN_DEFINITIONS[0] } },
        }
    )

    if (firstRun) {
        return <Spinner size={'large'}/>
    }

    return <div>
        <FormField
            label='Showing builds for'
        >
            <DatePicker
                onChange={({ detail }) => {
                    // @ts-ignore
                    setDate(detail.value)
                }}
                value={date}
                openCalendarAriaLabel={selectedDate =>
                    'Choose build date' +
                    (selectedDate
                        ? `, selected date is ${selectedDate}`
                        : '')
                }
                nextMonthAriaLabel='Next month'
                placeholder='YYYY/MM/DD'
                previousMonthAriaLabel='Previous month'
                todayAriaLabel='Today'
            />
        </FormField>

        <SpaceBetween size={'m'} direction={'horizontal'}>
            <Dropdown
                set={knownVersions}
                label={'Version'}
                setSelected={setSelectedVersion}
                selected={selectedVersion}
            />
            <Dropdown
                set={knownBranches}
                label={'Branch'}
                setSelected={setSelectedBranch}
                selected={selectedBranch}
            />
            <Dropdown
                set={knownPlatforms}
                label={'Platform'}
                setSelected={setSelectedPlatform}
                selected={selectedPlatform}
            />
            <Dropdown
                set={knownArchitectures}
                label={'Architecture'}
                setSelected={setSelectedArchitecture}
                selected={selectedArchitecture}
            />
            <Dropdown
                set={knownDebugLevels}
                label={'Debug Level'}
                setSelected={setSelectedDebugLevel}
                selected={selectedDebugLevel}
            />
        </SpaceBetween>
        <Table
            {...collectionProps}
            variant={'embedded'}
            stripedRows
            loading={loading}
            loadingText={'Loading...'}
            empty={'No builds available'}
            items={items}
            columnDefinitions={COLUMN_DEFINITIONS}
        />


    </div>
}