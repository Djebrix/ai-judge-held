import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The page goes dark on its own. " +
  "The cursor stops blinking. " +
  "A mug sits beside you, half full, still warm enough to hold. " +
  "Nothing here needs an answer. " +
  "The words you have read settle where they landed, like dust in late light.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
