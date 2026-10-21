// Prints the next release version for the downloadable package.
// It is one patch above the newest v* tag, or the package.json base version
// (prerelease suffix dropped) when that is higher. Exits non-zero if the result
// would not be strictly higher than every published tag.
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import semver from 'semver'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const base = semver.coerce(pkg.version)?.version
if (!base) throw new Error(`package.json version is not usable: ${pkg.version}`)

const tags = execFileSync('git', ['tag', '--list', 'v*'], { encoding: 'utf8' })
	.split('\n')
	.map((tag) => semver.valid(tag.trim().replace(/^v/, '')))
	.filter(Boolean)
const latest = semver.rsort(tags)[0]

let next = latest ? semver.inc(latest, 'patch') : base
if (semver.gt(base, next)) next = base

if (latest && !semver.gt(next, latest)) {
	throw new Error(`Refusing to publish ${next}: it is not higher than ${latest}`)
}
console.log(next)
