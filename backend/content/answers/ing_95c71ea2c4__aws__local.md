---
qid: ing_95c71ea2c4__aws__local
question: What is Cassandra? — Cassandra Vs MongoDB Comparison | MongoDB
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:30-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“What is Cassandra and how does it compare to MongoDB?”*  

**Situation / Task:**  
At my previous role, we were migrating a real‑time inventory system from a legacy MySQL stack to a NoSQL solution. The goal was 99.9 % availability across three regions while keeping per‑record latency <5 ms and scaling to 10 M writes/sec.

**Action (Design):**  
I chose **Apache Cassandra** because it offers tunable consistency, linear scalability, and built‑in multi‑region replication—exactly what we needed. I mapped our product data model into a wide‑column store: a *products* table keyed by `product_id` with columns for `price`, `stock_level`, and time‑series price history.  

I compared it to **MongoDB** (document store) and found:
| Feature | Cassandra | MongoDB |
|---------|-----------|---------|
| Consistency model | Tunable (quorum, one) | Strong by default, but weaker in multi‑region writes |
| Write latency | 2–3 ms (single node) | ~5 ms with journaling |
| Horizontal scaling | Add nodes → linear throughput | Sharding needed; higher operational overhead |
| Multi‑region replication | Built‑in, no extra infra | Requires Atlas Global Clusters or custom solutions |

**Result:**  
The migration delivered 99.97 % availability, reduced write latency by 40 %, and cut ops costs by 30 % (no need for secondary indexes or manual sharding).  

**Leadership Principles Anchored:**  
*Customer Obsession* – we chose a system that guarantees the lowest latency for our users. *Ownership* – I owned the end‑to‑end migration, from data modeling to production monitoring. *Dive Deep* – the side‑by‑side comparison drove my decision, and I quantified impact with real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
