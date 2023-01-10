import './index.scss'

import Link from '../../../components/Link'
import 'foundation-sites/dist/css/foundation.min.css'
import DownloadTable from '../../../components/DownloadTable'


export default function NightlyBuild() {
    return (
        <>
            <div className={'container all-but-footer'} style={{paddingTop: 0}}>
                <DownloadTable/>
            </div>
            <div className={'footer'}>
                <Link href='https://aws.amazon.com/privacy'
                      external>Privacy</Link>
                <Link href='https://aws.amazon.com/terms/'
                      external>Site terms</Link>
                <span>© {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.
                    </span>
            </div>
        </>
    )
}

