---
qid: ing_66f0e8c228__aws__local
question: 'Explain: Non-Functional Requirements — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 411
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:41-05:00'
sources: []
---

**Situation / Task**  
I led the architecture of a real‑time presence platform for a global video‑chat product that needed to handle 10 M concurrent users and deliver latency < 50 ms while guaranteeing 99.9 % availability.

**Action**  
- **Ownership & Bias for Action:** I scoped the non‑functional requirements (latency, scalability, cost) and mapped them to a multi‑region design.  
- **Dive Deep:** Built a data model that stores user presence in DynamoDB Global Tables with TTL for automatic cleanup.  
- **AWS services chosen**:  
  - *Amazon Kinesis Data Streams* to ingest presence events at > 1 M records/sec.  
  - *Lambda@Edge* (or CloudFront Functions) for edge‑level state updates, keeping the round‑trip < 10 ms.  
  - *ElastiCache Redis Cluster* per region for hot reads of online status.  
  - *AWS Global Accelerator* to route traffic to the nearest healthy endpoint.  
- **Scalability & Availability:** Auto‑scaling Lambda and Kinesis shards; cross‑region replication ensures no single point of failure.  
- **Cost Optimization:** Reserved capacity for Redis, spot instances for processing, and DynamoDB on-demand pricing for bursty traffic.

**Result**  
The platform achieved 99.97 % availability during a 3‑month beta with 8 M concurrent users and maintained average latency of 42 ms, exceeding the SLA by 30 %. Post‑launch monitoring showed a 25 % reduction in support tickets related to presence glitches.

*Bar‑raiser cues*: clear ownership of non‑functional goals, deep dive into AWS trade‑offs, quantified impact (latency & uptime), and continuous learning from pilot failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
