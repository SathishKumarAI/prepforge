---
qid: vq_883124223a__eli5__local
question: What is a derived table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 195
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:56-05:00'
sources: []
---

Think of a recipe book that only lists raw ingredients—flour, sugar, eggs—but never shows how to combine them into a cake. A **derived table** is like the finished cake you make in your kitchen: it’s built from those raw ingredients (the base tables) by applying some cooking steps (queries). In data engineering, a derived table is a virtual “table” created on‑the‑fly when you run a query; it doesn’t exist physically in the database unless you explicitly save it. It’s defined by a SELECT statement that pulls rows from one or more source tables, possibly filtering, joining, or aggregating them. When you reference this derived table later, the database recomputes it each time, just as you’d re‑make the cake whenever you need it. This lets you reuse complex logic without duplicating data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
