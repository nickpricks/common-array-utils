# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A small, zero-dependency npm utility library (`common-array-utils`) that provides array helper functions. Published to npm as a CommonJS module.

## Commands

- **Run tests:** `npm test` (runs `node index.test.js` — no test framework, uses manual assertions with `throw`)
- **Publish:** `npm publish` (tests run via `prepublishOnly`; auto-creates + pushes git tag via `postpublish`)
- **CI publish:** GitHub Actions publishes on push to `master` when `package.json` changes — requires `NPM_TOKEN` secret in GitHub repo settings.

## Architecture

Single-file library — all utilities are exported from `index.js` using CommonJS (`exports.fn = ...`). Tests live in `index.test.js` alongside the source.

Current exports:
- `numericArrayGenerator(size)` — creates `[0, 1, 2, ..., size-1]`
- `arrayGenerator(size, object)` — creates array of `size` filled with `object` (default `{}`)
- `validArray(arr)` — returns `true` if input is a non-empty array

## Conventions

- No test framework: tests are plain Node.js scripts that `throw` on failure and `console.info` on success.
- No build step or transpilation.
- Package manager: **npm** (not bun/yarn).

## Changelog

- GitHub Actions auto-publishes to npm on push to `master` when `package.json` changes. Guard skips publish if version tag already exists — so non-version-bump changes to `package.json` are safe but will still trigger the workflow.
- Always update `CHANGELOG.md` when making changes, before committing.
- Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) — typed sections (`### Fixed`, `### Added`, `### Changed`) for machine readability, followed by a `### Summary` table for human readability.
- Version in `CHANGELOG.md` must match `package.json` exactly.
