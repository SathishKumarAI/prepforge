---
qid: ing_2cfae757d7__star__local
question: 'Explain: Functional Requirements — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 360
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:50-05:00'
sources: []
---

**Situation** – At my previous startup we launched a mobile gaming platform with over 1 million daily active users. The product team wanted a real‑time global leaderboard to boost engagement, but our existing analytics pipeline (Kafka + Spark) produced updates every 5 minutes—too slow for competitive play.

**Task** – I was tasked with designing a low‑latency leaderboard system that could ingest millions of score events per second, support dynamic ranking queries in under 200 ms, and scale to 10⁸ users without breaking the existing data lake.

**Action** – I chose a hybrid architecture: scores streamed via Kafka into a Redis Cluster (sharded by game mode) for immediate write and read. A scheduled Spark job aggregates daily totals into Parquet tables on S3 for long‑term analysis. For ranking, I implemented a sorted set per shard and exposed a REST/GraphQL endpoint that uses Lua scripts to perform atomic rank calculations. To keep memory usage in check, we capped each leaderboard at the top 10 000 entries and used a “lazy delete” strategy. I also added health checks and auto‑scaling policies for Redis based on QPS thresholds.

**Result** – Query latency dropped from 5 minutes to <150 ms, and real‑time leaderboards increased daily active sessions by 18 % and in‑app purchases by 12 %. The project taught me the importance of choosing the right storage tier (in‑memory vs. batch) and the value of simple, sharded data structures for high‑throughput ranking workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
