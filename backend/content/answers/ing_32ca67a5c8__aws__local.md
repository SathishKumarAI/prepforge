---
qid: ing_32ca67a5c8__aws__local
question: 'Explain: High Availability — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 436
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:09-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a production‑grade vector search layer for a recommendation engine that served millions of users per day. The key requirement: **99.999% uptime** while handling >10 k QPS and 1 TB of embeddings.

**Action – Design & Implementation**  
*Architecture:*  
- *Vector store*: Amazon OpenSearch Service (formerly Elasticsearch) with the KNN plugin for GPU‑accelerated approximate nearest neighbour search.  
- *Data ingestion*: Lambda streams new vectors from S3 into OpenSearch via an SNS topic, ensuring eventual consistency.  
- *High availability*: 3 AZs per region, cross‑region read replicas for disaster recovery, and auto‑scaling index nodes (1 GB RAM per node).  
- *Backup & restore*: Daily snapshot to S3 + lifecycle policy to keep only the last 7 days.  

*Cost & Trade‑offs:*  
- Using OpenSearch instead of a custom GPU cluster cuts CAPEX by ~70% and keeps TCO predictable.  
- Trade‑off: Approximate search vs exact; we mitigated this with a re‑ranking step in Lambda that pulls top‑k candidates for final scoring.

**Result**  
After launch, the system achieved **99.9998% availability** over 12 months, handling peak 18 k QPS without throttling. Latency dropped from 120 ms (legacy SQL join) to <30 ms average. The cost per query fell by **35%** versus the previous on‑prem solution.

**Learning & Ownership**  
I set up a failure‑mode analysis board, logged every outage, and iterated on auto‑heal scripts—demonstrating *Ownership* and *Dive Deep*. The success reinforced our bias for action and delivered measurable customer impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
