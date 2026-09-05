---
qid: ing_8466b17c14__eli5__local
question: 'Explain: The NGM application sits inside a VPC — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 228
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:06:42-05:00'
sources: []
---

Imagine your NGM application as a private garden inside a fenced‑in neighborhood (the VPC). You want to store visitors’ names and the plants they bring, but you don’t need strict rows or columns—just quick look‑ups that can grow with no fixed schema.

A **NoSQL** database is like a flexible filing cabinet that lets you add new drawers anytime. Two popular choices on AWS are:

* **Amazon DynamoDB** – a fully managed key‑value store that scales instantly, great for high‑traffic apps where every read or write must be fast.
* **Amazon DocumentDB (with MongoDB compatibility)** – stores JSON‑like documents, ideal when you need richer data structures and want to use familiar MongoDB queries.

Pick DynamoDB if speed and simplicity matter most; choose DocumentDB if your data naturally fits nested documents. Both sit safely inside your VPC, protected by the same security fences as your app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
