---
qid: ing_5cb06f324e__eli5__local
question: 'Explain: Cardinality in Time Series Databases — What Is Cardinality in
  a Database? - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 192
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:16-05:00'
sources: []
---

Think of a time‑series database as a giant library that stores books about everything that happens over time—temperature readings, website hits, sensor vibrations. **Cardinality** is the number of different “authors” (unique values) in a particular column of that library.  

Imagine you’re looking at a book that lists every person who walked into a store each day. If only three people ever came, the cardinality of the “visitor name” column is 3. If millions of unique visitors appear, the cardinality jumps to millions. High cardinality means the database must keep track of many distinct values, which can slow searches and increase storage needs.  

So, cardinality is simply how many unique items a field contains; it’s a key measure of complexity for time‑series data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
