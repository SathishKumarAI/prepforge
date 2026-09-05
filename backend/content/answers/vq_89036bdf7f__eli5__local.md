---
qid: vq_89036bdf7f__eli5__local
question: What is the difference between Regular Subquery and Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 207
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:00-05:00'
sources: []
---

Think of a regular subquery like a separate recipe you read once before cooking. You look up the list of ingredients (the subquery’s result set) and then use that whole list in your main dish. The ingredient list never changes while you cook; it stays fixed.

A correlated subquery is more like asking a sous‑chef for help while you’re making each bite: “What’s the best seasoning for this portion?” For every row (or bite) you process, the subquery runs again with that specific row’s information. So its answer can differ from one iteration to the next.

**Key terms**
- *Subquery*: a query written inside another query.
- *Regular (un-correlated)*: runs once, returns a static set of values.
- *Correlated*: depends on columns from the outer query and executes repeatedly, once per row.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
