---
qid: ing_fc1c83d978__aws__local
question: 'Explain: Terminology — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 656
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:07-05:00'
sources: []
---

**Situation (S)**  
I led the redesign of a Real‑Time Presence Platform for a global e‑commerce marketplace that served ~30 M concurrent users during peak holiday windows. The legacy monolith was 4× slower than SLA and had a 0.9 % outage rate, hurting our “Customer Obsession” promise.

**Task (T)**  
Build an event‑driven architecture that delivers presence updates with <200 ms latency, scales to 10⁶ events/s, and guarantees 99.999% availability while keeping costs below the current $2M/month spend.

**Action (A)**  

| Component | AWS Service(s) | Design Choice |
|-----------|----------------|---------------|
| Ingest | **Amazon Kinesis Data Streams** | Partitioned by user‑segment; auto‑scaling shards to 10 k events/s per shard. |
| Compute | **AWS Lambda + Step Functions** | Stateless micro‑functions for state updates, with retries and DLQs; orchestration via Step Functions for idempotency. |
| State Store | **DynamoDB (Global Tables)** | Low‑latency <10 ms writes, multi‑AZ replication for 99.999% durability. |
| Notification | **Amazon SNS + EventBridge** | Push to WebSocket API Gateway; fan‑out to mobile/desktop clients. |
| Monitoring | **CloudWatch + X-Ray** | End‑to‑end tracing and anomaly detection; automated scaling triggers. |

*Scalability:* Kinesis shards auto‑scale, Lambda concurrency scales with event volume, DynamoDB partitions grow with write throughput.  
*Availability:* Multi‑AZ deployments, failover via Global Tables, Lambda retries reduce point failures.  
*Cost:* Spot instances for batch compaction tasks; reserved capacity on DynamoDB reduces spend by 15 %.  

**Result (R)**  
Latency dropped from 650 ms to **<180 ms** (70 % improvement). Peak throughput handled 2× the previous load with a 99.9999 % success rate, reducing outage cost by ~$1M/year. The new platform also cut operational overhead by 25 % through automated scaling and monitoring.

---

### What a bar‑raiser listens for

| Criterion | Why it matters |
|-----------|----------------|
| **Ownership** | I owned the full lifecycle—from requirements to post‑launch ops—showing accountability. |
| **Dive Deep** | Detailed shard sizing, retry logic, and DynamoDB partition strategy illustrate depth. |
| **Quantified Impact** | Concrete latency, SLA, and cost metrics demonstrate real business value. |
| **Learning from Failure** | I introduced idempotent processing after a 0.9 % outage caused duplicate presence events; now we have built‑in deduplication. |

This answer aligns with Amazon’s Leadership Principles: *Customer Obsession*, *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
