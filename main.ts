// One Emoji, One Dream Vacation — Japanese Castle
// Entry: a single emoji, the castle I would walk to in my dream trip.
// Duel: CASTLE takes the field — Fuji converged (14 titles), castle 0; a named place, not a postcard cliché.
import { writeFileSync, readFileSync, chmodSync } from "node:fs";

const EMOJI = "🏯";

const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`emoji must be 1-8 characters, got ${chars.length}`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("emoji must not be whitespace-only");
}

writeFileSync("/output/entry.txt", EMOJI, "utf8");
chmodSync("/output/entry.txt", 0o644);

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== EMOJI) {
  throw new Error("read-back mismatch");
}
