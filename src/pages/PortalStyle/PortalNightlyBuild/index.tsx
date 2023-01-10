import './index.scss'

import Link from '../../../components/Link'
import 'foundation-sites/dist/css/foundation.min.css'
import DownloadTable from '../../../components/DownloadTable'
import { Layout } from '../Layout'
import React from 'react'


export default function PortalNightlyBuild() {
    return (
        <Layout>
            <div className={'portal-wrapper'}>
                <div className={'portal-container'}>
                    <DownloadTable/>

                </div>
                <div className={'space-filler'}/>
                <div className={'portal-footer'}>
                    <Link href='https://aws.amazon.com/privacy'
                          external>Privacy</Link>
                    <Link href='https://aws.amazon.com/terms/'
                          external>Site terms</Link>
                    <span>© {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.
                    </span>
                </div>
            </div>
        </Layout>
    )
}

