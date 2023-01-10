import './index.scss'

import Link from '../../components/Link'
import Section from '../../components/Section'
import 'foundation-sites/dist/css/foundation.min.css'
import DownloadTable from '../../components/DownloadTable'


export default function Downloads() {
    return (
        <>
            <div className={'container'}>
                <Section>
                    <h1>Amazon Corretto nightly build downloads</h1>
                    <p>Amazon Corretto provides nightly builds for evaluation and testing purposes. Availability is
                        not
                        guaranteed, and the schedule may vary. These builds may contain bugs or breaking changes in
                        functionality and are not supported in production environments.
                        For the latest supported releases please visit <Link href='https://aws.amazon.com/corretto/'
                                                                             external>Amazon
                            Corretto</Link> for download and installation instructions.
                    </p>
                </Section>
                <DownloadTable/>
                <Section>
                    <h3>Version and Branch Descriptions</h3>
                    <h4>Versions</h4>
                    <dl>
                        <dt>CorrettoJdk</dt>
                        <dd>Tracks OpenJDK tip and contains the latest code that will be included in the next
                            version of
                            the
                            JDK.
                        </dd>
                        <dt>Corretto17, Corretto11, and Corretto8</dt>
                        <dd>These are the current Long Term Support (LTS) versions of Corretto.</dd>
                        <dt>Corretto19</dt>
                        <dd>The currently supported OpenJDK Feature Release (FR).</dd>
                    </dl>
                    <h4>Branches</h4>
                    <dl>
                        <dt>develop</dt>
                        <dd>Tracks OpenJDK Update repository where stabilization for releases happens.</dd>
                        <dt>nightly</dt>
                        <dd>Tracks OpenJDK Update-dev repository, that contains the latest committed code.</dd>
                        <dt>generational-shenandoah</dt>
                        <dd>Includes experimental <Link external
                                                        href='https://aws.amazon.com/blogs/developer/announcing-preview-release-for-the-generational-mode-to-the-shenandoah-gc/'>Generational
                            Shenadoah</Link> garbage collector.
                        </dd>
                    </dl>
                </Section>

                <Section>
                    <h3>Notes</h3>
                    <ul>
                        <li>The nightly builds have not passed the Java Technology Compatibility Kit (TCK) tests,
                            only
                            Amazon Corretto official releases are certified.
                        </li>
                        <li>If you do not see any builds for a date, particular OS or architecture for a given date,
                            the
                            build may have been disabled, cancelled or failed. Builds are provided as a best effort.
                        </li>
                        <li>TAP files contain just the pass/fail information regarding the various test suites run
                            for a
                            build.
                        </li>
                    </ul>
                </Section>
                <Section>

                    <h3>Disclaimer</h3>
                    <div>Links are provided for testing/evaluation purposes only and should not be used
                        for production. They contain the latest development code which may contain bugs.
                    </div>
                </Section>
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

