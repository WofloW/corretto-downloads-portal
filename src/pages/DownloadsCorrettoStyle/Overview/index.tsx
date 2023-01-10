import './index.scss'

import Link from '../../../components/Link'
import Section from '../../../components/Section'
import 'foundation-sites/dist/css/foundation.min.css'
import { Box, Grid } from '@cloudscape-design/components'


export default function Overview() {
    return (
        <>
            <div className={'all-but-footer'}>
                <div className={'hero'}>
                    <div className={'title'}>
                        Amazon Corretto nightly build downloads
                    </div>
                    <div className={'description'}>
                        Amazon Corretto provides nightly builds for evaluation and testing purposes. Availability is not
                        guaranteed, and the schedule may vary. These builds may contain bugs or breaking changes in
                        functionality and are not supported in production environments. For the latest supported
                        releases
                        please visit Amazon Corretto for download and installation instructions.
                    </div>
                </div>
                <div className={'container'}>
                    <Section>
                        <h3>Version Description</h3>
                        <Grid gridDefinition={[
                            { colspan: 4 },
                            { colspan: 4 },
                            { colspan: 4 }
                        ]}>
                            <div className={'overview-column'}>
                                <div className={'title'}>CorrettoJdk</div>
                                <div>Tracks OpenJDK tip and contains the latest code that will be included in the next
                                    version of the JDK.
                                </div>
                            </div>
                            <div className={'overview-column'}>
                                <div className={'title'}>Corretto17, Corretto11, and Corretto8</div>
                                <div>These are the current Long Term Support (LTS) versions of Corretto.</div>

                            </div>
                            <div className={'overview-column'}>
                                <div className={'title'}>Corretto19</div>
                                <div>The currently supported OpenJDK Feature Release (FR).</div>
                            </div>
                        </Grid>
                        <Box margin={'xxxl'}/>
                        <h3>Branches Description</h3>
                        <Grid gridDefinition={[
                            { colspan: 4 },
                            { colspan: 4 },
                            { colspan: 4 }
                        ]}>
                            <div className={'overview-column'}>
                                <div className={'title'}>develop</div>
                                <div>Tracks OpenJDK Update repository where stabilization for releases happens.
                                </div>
                            </div>
                            <div className={'overview-column'}>
                                <div className={'title'}>nightly</div>
                                <div>Tracks OpenJDK Update-dev repository, that contains the latest committed code.
                                </div>

                            </div>
                            <div className={'overview-column'}>
                                <div className={'title'}>generational-shenandoah</div>
                                <div>Includes experimental <Link external
                                                                 href='https://aws.amazon.com/blogs/developer/announcing-preview-release-for-the-generational-mode-to-the-shenandoah-gc/'>Generational
                                    Shenadoah</Link> garbage collector.
                                </div>
                            </div>
                        </Grid>
                    </Section>
                    <Box margin={'xxxl'}/>
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
                    <Box margin={'xxxl'}/>
                    <Section>
                        <h3>Disclaimer</h3>
                        <div>Links are provided for testing/evaluation purposes only and should not be used
                            for production. They contain the latest development code which may contain bugs.
                        </div>
                    </Section>
                </div>
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

