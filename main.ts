// Writes one line of a funny out-of-office auto-reply to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 140 characters, a single line.
// Revision note: the reply text below is final; this edit only clarifies
// that the output directory comes from MAKEFUN_OUTPUT_DIR when set.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I am currently out of office, teaching my out-of-office reply to answer emails so I never have to come back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
