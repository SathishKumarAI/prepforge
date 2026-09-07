---
qid: ing_efd7edd089__aws__local
question: 'Explain: Key-Value Store — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 494
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:17-05:00'
sources: []
---

**Situation (Customer Obsession + Ownership)**  
When I was building a recommendation engine for an e‑commerce platform, my product owner asked me to choose the right persistence layer for user‑profile attributes that change frequently (e.g., preferences, cart contents). The goal: keep latency < 5 ms while handling 10M concurrent users.

**Task**  
I had to map 15 database categories—relational, document, key‑value, wide‑column, graph, time‑series, column‑store, search, object‑storage, in‑memory, NoSQL, NewSQL, distributed ledger, event‑streaming, and multi‑model—to specific use cases and justify my choice.

**Action**  
I created a decision matrix (schema flexibility, consistency model, query patterns, scaling needs). For this case I selected **Amazon DynamoDB (key‑value + document)** because:

- **Scalability & Availability:** Managed, auto‑scaling with single‑digit ms latency and 99.999 % availability.
- **Cost:** On‑demand pricing matched our traffic spikes; we avoided over‑provisioning by leveraging Adaptive Capacity.
- **Integration:** Seamless with Lambda for real‑time updates and S3 for backups.

I also outlined fallback options:  
| Use case | Database type | When to use | Key AWS service |
|----------|---------------|-------------|----------------|
| Heavy joins, ACID | Relational (Aurora) | Transactional data | Aurora Serverless |
| Full‑text search | Search (OpenSearch) | Product catalog | OpenSearch Service |
| Time‑series analytics | TSDB (Timestream) | IoT telemetry | Timestream |

**Result (Deliver Results)**  
After deployment, read latency dropped from 18 ms to 4.7 ms and we reduced monthly storage costs by **32 %** versus a MySQL baseline. The model now supports real‑time personalization for all users.

**Reflection**  
I learned that over‑engineering with a monolithic RDBMS can cripple performance; the key is *dive deep* into workload patterns before committing. This approach earned me a “bar‑raiser” endorsement in our hiring panel, highlighting ownership and data‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
