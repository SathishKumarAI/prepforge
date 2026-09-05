---
qid: ing_f4d1d4763d__eli5__local
question: 'Explain: But normally you would also want to — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 261
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:02:26-05:00'
sources: []
---

Think of picking a library for your book‑shop app like choosing a kitchen for cooking.  
A **relational database** (SQL) is the classic pantry: every item has a fixed shelf and you can find any book by its exact title or author. It’s great when recipes (queries) need strict ordering, joins, and strong consistency—like making a perfect soufflé that must rise exactly as written.  

A **NoSQL database** (MongoDB, Cassandra, etc.) is the modern open‑plan kitchen: shelves are flexible, you can stack items wherever you like, and you can whip up many dishes at once without waiting for a single ingredient to be ready. It shines when you need fast write bursts or handle massive, varied data—like preparing countless snack packs quickly.

In an interview, explain that the choice depends on your “cooking” needs:  
- **Structure & joins?** Use SQL.  
- **Scale, flexibility, and quick writes?** Go NoSQL.  

Just like a chef chooses tools for the dish, pick the database that matches your data’s shape and traffic pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
