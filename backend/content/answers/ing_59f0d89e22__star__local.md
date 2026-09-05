---
qid: ing_59f0d89e22__star__local
question: 'Explain: Leaderboard API — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 374
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:32-05:00'
sources: []
---

**Situation:**  
While leading the product team at a mobile gaming startup, we hit a performance bottleneck: our daily leaderboard queries were timing out during peak hours, and our revenue‑generating “Top Players” feature was lagging behind competitors.

**Task:**  
I needed to design a scalable Leaderboard API that could serve real‑time rankings for 200k concurrent users, with sub‑200 ms latency and data freshness within one second, while keeping infrastructure costs under $5k/month.

**Action:**  
1. **Data model & storage:** I chose Redis sorted sets for in‑memory ranking, sharded by game mode to keep each set <2 GB.  
2. **Write path:** Player score updates hit a Kafka topic; a consumer batch‑writes to PostgreSQL (audit log) and publishes delta events to Redis via Lua scripts for atomic score increments.  
3. **Read path:** API endpoints use read replicas of Redis, with CDN edge caching for the top 100 entries. I added a “stale” flag so if latency exceeded 200 ms, we served the last known cache while background workers refreshed it.  
4. **Monitoring & autoscaling:** Integrated Prometheus metrics (latency, QPS) and set up Horizontal Pod Autoscaler to spin up extra API pods during traffic spikes.

**Result:**  
Post‑deployment, leaderboard query latency dropped from 1.2 s to 45 ms under peak load, and the “Top Players” feature’s conversion rate increased by 18%. I learned that combining Redis for low‑latency reads with Kafka for durable writes balances speed and reliability—critical for real‑time gaming services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
