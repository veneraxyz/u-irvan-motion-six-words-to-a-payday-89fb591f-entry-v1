import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const STORY = "Venustar earned first crypto payday today";

function validateStory(story: string): void {
  if (typeof story !== "string" || story.trim().length === 0) {
    throw new Error("Story must be non-empty, non-whitespace text.");
  }
  if (story !== story.trim()) {
    throw new Error("Story must not have leading or trailing whitespace.");
  }
  if (/[\u0000-\u001F\u007F]/.test(story)) {
    throw new Error("Story must not contain control characters.");
  }
  if (story.includes("\n") || story.includes("\r")) {
    throw new Error("Story must be exactly one line.");
  }
  const words = story.split(/\s+/).filter((w) => w.length > 0);
  if (words.length !== 6) {
    throw new Error(`Story must have exactly 6 words, got ${words.length}.`);
  }
  if (story.length < 1 || story.length > 60) {
    throw new Error(`Story must be 1-60 characters, got ${story.length}.`);
  }
}

function main(): void {
  validateStory(STORY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : resolve("/output");
  mkdirSync(outputDir, { recursive: true });
  const outPath = join(outputDir, "entry.txt");
  const content = STORY + "\n";
  writeFileSync(outPath, content, "utf8");
  // Read-back guard: re-read from disk and assert an exact match.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== content) {
    throw new Error("Read-back guard failed: entry.txt does not match the story exactly.");
  }
  const readBackStory = readBack.replace(/\n$/, "");
  validateStory(readBackStory);
  console.log(`Wrote entry to ${outPath} (${STORY.length} chars, 6 words).`);
}

main();
