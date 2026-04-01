# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A small, zero-dependency npm utility library (`common-array-utils`) that provides array helper functions. Published to npm as a CommonJS module.

## Commands

- **Run tests:** `npm test` (runs `node index.test.js` — no test framework, uses manual assertions with `throw`)
- **Publish:** `npm publish` (automatically runs tests via `prepublish` hook)

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
