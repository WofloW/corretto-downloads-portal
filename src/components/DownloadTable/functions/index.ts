import { compact, each, map } from 'lodash'

const corretto_domain = 'https://corretto.aws'

export const isValidDate = (s: string) => {
    const separators = ['\\.', '\\-', '\\/'];
    const bits = s.split(new RegExp(separators.join('|'), 'g'));
    const d = new Date(Number(bits[0]), Number(bits[1]) - 1, Number(bits[2]));
    return d.getFullYear() === Number(bits[0]) && d.getMonth() + 1 === Number(bits[1]);
}

export const formatData = (data: any, {
    setOriginalItems,
    setKnownVersions,
    setKnownBranches,
    setKnownDebugLevels,
    setKnownPlatforms,
    setArchitectures,
}: any) => {
    const knownVersions = new Set()
    const knownBranches = new Set()
    const knownDebugLevels = new Set()
    const knownPlatforms = new Set()
    const knownArchitectures = new Set()
    const newItems: any = []
    each(data.versions, (versionValue, version) => {
        knownVersions.add(version)

        each(versionValue.branches, (branchValue, branch) => {
            knownBranches.add(branch)
            each(branchValue.commits, (commitsValue, commit) => {
                each(commitsValue.debug_levels, (debugLevelValue, debugLevel) => {
                    knownDebugLevels.add(debugLevel)
                    each(debugLevelValue.platforms, (platformValue, platform) => {
                        knownPlatforms.add(platform)
                        each(platformValue.architectures, (architectureValue, architecture) => {
                            knownArchitectures.add(architecture)
                            for (const i in architectureValue.build.artifacts) {
                                const mv = version.slice(8)
                                let artifact = architectureValue.build.artifacts[i]
                                let item = {
                                    version,
                                    branch: {
                                        url: `https://github.com/corretto/corretto-${mv}/tree/${branch}`,
                                        text: branch,
                                        ariaLabel: `${version} ${branch} branch source code`
                                    },
                                    commit: {
                                        url: `https://github.com/corretto/corretto-${mv}/commit/${commit}`,
                                        text: commit.substring(0, 12),
                                        ariaLabel: `${version} commit source code`
                                    },
                                    platform,
                                    architecture,
                                    debugLevel,
                                    artifact: {
                                        url: `${corretto_domain}/${artifact.location}/${artifact.filename}`,
                                        text: artifact.type,
                                        ariaLabel: artifact.filename
                                    },
                                    hashes: compact(map(artifact.hashes, (value, hash) => {
                                        if (hash === 'md5') return null
                                        return {
                                            url: `${corretto_domain}/${artifact.location}/${artifact.hashes[hash]}`,
                                            text: hash,
                                            ariaLabel: `${artifact.filename} ${hash} hash`
                                        }
                                    })),
                                    testResults: map(architectureValue.build.test_results, testResult => {
                                        return {
                                            url: `${corretto_domain}/${artifact.location}/${testResult}`,
                                            ariaLabel: `${artifact.filename} test result for ${testResult.split('/')[1]}`,
                                            text: `${testResult.split('/')[1]}`
                                        }
                                    })
                                }
                                newItems.push(item)
                            }
                        })
                    })
                })
            })
        })
    })


    // @ts-ignore
    setOriginalItems(newItems)
    setKnownVersions(knownVersions)
    setKnownBranches(knownBranches)
    setKnownDebugLevels(knownDebugLevels)
    setKnownPlatforms(knownPlatforms)
    setArchitectures(knownArchitectures)
}