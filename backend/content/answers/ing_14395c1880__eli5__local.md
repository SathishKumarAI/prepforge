---
qid: ing_14395c1880__eli5__local
question: 'Explain: Now what is the third category? Let''s — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 212
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:22-05:00'
sources: []
---

In a system‑design interview, people usually talk about **three kinds** of database choices:  
1. **Relational (SQL)** – tables with rows and columns, great for strict relationships.  
2. **NoSQL** – flexible key‑value or document stores that let you add new fields on the fly.  

The **third category** is **NewSQL**. Think of it like a hybrid car: it keeps the “fuel efficiency” (scalability) of an electric engine (NoSQL) while still using the same “transmission” (ACID transactions) as a gasoline car (relational). NewSQL databases keep strong consistency and SQL‑style querying, but they’re built to run horizontally across many servers, just like NoSQL systems. So if you need the reliability of a relational DB **and** the ability to grow without shattering, that’s the NewSQL choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
