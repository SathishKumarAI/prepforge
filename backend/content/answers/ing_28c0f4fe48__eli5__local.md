---
qid: ing_28c0f4fe48__eli5__local
question: 'Explain: Next, let''s look at what do you — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 245
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:16-05:00'
sources: []
---

Imagine your data is like a library that keeps growing every day.  
A **database** is the building, and each table is a shelf with books (rows).  
When you design it for an interview, think of three simple rules:

1. **Choose the right type of building** – Use a relational database if you need strict relationships (like “author ↔ book”) or a NoSQL store when you want to add new kinds of information without re‑building everything.

2. **Put books where they’re most useful** – Place highly‑used data on fast shelves (indexes) so people can find it quickly, but keep rarely‑used items in the back rooms to save space.

3. **Plan for future borrowers** – Design tables with a primary key (a unique ID) and use foreign keys (links) so new books can be added without breaking the system.

By treating your database like a well‑organized library—choosing the right building, placing items strategically, and planning for growth—you’ll impress interviewers and keep data easy to find.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
