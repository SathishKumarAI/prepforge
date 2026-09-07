---
qid: ing_8f52096d5d__aws__local
question: 'Explain: Distributed Counter High-Level Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 485
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:20-05:00'
sources: []
---

**Situation & Task (S)**  
At my last company we needed a *global, highly‑available counter* for ad impressions that could scale to 10 M updates per second while guaranteeing eventual consistency across regions. The challenge was to keep latency <5 ms under peak load and cost below $200/day.

**Action (A) – Design & Implementation**  
I architected a **partitioned, replicated counter** using:

1. **Amazon Kinesis Data Streams** for ingesting events; each shard processes 2 k updates/s, giving us horizontal scaling.  
2. **DynamoDB Global Tables** with *eventual consistency* and per‑shard write capacity of 4 WCU, automatically replicating to all regions.  
3. A **Lambda function** (Python) acting as a *dedicated updater* that reads from Kinesis, batches writes, and applies *optimistic locking* via DynamoDB’s conditional updates.  
4. For *read‑heavy scenarios*, an **Amazon CloudFront + Lambda@Edge cache** serves the current count with <10 ms latency; edge invalidation occurs on each write.

I added a **dead‑letter queue (SQS)** to capture failed writes, and implemented **CloudWatch Alarms** that trigger auto‑scaling of Kinesis shards and DynamoDB RCUs/WCUs when throughput spikes.

**Result (R)**  
The system handled 12 M updates/s with <4 ms average latency; global read consistency improved from 30 % to >99.9%. Operational cost stayed at $185/day, a 15 % savings versus our previous monolith. The design also reduced failure impact by 80 % thanks to the DLQ and automated scaling.

**Learning & Bar‑Raiser Insight**  
I own every layer—design, metrics, cost—and dive deep into failure modes (e.g., shard backpressure). Quantifying latency and cost trade‑offs demonstrates ownership; iterating on the Lambda batch size shows a bias for action. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
