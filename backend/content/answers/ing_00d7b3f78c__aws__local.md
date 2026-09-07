---
qid: ing_00d7b3f78c__aws__local
question: 'Explain: Real-Time Presence Platform API — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 525
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:26-05:00'
sources: []
---

**Situation (S)**  
In my last role I was tasked with building a Real‑Time Presence Platform for a global gaming network that needed to show player status to millions of concurrent users while keeping latency below 50 ms. The business goal was a 30 % lift in user engagement, so we had to deliver instant presence updates without breaking the existing billing system.

**Task (T)**  
Design an API‑first architecture that scales to >10 M active players, guarantees at least 99.9 % availability, and keeps cost per event < $0.00001.

**Action (A)**  
1. **Event ingestion** – Use **Amazon Kinesis Data Streams** for high‑throughput, low‑latency ingestion; shard key = `user_id`.  
2. **Processing & state** – Lambda functions with **AWS Step Functions** orchestrate idempotent updates to a *Redis* cache (Amazon ElastiCache). This gives sub‑10 ms read/write and is the single source of truth for “online/offline” status.  
3. **API layer** – Amazon API Gateway + Lambda authorizer exposes `/presence/{user_id}`; responses are cached in CloudFront edge caches to reduce origin load.  
4. **Real‑time push** – For subscribed clients, publish events via **Amazon SNS Mobile Push** or WebSocket (API Gateway WebSocket).  
5. **Observability** – Metrics in Amazon CloudWatch + OpenTelemetry traces; alarms on > 10 % error rate trigger auto‑scale of Lambda concurrency.

**Result (R)**  
The platform handled 12 M concurrent users, latency < 30 ms, and dropped the presence‑related bounce rate by 28 %. Cost per event was $0.000008, below our target. I documented the failure mode when a Kinesis shard overflowed; after adding a pre‑processing Lambda we avoided data loss and earned an “AWS Hero” badge.

**Leadership Principles Highlighted**  
- **Ownership**: Took end‑to‑end responsibility for design, deployment, and cost control.  
- **Dive Deep**: Tuned shard sizing, Lambda memory, and Redis eviction policies to hit SLA targets.  

Bar‑raisers look for the same depth of analysis, quantifiable impact, and a clear learning loop—exactly what I delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
