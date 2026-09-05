---
qid: ing_c18dd01ba8__eli5__local
question: 'Explain: Constrained Decoding (CFG & Regex) — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 272
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:57-05:00'
sources: []
---

Imagine you’re baking a cake but the recipe book says the frosting must be exactly three layers: chocolate, vanilla, and strawberry, in that order. Your oven (the language model) can sprinkle any flavor it likes, but you give it a “frosting checklist” that forces it to follow the rule.

**Constrained decoding** is that checklist.  
- **CFG (Context‑Free Grammar)** is like a set of recipe cards that list all valid combinations of ingredients and steps—think of it as a cookbook that says “you can add eggs before or after flour, but you must finish with sugar.” The model only accepts strings that match one of these recipes.  
- **Regex** (regular expression) is a shorter, pattern‑based rule, like “the word must start with ‘AI’ and end with a digit.” It’s great for simple patterns.

When the model generates text, it checks each new word against this checklist; if a word would break the recipe, it skips or rewrites it. The result is structured output that obeys your rules—just like a cake that always has chocolate‑vanilla‑strawberry frosting in order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
