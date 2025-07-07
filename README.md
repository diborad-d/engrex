# Engex

# Engrex 🧪

**English to Regex CLI Tool**  
Convert human-readable instructions into regular expressions.

## 🔧 Installation

```bash
git clone git@github.com:diborad-d/engrex.git
cd engrex
npm install
npm link
```

## 🚀 Usage

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

## 📂 Directory Structure

- `bin/engrex.js` — CLI entry point
- `lib/converter.js` — Regex rule loader and matcher
- `data/patterns.json` — Scalable list of English-to-regex mappings
- `test/test.js` — Sample test runner

## 🧠 Adding New Patterns

Edit `data/patterns.json` and add entries like:

```json
{
  "pattern": "match a date in YYYY-MM-DD format",
  "regex": "\\d{4}-\\d{2}-\\d{2}",
  "explanation": "Matches date like 2023-12-31",
  "category": "dates"
}
```

## 🧪 Run Tests

```bash
node test/test.js
```

## ✨ Use Cases

- Chatbots
- AI learning tools
- Regex learning and testing
- Command parsing

- feautre enhancements
  -- add new regex patterns
- CLI improvements
  -- better error handling
  -- more user-friendly output
- Documentation updates
- CI/CD setup
  -- GitHub Actions for automated testing
- ML
  -- integrate machine learning for better pattern matching

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make your changes and commit them
4. Push to your fork and create a pull request

## 📚 Documentation

Please refer to the [Engex Wiki](https://github.com/diborad-d/engrex/wiki/Engrex:-English-to-Regex-CLI-Tool) for detailed documentation on usage, development, and contribution guidelines.

## 📦 Submitting a PR

- Follow conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- Create a clear PR title and description
- Run tests before submitting
- Ensure your changes are well-documented
### license: MIT
