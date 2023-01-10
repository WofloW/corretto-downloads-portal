import './index.scss'
import awsLogo from './awsLogo.png'

export default function TopNavigation() {
    return <div className={'top-nav'} id={'top-nav'}>
        <a href={'/'}>
            <img className={'logo'} src={awsLogo} alt={'Click here to return to Amazon Web Services homepage'}/>
        </a>
    </div>
}