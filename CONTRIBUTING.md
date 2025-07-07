# Contributing to Engex

# =========================

# Thank you for your interest in contributing to Engex! This guide will help you get started with development, testing, and adding new features.

## 🛠️ Getting Started

1. **Clone the Repository**

   ```bash
   git clone git@github.com:diborad-d/Engex.git
   cd Engex
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Link the Package**

   ```bash
   npm link
   ```

4. **Run the CLI**

   ```bash
   engex "match a 5 digit zip code"
   ```

   Output:

   ```
   🧪 Regex:
   \b\d{5}\b

   💡 Explanation:
   Matches exactly 5 digits (U.S. ZIP code)
   ```

## 📁 Where to Contribute

| Area                | Files / Folders                     |
| ------------------- | ----------------------------------- |
| CLI Code            | `bin/engrex.js`, `lib/converter.js` |
| Regex Patterns      | `data/patterns.json`                |
| Tests               | `test/test.js`                      |
| CI / GitHub actions | `.github/workflows/ci.yml`          |

## 📐 Regex Pattern Format

To add new patterns, update `data/patterns.json` like this:

```json
{
  "pattern": "match a number between 1 and 100",
  "regex": "\\b([1-9][0-9]?|100)\\b",
  "explanation": "Matches numbers 1 to 100",
  "category": "numbers"
}
```

## 🤖 Fuzzy Matching

Engrex supports fuzzy English input using `string-similarity`. Try to keep your `pattern` strings natural and concise for better match performance.

## 📦 Submitting a PR

- Follow conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- Create a clear PR title and description
- Run tests before submitting
