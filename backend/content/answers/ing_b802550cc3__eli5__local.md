---
qid: ing_b802550cc3__eli5__local
question: 'Explain: Distributed Cache — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 236
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:05-05:00'
sources: []
---

Imagine a library that has many branches, but everyone wants the same popular book at once. If every branch had its own copy, people would wait for each other’s shelves to open, and books could be out of sync. Instead, the library keeps a “master” copy in a central room and lets each branch keep a small, quick‑access copy of that book on their desks. When someone asks for the book, they first check their desk; if it’s there, they get it immediately. If not, they fetch it from the master room, store it on their desk, and then serve it to others.  

In computing, a **distributed cache** works like those branch desks: multiple servers hold short‑term copies of data that is expensive to recompute or fetch from a slow database. The “master” is usually a primary data source; the caches keep data fresh by refreshing periodically or when changes occur. This reduces latency and eases load on the main system, just as the library saves time for all its patrons.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
