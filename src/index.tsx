import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import TopNavigation from './components/TopNavigation'
import Downloads from './pages/Downloads'
import Menu from './pages/Menu'
import DownloadsCorrettoStyle from './pages/DownloadsCorrettoStyle'
import MaterialDesignStyle from './pages/MaterialDesignStyle'
import PortalStyle from './pages/PortalStyle'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
    },
    {
        path: '/original',
        element: <Downloads/>,
    },
    {
        path: '/corretto-style',
        element: <DownloadsCorrettoStyle/>,
    },
    {
        path: '/material-design-style',
        element: <MaterialDesignStyle/>,
    },
    {
        path: '/portal-style/*',
        element: <PortalStyle/>,
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <TopNavigation />
        <div className={'wrapper'}>
        <RouterProvider router={router}/>
        </div>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
