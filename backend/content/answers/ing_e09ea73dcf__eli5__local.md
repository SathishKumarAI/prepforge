---
qid: ing_e09ea73dcf__eli5__local
question: What Is Cardinality in Data Modeling? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 281
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:23-05:00'
sources: []
---

**Cardinality is like the “relationship size” between two tables.**  
Think of two groups of people: **Students** and **Courses**.  
*One student can take many courses,* but *each course can have many students.* That pattern—many-to-many—is a cardinality type.  

There are four main kinds:

| Cardinality | Analogy |
|--------------|---------|
| One‑to‑One (1:1) | A person has one passport, and each passport belongs to that same person. |
| One‑to‑Many (1:N) | A teacher teaches many students, but each student has only one teacher for a class. |
| Many‑to‑One (N:1) | Many customers buy from one store; the store is shared by all those customers. |
| Many‑to‑Many (M:N) | Students enroll in many courses *and* courses have many students—like our first example. |

When you design a database, you decide which cardinality fits each pair of tables so that data stays consistent and queries run smoothly. Cardinality tells the system how records “talk” to one another—just as knowing whether a friendship is exclusive or shared helps you understand social networks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
