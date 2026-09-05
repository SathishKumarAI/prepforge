---
qid: ing_08fc8fc888__eli5__local
question: 'Explain: Error pretty-printing — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 212
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:54-05:00'
sources: []
---

Imagine you’re a chef who just cooked a dish and the recipe book says, “Oops! You added too much salt.” A plain text note is fine, but if it tells you exactly which ingredient was wrong, how much to adjust, and where in the recipe it happened, you can fix it instantly.  
Zod’s *error pretty‑printing* works the same way for data validation. When a piece of JSON doesn’t match what your program expects, Zod shows a friendly, indented list:  

- **Field name** (e.g., `age`)  
- **What went wrong** (“Expected number, got string”)  
- **Location in the nested structure** (like “user.profile.age”)

This is like having a recipe with highlighted mistakes instead of a vague “something’s off.” It lets developers spot and correct problems quickly without digging through raw error logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
