---
qid: ing_25adf2eb6a__star__local
question: 'Explain: Relational Database — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 360
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:05-05:00'
sources: []
---

**Situation:**  
At my last company we launched a real‑time analytics dashboard for an e‑commerce platform that needed to display the number of active users per product category every second. The existing PostgreSQL cluster could not handle the write churn—hundreds of updates per second—without locking out read queries, and the counters were getting corrupted during traffic spikes.

**Task:**  
I was tasked with designing a fault‑tolerant distributed counter system that would keep latency below 50 ms for reads while ensuring eventual consistency across a sharded relational backend.

**Action:**  
I implemented an optimistic locking scheme using PostgreSQL’s `SELECT … FOR UPDATE SKIP LOCKED` on per‑category rows, coupled with a write buffer table (`counter_updates`) that batched increments. A background worker aggregated batches every 200 ms and performed bulk `UPDATE category_counters SET count = count + $1 WHERE id = $2`. To avoid hot spots, I sharded the counters by hashing the category ID into one of ten database replicas and used a lightweight Redis pub/sub channel to trigger immediate syncs for high‑traffic categories. I also added a retry loop with exponential backoff for deadlock resolution.

**Result:**  
Read latency dropped from 120 ms to under 30 ms, write throughput increased by 4×, and counter accuracy remained within ±1% even during peak traffic (≈12k ops/sec). The system now scales horizontally with minimal operational overhead, and I learned that combining optimistic locking with batch aggregation is a powerful pattern for high‑frequency counters in relational environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
