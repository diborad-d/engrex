import { convertEnglishToRegex } from "../src/converter.js";
const tests = [
  "5 digit zip code",
  "us phone number",
  "email address",
  "starts with capital letter and ends with period",
  "chatbot command prefix (e.g., /help)",
];

tests.forEach((test) => {
  const { regex, explanation } = convertEnglishToRegex(test);
  console.log(
    `Test: "${test}"\nRegex: ${regex}\nExplanation: ${explanation}\n`
  );
});
