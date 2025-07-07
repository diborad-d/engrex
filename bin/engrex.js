#!/usr/bin/env node
import { convertEnglishToRegex } from "../lib/converter.js";

const input = process.argv.slice(2).join(" ");
if (!input) {
  console.log('Usage: engrex "describe pattern in English"');
  process.exit(1);
}

const { regex, explanation } = convertEnglishToRegex(input);
console.log(`\n🧪 Regex:\n${regex}\n\n💡 Explanation:\n${explanation}\n`);
console.log("Thank you for using Engrex! If you found this tool helpful, please consider supporting its development by sharing it with others or contributing to the project.");