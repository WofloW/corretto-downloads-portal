import './index.scss'

import { Route, Routes } from 'react-router-dom'
import PortalOverview from './PortalOverview'
import PortalNightlyBuild from './PortalNightlyBuild'


export default function PortalStyle() {
    return (
        <Routes>
            <Route path={'/overview'} element={<PortalOverview/>}/>
            <Route path={'/downloads'} element={<PortalNightlyBuild/>}/>
        </Routes>
    )
}

