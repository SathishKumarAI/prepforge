---
qid: ing_f4c32fdf7f__aws__local
question: 'Explain: Blob Datastore — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 501
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:33-05:00'
sources: []
---

**Situation & Task**  
While redesigning a data‑layer for an e‑commerce recommendation engine, I had to pick the right persistence store for each workload (user profile, clickstream, model artefacts). The brief: “Use 15 database types—pick one per use case, justify with metrics.”  

**Action**  
I mapped **Customer Obsession** and **Ownership** into a quick decision matrix: *Latency*, *Consistency*, *Write‑throughput*, *Schema flexibility*, *Cost*. For each of the 15 patterns I listed:

| Use‑case | Database | Why (AWS services) | Key trade‑offs |
|---|---|---|---|
| Real‑time inventory | DynamoDB (low‑latency, ACID at partition level) | <1 ms reads, auto‑scaling | Eventual consistency on global tables |
| User sessions | Redis‑Elasticache | In‑memory, 10 µs ops | Volatile storage, higher cost per GB |
| Clickstream logs | S3 + Athena | Cost‑effective, serverless analytics | Batch query latency (≈5 min) |
| Product catalog (search) | OpenSearch | Full‑text search, auto‑indexing | Requires re‑index on schema change |
| ... | … | … | … |

I ran a **proof of concept**: 1 M requests/day to DynamoDB cost $0.75/month vs $15 for RDS MySQL; query latency dropped from 50 ms (MySQL) to <2 ms (DynamoDB).  

**Result**  
The new architecture cut read‑latency by **70%**, reduced storage spend by **60%**, and allowed the recommendation team to iterate models twice as fast. I documented lessons: always surface cost/latency trade‑offs in a single slide for stakeholders—“learning from failure” means iterating on the decision matrix after each sprint.

**Bar‑raiser cues**  
* Ownership – I owned end‑to‑end data flow and cost model.  
* Dive Deep – I benchmarked raw metrics across services.  
* Quantified Impact – 70% latency, 60% cost savings.  
* Learning – Updated the decision matrix after each iteration, shared with the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
