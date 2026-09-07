---
qid: ing_f8e9fae1d4__aws__local
question: 'Explain: Infrastructure costs — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:10-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation (S)** – While launching a global recommendation engine for an e‑commerce platform, my team faced escalating RDS costs: >$120K/month and frequent throttling during peak traffic.

**Task (T)** – I had to reduce spend by 40% while keeping 99.9 % availability and sub‑200 ms query latency across 10 regions.

**Action (A)** –  
1. **Dive Deep into the data model**: identified that a single table held >3 B rows, with hot keys skewed 70/30.  
2. **Implemented horizontal sharding** on the `user_id` hash, creating 12 Aurora MySQL clusters (one per shard) in an *Aurora Serverless v2* VPC.  
3. Deployed a lightweight API Gateway + Lambda layer to route queries based on shard key.  
4. Added **Amazon CloudWatch metrics** and **AWS X-Ray** for end‑to‑end tracing, allowing automated scaling decisions (burst capacity).  

**Result (R)** –  
- Cost dropped from $120K to $72K/month (+40 % savings).  
- Latency improved from 350 ms to 135 ms (avg) and 99.9 % of requests <200 ms.  
- Resilience: each shard can failover in <30 s with no downtime, meeting SLA.

**Bar‑raiser note:** I owned the full redesign, dove deep into query patterns, quantified impact (cost + latency), and learned that proactive sharding coupled with serverless scaling yields predictable economics at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
