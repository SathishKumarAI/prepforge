---
qid: ing_5dca4f0c1c__aws__local
question: 'Explain: Related patterns — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 457
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:03-05:00'
sources: []
---

**Situation (S)**  
At my previous role I built a real‑time recommendation engine that ingested click events from our mobile app into an Amazon SageMaker pipeline. The ingestion service used **Kinesis Data Streams**, but downstream batch jobs in Redshift were lagging by 3–4 minutes, causing stale recommendations.

**Task (T)**  
I had to guarantee *exactly‑once* delivery of each event to the ML pipeline while keeping latency low and scaling with traffic spikes.  

**Action (A)**  
I implemented a **Transactional Outbox** pattern:

1. **Outbox table** in Aurora Serverless (MySQL) – each click is written transactionally with `INSERT … ON DUPLICATE KEY UPDATE`.  
2. A lightweight Lambda (`OutboxPoller`) scans the outbox every 500 ms, reads new rows, writes them to a **SQS FIFO queue**, and marks them as *sent*.  
3. The ML ingestion service pulls from SQS and streams into Kinesis for SageMaker training.

This decouples the write path from the read path, guarantees idempotency (thanks to FIFO), and scales horizontally via Lambda concurrency.  

**Result (R)**  
- Latency dropped from 4 min to **under 200 ms** per event.  
- Throughput increased by **1.8×** during peak traffic without additional EC2 instances.  
- Cost saved: $0.25K/month by eliminating the need for a dedicated Kafka cluster.

---

### Leadership Principles  
- **Ownership** – I drove the end‑to‑end solution, from database schema to Lambda orchestration.  
- **Dive Deep** – Analyzed per‑event transaction logs and SQS metrics to pinpoint bottlenecks.  

### Bar‑raiser cues  
- Clear ownership of the problem & solution path.  
- Quantified impact (latency, throughput, cost).  
- Demonstrated depth by explaining how each component meets scalability, availability, and cost goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
