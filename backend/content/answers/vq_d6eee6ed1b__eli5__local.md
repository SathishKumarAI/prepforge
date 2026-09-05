---
qid: vq_d6eee6ed1b__eli5__local
question: What is a Surrogate Key ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 179
total_tokens: 334
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:53-05:00'
sources: []
---

A **surrogate key** is an artificial ID you give each row in a database table to uniquely identify it, instead of using real data like a name or address.

Imagine a library that tags every book with a plain number—1, 2, 3…—even though the books already have titles, authors, and ISBNs. Those numbers are the surrogate keys. They’re simple, always unique, never change, and let you link tables together without worrying about duplicate or changing real-world values.

In data engineering, we use surrogate keys to keep relationships stable: if a customer’s name changes or two people share a name, their surrogate key still points to the same record. This keeps joins reliable and speeds up queries because computers love handling straight numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
