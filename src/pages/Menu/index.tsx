import './index.scss'
import { Link } from '@cloudscape-design/components'



export default function Menu() {
    return (
        <>
            <ul style={{margin: '80px 40px', listStyleType: 'none'}}>
                <li>
                    <Link href={'/original'}>Original looking</Link>
                </li>
                <li>
                    <Link href={'/corretto-style'}>Corretto website style</Link>
                </li>
                <li>
                    <Link href={'/material-design-style'}>Material design style</Link>
                </li>
                <li>
                    <Link href={'/portal-style/overview'}>Portal style</Link>
                </li>
            </ul>
        </>
    )
}

