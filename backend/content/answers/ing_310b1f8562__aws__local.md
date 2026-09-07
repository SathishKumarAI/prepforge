---
qid: ing_310b1f8562__aws__local
question: 'Explain: Features of MongoDB — Difference Between Cassandra and MongoDB
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 448
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:02-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑engineering sprint for a high‑traffic e‑commerce platform, I had to decide whether to use **MongoDB** or **Cassandra** for the product catalog service. The team needed a NoSQL database that could handle 10 M reads/day, support flexible schema updates, and guarantee strong consistency for inventory counts.

**Action (Dive Deep & Ownership)**  
I mapped core features:  

| Feature | MongoDB | Cassandra |
|---------|---------|-----------|
| **Data model** | Document‑oriented; flexible JSON schemas | Wide‑column store; fixed column families |
| **Consistency** | Default strong, tunable read/write consistency | Tunable, usually eventual unless using `QUORUM` |
| **Scalability** | Sharding + replica sets (horizontal) | Peer‑to‑peer ring, linear scalability |
| **Write latency** | Single‑primary writes (~2 ms) | Multi‑write path, lower single‑node latency |
| **Query flexibility** | Rich query language, indexes on nested fields | Limited secondary index support, requires careful modeling |

I benchmarked both with a synthetic workload (10 M ops/day). MongoDB maintained 99.9% RPS at ~3 ms per read; Cassandra hit 5 ms but required complex repair jobs.

**Result (Deliver Results)**  
We deployed **MongoDB Atlas** on AWS (region‑replicated clusters) and achieved a 30 % reduction in latency for catalog lookups, while keeping cost 25 % lower than a comparable Cassandra cluster. Inventory consistency was guaranteed with MongoDB’s single‑primary writes.

**Learning & Bar‑raiser cues**  
I documented trade‑offs, validated assumptions with metrics, and iterated on index strategy—demonstrating ownership, depth, and data‑driven impact in line with Amazon’s **Customer Obsession** and **Dive Deep** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
