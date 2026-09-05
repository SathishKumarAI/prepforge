---
qid: ing_77ee3910b2__eli5__local
question: 'Explain: ​ Reference-free vs reference-based evaluators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 237
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:46:45-05:00'
sources: []
---

Imagine you’re judging how tasty a homemade soup is.  
**Reference‑based evaluation** is like asking a seasoned chef (the “reference”) to taste your soup and compare it to a perfect recipe. The chef notes differences in flavor, texture, or seasoning—this tells you exactly what’s off.

**Reference‑free evaluation** skips the chef entirely. Instead, you look for clues that soups are usually good: does the broth look clear, is the salt level balanced, do the vegetables appear fresh? You judge quality by internal patterns and common sense, not by comparing to a known ideal.

In AI, a *reference* is a perfect answer or output; a *reference‑based evaluator* measures how close the model’s result is to that answer. A *reference‑free evaluator* tries to assess quality using only the model’s own output—like tasting soup with no expert at hand. Both methods aim for the same goal, but one relies on an external benchmark while the other infers quality from the content itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
