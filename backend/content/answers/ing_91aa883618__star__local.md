---
qid: ing_91aa883618__star__local
question: 'Explain: Range-Based Sharding — Key Concepts to Understand Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 383
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:52-05:00'
sources: []
---

**Situation:**  
While leading a data‑engineering sprint for a real‑time ad‑tech platform, we hit a bottleneck: the click‑through logs table grew to 12 TB and queries on user ID ranges were taking minutes. The growth rate was 30 % per month, threatening our SLA of sub‑second reads.

**Task:**  
I needed to partition the log table horizontally so that each query touched only a single shard, keeping latency under 200 ms while preserving transactional consistency for daily aggregates.

**Action:**  
I chose range‑based sharding on the `event_timestamp` column. First, I plotted timestamp distribution and identified natural cutoffs at month boundaries; this kept write amplification low because most writes fell into the latest month’s shard. Using PostgreSQL’s table inheritance, I created 12 child tables (`events_2023_01`, …) each with a CHECK constraint on its range. I implemented a routing layer in our ingestion service that hashed the timestamp to pick the correct child table, and updated the read‑path to query only the relevant shard via partition pruning. To handle skewed traffic (peak hours), I added a “hot” shard for the most recent 24 hours, replicated it across two nodes, and used read replicas for reporting.

**Result:**  
Query latency dropped from 1.8 s to 140 ms on average, while write throughput increased by 35 %. The system now scales linearly with data volume, and we avoided costly index rebuilds. I learned that aligning shard keys with natural data boundaries simplifies maintenance and that a small hot‑shard can mitigate burst traffic without over‑partitioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
