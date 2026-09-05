---
qid: ing_cb14a924ed__eli5__local
question: 'Explain: Cardinality in Database Example — What Is Cardinality in a Database?
  - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 205
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:54-05:00'
sources: []
---

**Cardinality is like the “popularity” of a column’s values.**  
Imagine a school catalog where each student has a *grade* (A, B, C…) and a *major* (Math, History, Biology…). If every student chose a different grade, that column would have **high cardinality**—many unique values relative to the number of rows. If everyone had the same grade, it would be **low cardinality**—only one unique value.  

In databases, high‑cardinality columns (like social‑security numbers or email addresses) give the database many distinct options; low‑cardinality ones (like gender or country codes) have few. Knowing this helps the system decide how to index data and speed up searches. So, cardinality is simply a count of how many unique entries a column holds compared to its total rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
