import './index.scss'

import Link from '../../components/Link'
import React, { useState } from 'react'
import Overview from './Overview'
import NightlyBuild from './NightlyBuild'


export default function DownloadsCorrettoStyle() {
    const [activeTabId, setActiveTabId] = useState('overview')
    return (
        <div className={'corretto-style'}>
            <div className={'corretto-menu'}>
                <Link href={'/'}><div className={'header'}>Amazon Corretto</div></Link>
                <div className={'corretto-submenu'}>
                    <div className={`${activeTabId === 'overview' ? 'active' : ''} tab`} onClick={() => {
                        setActiveTabId('overview')
                    }}>
                        Overview
                    </div>
                    <div className={`${activeTabId === 'downloads' ? 'active' : ''} tab`} onClick={() => {
                        setActiveTabId('downloads')
                    }}>
                        Nightly build Downloads
                    </div>
                </div>
            </div>
            {
                activeTabId === 'overview' && <Overview/>
            }
            {
                activeTabId === 'downloads' && <NightlyBuild/>
            }
        </div>
    )
}

