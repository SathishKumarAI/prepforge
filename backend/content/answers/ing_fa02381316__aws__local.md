---
qid: ing_fa02381316__aws__local
question: 'Explain: Create a row/document — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 580
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:30-05:00'
sources: []
---

**Situation (S)**  
While leading the migration of our recommendation engine from a legacy relational stack to a NoSQL store, I had to decide between **Cassandra** and **MongoDB** for storing user‑interaction rows/documents.

**Task (T)**  
Deliver a schema that supports high write throughput (> 10k ops/s), low read latency (< 20 ms), and seamless horizontal scaling with minimal operational overhead.

**Action (A)**  
I scoped requirements, benchmarked both systems on our dataset (~3 TB), and ran a pilot on **Amazon Keyspaces (Cassandra‑compatible)** versus **Amazon DocumentDB (MongoDB‑compatible)**.  

*Design choices:*  
- **Keyspaces:** wide‑row model; partition key = `user_id`; clustering by timestamp for time‑series queries.  
- **DocumentDB:** JSON documents with `user_id` and embedded events, indexed on `event_type`.  

*Services & trade‑offs:*  
| | Keyspaces | DocumentDB |
|---|---|---|
| **Scalability** | Linear write scaling via additional partitions; no sharding logic needed. | Auto‑sharded but can hit hot spot limits if key distribution uneven. |
| **Availability** | Multi‑AZ, 99.999% SLA; read replicas for low latency. | Multi‑AZ, but replica lag can exceed 1 s under heavy writes. |
| **Cost** | $0.015/GB/month + $0.00025/write (pay‑as‑you‑go). | $0.18/DB instance-hour + $0.10/GB storage; higher for read replicas. |
| **Operational Complexity** | Managed schema, no index maintenance. | Requires manual index tuning and backups. |

*Result (R)*  
Keyspaces achieved **12 k writes/s** with 18 ms read latency at a 30% lower cost than DocumentDB, while maintaining 99.999% availability. The migration cut operational toil by 40% (reduced index maintenance) and enabled a new real‑time recommendation feature that increased revenue by **$1.2M/month**.

---

### Leadership Principles Highlighted
- **Ownership:** I took full responsibility for the end‑to‑end migration, from requirement gathering to post‑production monitoring.  
- **Dive Deep:** Conducted detailed benchmarks and cost models; presented data‑driven trade‑offs.  

**Bar‑raiser cues:** Demonstrated measurable impact, depth of technical analysis, and learning—pivoting to Keyspaces after observing hot‑spot issues in DocumentDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
