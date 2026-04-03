# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2026-04-03

### Fixed
- `numericArrayGenerator` off-by-one bug for size 0 (returned `[0]` instead of `[]`) — replaced join/split hack with `Array.from()`
- `arrayGenerator` shared object reference across all elements — now shallow-copies each slot via `{...object}`
- Deprecated `prepublish` lifecycle hook replaced with `prepublishOnly`
- Duplicate keywords in `package.json` (7 → 3)

### Added
- Test coverage expanded from 2 to 8 assertions (covers `arrayGenerator`, edge cases, and `validArray` falsy inputs)
- `CLAUDE.md` — dev guidance for future sessions
- `CHANGELOG.md` — this file
- `.github/workflows/publish.yml` — GitHub Actions auto-publish to npm on push to `master`
- `postpublish` hook in `package.json` — auto-creates and pushes git tag on local `npm publish`

### Changed
- `README.md` — full API docs with usage examples, shallow-copy warning, and publishing note
- JSDoc updated with `@param` types and `@returns` on all exported functions
- Version bumped to `0.0.2`

### Summary

| Item | Status | Detail |
|------|--------|--------|
| `numericArrayGenerator` bug | Fixed | `Array.from()` replaces join/split hack |
| `arrayGenerator` shared ref | Fixed | Shallow copy per element (`{...object}`) |
| Test coverage | Fixed | 2 → 8 tests |
| `prepublishOnly` | Fixed | Was deprecated `prepublish` |
| Duplicate keywords | Fixed | 7 → 3 in package.json |
| GitHub Actions publish | Added | Auto-publish to npm on push to `master` |
| `postpublish` git tag | Added | Auto-tags on local `npm publish` |
| README | Updated | Full API docs with examples |
| CLAUDE.md | Added | Dev guidance for future sessions |
| Version | Bumped | 0.0.1 → 0.0.2 |

---

## [0.0.1] - 2026-03-09

### Added
- Initial release: `numericArrayGenerator`, `arrayGenerator`, `validArray`
