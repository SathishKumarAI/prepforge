---
qid: ing_f4ac8c027c__aws__local
question: 'Explain: over here we applied it a and — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 574
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:17-05:00'
sources: []
---

**Situation (S)**  
I led the redesign of our real‑time collaborative editor for a SaaS platform that served 1 M daily active users. The legacy system used naïve locking and caused latency spikes during peak co‑editing sessions, leading to a 12 % drop in Net Promoter Score (NPS).  

**Task (T)**  
Build an operational transformation (OT) engine that guarantees *conflict‑free* document state while scaling horizontally, keeping per‑operation latency under 50 ms and cost below $0.02 per active user per month.

**Action (A)**  
1. **Requirements & Design** – Defined the OT algorithm as a *deterministic transformation graph*; chose a *sharded WebSocket gateway* with Amazon API Gateway + AWS Lambda for session hand‑off.  
2. **AWS Services** –  
   - **Amazon DynamoDB** (global tables) to store document state and version vectors, providing single‑digit millisecond reads/writes at 99.999% availability.  
   - **Amazon Kinesis Data Streams** to fan‑out edit events to all replicas with *exactly‑once* semantics via Lambda stream processors.  
   - **AWS AppSync** for GraphQL subscriptions, leveraging its real‑time pub/sub layer and fine‑grained IAM auth.  
3. **Scalability & Cost** – Used DynamoDB auto‑scaling (up to 10 k RCU/WCU) and Kinesis shards tuned by observed throughput (~200 ops/s per document). Estimated monthly cost ≈$0.015/user/month, a 30 % savings over the legacy EC2 fleet.  
4. **Testing & Rollout** – Ran chaos experiments (network partitions, latency injection) to validate *conflict‑free* convergence; performed A/B testing with 20 % of traffic, observing NPS rise from 68 → 83 and a 25 % reduction in server CPU utilization.

**Result (R)**  
Post‑deployment, per‑operation latency dropped to 32 ms, concurrency support grew from 500 → 5 k simultaneous editors per document, and the system handled peak traffic of 1.2 M ops/s without outage. NPS improved by **15 points**, and we achieved a **$0.015/user/month** cost model, exceeding our target by 30 %.  

*Leadership Principles*: **Customer Obsession** (NPS lift), **Ownership** (end‑to‑end delivery), **Dive Deep** (OT algorithm & distributed consistency), **Bias for Action** (rapid prototype & A/B test).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
