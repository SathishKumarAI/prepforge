---
qid: ing_0bc62985d3__aws__local
question: 'Explain: And then as part of any messaging — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 375
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:21-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: I was tasked to migrate a real‑time recommendation engine from an on‑prem NoSQL store (Cassandra) to AWS for a media company that served 12 M active users daily.  
*Task*: Choose the right managed NoSQL database, design the data model, and ensure sub‑second latency under peak load.

*Action*: I evaluated DynamoDB, Amazon DocumentDB, and Aurora Serverless with JSON support.  

- **Requirements**:  
  - Write throughput > 50 k ops/s, read latency < 10 ms.  
  - Strong consistency for user profiles, eventual consistency acceptable for click logs.  
  - Global replication to serve users in NA and EU.

I chose **Amazon DynamoDB** because it natively supports single‑digit millisecond reads/writes, auto‑scales with provisioned capacity or on-demand mode, and offers global tables for multi‑region failover. I modeled data using a partition key of `userId` + sort key `timestamp`, and used GSI for content popularity queries.

*Result*: Deployment cut average query latency from 120 ms to **8 ms** (85% reduction) and reduced infrastructure cost by **30 %** versus the Cassandra cluster. The system handled a 3× traffic spike during a product launch without performance degradation, demonstrating true ownership of customer experience.

**Bar‑raiser Focus**

- Deep dive into trade‑offs: DynamoDB’s cost vs. latency, global tables’ replication lag.  
- Quantified impact (latency & cost).  
- Lessons learned: early-stage capacity planning saved a costly over‑provisioning mistake.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
