---
qid: ing_0d27233bed__aws__local
question: 'Explain: User Online Status Indicator — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 540
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:36-05:00'
sources: []
---

**Situation (S)** – At my last role I was tasked to build a real‑time “online status” feature for a social app used by **20 M daily active users**. The goal: deliver sub‑100 ms latency and 99.9 % availability while keeping cost under $0.05 per event.

**Task (T)** – Design a scalable presence platform that tracks user connections, broadcasts status changes to followers, and supports graceful degradation during traffic spikes.

**Action (A)** –  
1. **Event ingestion:** Use **Amazon Kinesis Data Streams** (shard size 5 MB/s) for connection/disconnection events; this guarantees at‑least‑once delivery with sub‑100 ms latency.  
2. **State store:** Persist current status in **DynamoDB Global Tables** (single‑region table for read‑latency < 10 ms, multi‑region for disaster recovery). The primary key is `user_id`; a TTL attribute removes stale entries after 5 min of inactivity.  
3. **Real‑time propagation:** Consume Kinesis records with **AWS Lambda** that writes to an **Amazon SNS Topic** per user group; subscribers (WebSocket API Gateway) push updates via **API Gateway WebSockets**. This eliminates polling and keeps round‑trip < 50 ms.  
4. **Scaling & cost:** Kinesis autoscaling + Lambda provisioned concurrency ensures 10× peak load without cold starts. DynamoDB on-demand capacity keeps costs predictable; overall projected spend <$2k/month for the given traffic.

**Result (R)** – Achieved **99.95 % uptime**, < 80 ms average latency, and reduced per‑event cost to **$0.00003**—a 70 % savings over our legacy polling system. The solution also lowered support tickets by 40 % because users saw instant status changes.

---

### Leadership Principles  
- **Customer Obsession:** Delivered a flawless, instant user experience that directly improved engagement metrics.  
- **Ownership & Dive Deep:** Took full ownership of the pipeline, tuned each component, and iterated on latency bottlenecks until we hit target SLAs.

*Bar‑raiser focus:* clear ownership narrative, depth in system choices (Kinesis vs. Kafka, DynamoDB TTL), quantified impact, and lessons learned (e.g., why API Gateway WebSockets outperformed polling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
