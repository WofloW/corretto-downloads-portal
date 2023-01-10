import { AppLayout, SideNavigation } from '@cloudscape-design/components'
import { useLocation } from 'react-router-dom'

export const Layout = ({children}: any) => {
    const location = useLocation()
    return <AppLayout
        headerSelector={'#top-nav'}
        disableContentPaddings={true}
        toolsHide={true}
        navigation={<SideNavigation
            activeHref={location.pathname}
            header={{
                href: '/',
                text: 'Amazon Corretto Nightly builds'
            }}
            items={[
                { type: 'link', text: 'Overview', href: '/portal-style/overview' },
                { type: 'link', text: 'Downloads', href: '/portal-style/downloads' },
                { type: 'divider' },
                {
                    type: 'link',
                    text: 'Amazon Corretto',
                    href: 'https://aws.amazon.com/corretto',
                    external: true
                }
            ]}
        />}
        content={children}
    />
}