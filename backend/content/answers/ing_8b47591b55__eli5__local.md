---
qid: ing_8b47591b55__eli5__local
question: 'Explain: sequel to save the database after 2014 — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 325
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:12-05:00'
sources: []
---

Imagine your company’s data is a gigantic library that keeps growing every day. Until 2014 most of Uber, Ola and even Amazon stored everything in one huge “main‑floor” bookcase (a single relational database like MySQL). When the shelves became too crowded, the librarians realized they needed a new way to keep the books safe and easy to find.

The “sequel to save the database after 2014” is simply that new strategy: they started using **distributed, cloud‑native storage**—think of it as moving from one big shelf to many small, specialized shelves spread across different rooms. Each room holds a specific type of book (e.g., user profiles, trip logs, payment records) and can be expanded independently. The library’s catalog system (the “service layer”) knows how to ask each room for the right book without ever having to walk into every single shelf.

In plain terms: after 2014 Uber and similar rideshare giants shifted from a monolithic database to a set of micro‑services with their own databases, all coordinated by a central catalog. This lets them grow faster, avoid bottlenecks, and keep data safe even when millions of trips happen every minute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
