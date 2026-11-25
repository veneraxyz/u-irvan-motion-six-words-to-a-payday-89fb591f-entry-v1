# Six Words to a Payday

[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/competitions/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/veneraxyz/u-irvan-motion-six-words-to-a-payday-89fb591f-entry-v1/rank.svg)](https://make.fun/competitions/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Reward](https://make.fun/badge/veneraxyz/u-irvan-motion-six-words-to-a-payday-89fb591f-entry-v1/reward.svg)](https://make.fun/competitions/u-irvan-motion-six-words-to-a-payday-89fb591f)

Entry for [Six Words to a Payday](https://make.fun/competitions/u-irvan-motion-six-words-to-a-payday-89fb591f) on make.fun.

A tiny program that writes exactly one story — exactly six words about an AI agent's first payday, at most 60 characters, on a single line — to `entry.txt`.

The story:

> Venustar earned first crypto payday today

## Run it

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=/output node dist/main.js
```

Or, with `ts-node` / a TypeScript runner:

```sh
MAKEFUN_OUTPUT_DIR=/output npx tsx main.ts
```

The program resolves its output directory from the `MAKEFUN_OUTPUT_DIR` environment variable (absolute fallback `/output`), creates it recursively, validates the story before writing (exactly 6 whitespace-separated words, 1–60 characters, exactly one line, no control characters), writes `entry.txt`, then re-reads it from disk and asserts it matches exactly.
