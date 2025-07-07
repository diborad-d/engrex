// js module to convert English-like expressions to regex patterns
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import stringSimilarity from "string-similarity";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const patternsPath = path.join(__dirname, "../data/patterns.json");
const patterns = JSON.parse(fs.readFileSync(patternsPath, "utf-8"));

export function convertEnglishToRegex(input) {
  const query = input.toLowerCase().trim();
  const patternStrings = patterns.map((p) => p.pattern.toLowerCase());

  const bestMatch = stringSimilarity.findBestMatch(
    query,
    patternStrings
  ).bestMatch;

  if (bestMatch.rating > 0.4) {
    const matched = patterns.find(
      (p) => p.pattern.toLowerCase() === bestMatch.target
    );
    return {
      regex: matched.regex,
      explanation:
        matched.explanation +
        ` (matched: "${matched.pattern}", confidence: ${Math.round(
          bestMatch.rating * 100
        )}%)`,
    };
  }

  return {
    regex: "🤖 Pattern not found.",
    explanation: "Try a more standard or clear description.",
  };
}
