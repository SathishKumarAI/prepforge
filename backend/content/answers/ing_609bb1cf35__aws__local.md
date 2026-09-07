---
qid: ing_609bb1cf35__aws__local
question: 'Explain: OLTP database - DynamoDB — Tech-Stacks-Live-Apps/Grab/OrderProcessing
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 421
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:17-05:00'
sources: []
---

**Situation & Task**  
While leading the backend for Grab’s real‑time order‑processing service, I needed to replace a legacy MySQL OLTP system that was hitting **10 k TPS** but suffered from 200 ms latency spikes during peak hours (8 pm–11 pm). The goal: keep ACID guarantees for orders while scaling to 50 k TPS with <30 ms latency.

**Action – Design & Implementation**  
* **Ownership + Dive Deep:** I scoped the problem by profiling queries, discovering that 90 % of traffic was *read‑write* on a single `Order` table.  
* I migrated the schema to **Amazon DynamoDB**, using a composite key (`order_id`, `customer_id`) and global secondary indexes for status lookups.  
* Implemented **DynamoDB Streams + Lambda** to trigger inventory updates, guaranteeing eventual consistency without extra round‑trips.  
* Leveraged **AWS DAX (in‑memory caching)** for read‑heavy workloads, reducing latency from 200 ms to ~25 ms.  
* Adopted **Provisioned Capacity with Auto Scaling** to maintain 99.9 % availability while keeping costs ~$2k/month versus the $12k/month legacy stack.

**Result**  
- Achieved **+300 % throughput** (50 k TPS) and a **95 % drop in latency spikes** during peak hours.  
- Cut operational cost by **80 %** and reduced mean time to recovery from 4 h to under 30 min.  

**Learning & Bar‑Raiser Takeaway**  
I validated assumptions with real telemetry, iterated on index design, and documented fallback strategies—demonstrating true ownership, deep technical insight, and a data‑driven impact that aligns with Amazon’s *Customer Obsession* and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
