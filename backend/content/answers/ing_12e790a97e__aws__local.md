---
qid: ing_12e790a97e__aws__local
question: 'Explain: Cursor System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 508
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:16-05:00'
sources: []
---

**Situation / Task**  
At my previous role at a startup building a real‑time recommendation engine, we had to replace the legacy “cursor” paging mechanism that throttled our data ingestion pipeline and introduced stale results. The goal was to design a scalable cursor system that would support millions of concurrent users while keeping latency < 200 ms.

**Action (Design)**  
1. **Requirements & Constraints** – Ordered, time‑based cursor; fault tolerance; 99.9% availability; cost ≤ $0.05/user/day.  
2. **Architecture** –  
   * **Amazon Kinesis Data Streams** to ingest click events in a sharded stream (shard count = 20 for 10k TPS).  
   * **AWS Lambda** to process records, update a **DynamoDB Global Secondary Index** keyed by `user_id|cursor_ts`.  
   * **SQS FIFO queues** buffer out‑of‑order events; dead‑letter queue logs failures.  
   * **CloudWatch Alarms** trigger auto‑scaling of Kinesis shards and Lambda concurrency.  

3. **Scalability & Cost** – Shard scaling is on-demand, so we paid only for throughput (≈$0.30/100 M events). DynamoDB provisioned capacity was 10× the peak to absorb bursty traffic. Availability achieved via multi‑AZ deployment; no single point of failure.

4. **Testing & Rollout** – A blue/green deployment with feature flags allowed us to compare latency and correctness against the legacy system in parallel for two weeks.

**Result (Metrics)**  
* Latency dropped from 1.2 s to 180 ms (+85%).  
* Throughput increased by 4×, supporting 5 M concurrent users.  
* Operational cost reduced by 30% while maintaining a 99.95% success rate.  

**Reflection** – The key learning was that “dive deep” into event ordering exposed hidden bottlenecks; owning the end‑to‑end flow ensured we didn’t just patch surface symptoms.

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Deliver Results*  
> **Bar‑raiser cues:** Quantified impact, architectural depth, proactive failure handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
