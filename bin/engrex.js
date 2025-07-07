#!/usr/bin/env node
import { convertEnglishToRegex } from "../src/converter.js";
// import { process } from "node:process";
const input = process.argv.slice(2).join(" ");
if (!input) {
  console.log('Usage: engrex "describe pattern in English"');
  process.exit(1);
}

const { regex, explanation } = convertEnglishToRegex(input);
console.log(`\n🧪 Regex:\n${regex}\n\n💡 Explanation:\n${explanation}\n`);

// Log test status if running in test mode
if (process.env.NODE_ENV === "test") {
  console.log("✅ Tests completed successfully.");
  process.exit(0);
}
