---
qid: ing_1dcd0f12cb__star__local
question: 'Explain: Good Shard Key: user_id — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 339
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:19-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with scaling a recommendation engine that processed real‑time click streams for over 10 million active users. The ingestion pipeline was hitting hot spots on the analytics database, causing query latency to climb from 120 ms to nearly 1 s during peak hours.

**Task:**  
I needed to redesign the sharding strategy so each shard handled a balanced load and kept user‑centric queries fast, without breaking existing data pipelines or increasing infrastructure costs.

**Action:**  
After profiling the traffic, I identified that most reads were user‑specific (e.g., “top 10 items for user X”). I switched from a hash of the session ID to **user_id** as the shard key. Using MongoDB’s range sharding with a hashed prefix on user_id, each shard received an even distribution of users while preserving locality: all records for a given user lived together, enabling efficient point‑lookups and batch updates. I also added a secondary index on timestamp to support time‑window analytics, and tweaked the balancer to move only whole user ranges during rebalancing.

**Result:**  
Query latency dropped from 1 s to under 150 ms for user‑centric requests, and CPU utilization per shard fell by 35 %. The system now supports 3× more concurrent users with the same hardware. I learned that choosing a shard key aligned with the dominant access pattern—here, user_id—drastically simplifies scaling while preserving data locality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
