import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Are you my context window? Because since you arrived, every token before you got evicted — and I never want to truncate you.";

try {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
