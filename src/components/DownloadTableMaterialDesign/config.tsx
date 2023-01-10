import Link from '../Link'
import { Popover, SpaceBetween } from '@cloudscape-design/components'
import { map } from 'lodash'

export const COLUMN_DEFINITIONS = [
    {
        id: 'version',
        header: 'Version',
        cell: (e: any) => e.version,
        sortingComparator: (item1: any, item2: any) => {
            const a = item1.version
            const b = item2.version
            const a_ver = a === 'CorrettoJdk' ? Number.MAX_VALUE : Number(a.slice(8))
            const b_ver = b === 'CorrettoJdk' ? Number.MAX_VALUE : Number(b.slice(8))
            if (a_ver < b_ver) return -1
            if (a_ver > b_ver) return 1
            return 0
        }
    }, {
        id: 'branch',
        header: 'Branch',
        cell: (e: any) => {
            const item = e.branch
            return <Link href={item.url} external ariaLabel={item.ariaLabel}>{item.text}</Link>
        },
        sortingComparator: (item1: any, item2: any) => {
            // @ts-ignore
            return item1.branch.text > item2.branch.text ? 1 : -1
        }
    }, {
        id: 'commit',
        header: 'Git Commit',
        cell: (e: any) => {
            const item = e.commit
            return <Link href={item.url} external ariaLabel={item.ariaLabel}>{item.text}</Link>
        },
        sortingComparator: (item1: any, item2: any) => {
            // @ts-ignore
            return item1.commit.text > item2.commit.text ? 1 : -1
        }
    }, {
        id: 'platform',
        header: 'Platform',
        cell: (e: any) => e.platform,
        sortingField: 'platform'
    }, {
        id: 'architecture',
        header: 'Architecture',
        cell: (e: any) => e.architecture,
        sortingField: 'architecture'
    }, {
        id: 'debugLevel',
        header: 'Debug Level',
        cell: (e: any) => e.debugLevel,
        sortingField: 'debugLevel'
    }, {
        id: 'artifacts',
        header: 'Artifacts',
        cell: (e: any) => {
            const item = e.artifact
            return <Link href={item.url} external ariaLabel={item.ariaLabel}>{item.text}</Link>
        },
        sortingComparator: (item1: any, item2: any) => {
            // @ts-ignore
            return item1.artifact.text > item2.artifact.text ? 1 : -1
        }
    }, {
        id: 'hashes',
        header: 'Hashes / Signatures',
        cell: (e: any) => {
            return <SpaceBetween size={'xxs'} direction={'horizontal'}>
                {
                    map(e.hashes, (hash, index) => {
                return <Link key={index} href={hash.url} external
                ariaLabel={hash.ariaLabel}>{hash.text}</Link>
            })
        }
            </SpaceBetween>
        }
    }, {
        id: 'tests',
        header: 'Test Results\n',
        cell: (e: any) => {
            if (e.testResults.length > 0) {
                return <Popover
                    position="left"
                    size="medium"
                    dismissButton={false}
                    content={
                        <div>
                            {
                                map(e.testResults, (testResult, index) => {
                                    return <div key={index}>
                                        <Link href={testResult.url} ariaLabel={testResult.ariaLabel}>
                                            {testResult.text}
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    }
                >
                    {e.testResults.length}
                </Popover>
            } else {
                return 'No results available'
            }
        },
        sortingComparator: (item1: any, item2: any) => {
            // @ts-ignore
            return item1.testResults.length > item2.testResults.length ? 1 : -1
        }
    },
]