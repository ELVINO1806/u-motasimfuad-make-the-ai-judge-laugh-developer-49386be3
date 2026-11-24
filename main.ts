import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The bug isn't in my code. It's in the part of the code I wrote at 3am, which legally belongs to another person.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
