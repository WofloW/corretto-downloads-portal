import './index.scss'
import { FormField, Select } from '@cloudscape-design/components'
import { listToOptions } from '../../shared/utils'

export default function Dropdown({ label, set, setSelected, selected }: any) {
    const options = listToOptions([...set])
    if( label === 'Version') {
        options.sort((item1: any, item2: any) => {
            const a = item1.value
            const b = item2.value
            const a_ver = a === 'CorrettoJdk' ? Number.MAX_VALUE : Number(a.slice(8))
            const b_ver = b === 'CorrettoJdk' ? Number.MAX_VALUE : Number(b.slice(8))
            if (a_ver < b_ver) return -1
            if (a_ver > b_ver) return 1
            return 0
        })
    }
    options.unshift({ label: 'All', value: 'all' })
    return <div className={'dropdown'}>
        <FormField
            label={label}
        >
            <Select
                selectedOption={{ label: selected === 'all' ? 'All' : selected, value: selected }}
                onChange={({ detail }: any) => {
                    setSelected(detail.selectedOption.value)
                }}
                options={options}
                selectedAriaLabel='Selected'
            />
        </FormField>
    </div>
}