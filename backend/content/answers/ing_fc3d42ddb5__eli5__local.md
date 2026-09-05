---
qid: ing_fc3d42ddb5__eli5__local
question: A lawyer asks a question about a 200-page credit agreement where the operative
  clause on page 140 depends on a defined term on page 8. How do you build retrieval
  that gets this right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 202
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:15-05:00'
sources: []
---

Imagine the contract is a giant recipe book. Page 8 contains the “secret sauce” name (the defined term), and page 140 says “use the secret sauce in this special dish.” To find that instruction you can’t just look at page 140 alone; you must first know what the secret sauce actually is.

In AI, we build a *cross‑referencing retrieval system* that mimics this. First, it reads every page and stores each defined term (the “secret sauces”) with its exact wording. Then, when a question references an operative clause, the system looks up that clause, sees which defined terms it cites, and pulls in the corresponding definitions from earlier pages. By linking clauses to their definitions automatically, the AI can answer correctly—just as a cook who knows both the recipe and the ingredients can make the dish right.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
