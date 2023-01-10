import './index.scss'

export default function Link({
                                 href,
                                 children,
                                 external,
                                 ariaLabel
                             }: { href: string, children: any, external?: boolean, ariaLabel?: string }) {
    ariaLabel = ariaLabel ? ariaLabel : `link to ${href}`
    if (external) {
        return <a
            className={'link'}
            href={href}
            target={'_blank'}
            rel='noopener noreferrer'
            aria-label={ariaLabel}
        >{children}</a>
    }
    return <a href={href} className={'link'} aria-label={ariaLabel}>
        {children}
    </a>
}