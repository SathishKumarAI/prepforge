---
qid: ing_2da1a911d9__star__local
question: 'Explain: Candidate — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 341
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:36-05:00'
sources: []
---

**Situation:**  
While leading a data‑science team at a mobile gaming startup, we noticed that our in‑app “Top Players” page was lagging and often displayed stale rankings during peak hours (around 10 % of daily traffic).  

**Task:**  
Design a scalable leaderboard system that updates in real time, supports 1 M concurrent users, and keeps latency below 200 ms for ranking queries.  

**Action:**  
I architected a hybrid approach:  
- **Event ingestion** via Kafka streams to capture score events;  
- A **Redis sorted set** as the primary store for instant reads (score → rank) with Lua scripts to atomically update scores and recalc ranks, keeping latency < 50 ms.  
- For durability, every 5 min a background Spark job snapshots Redis into HDFS and updates a PostgreSQL analytics table used for long‑term trend reports.  
- To handle flash crowds, I added a read‑replica layer of Elasticache nodes behind a CDN edge cache with a 1‑second TTL, ensuring consistency during spikes.  

**Result:**  
Post‑launch, leaderboard latency dropped to < 30 ms even at peak, and we reduced CPU usage by 35 % compared to the previous MySQL‑only design. User engagement on the ranking page increased by 18 %, and I learned how to blend in‑memory speed with batch durability for real‑time ML‑driven features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
