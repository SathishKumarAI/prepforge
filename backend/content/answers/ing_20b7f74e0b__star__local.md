---
qid: ing_20b7f74e0b__star__local
question: How does the Leaderboard work? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:56-05:00'
sources: []
---

**Situation** – While leading a product team at a fintech startup, we needed to launch an internal “Leaderboard” for our algorithmic trading bots. The dashboard had to rank thousands of models in real time and support over 10 k concurrent users during market open hours.

**Task** – Design a scalable leaderboard that could ingest new back‑test results every minute, compute rankings with tie‑breaking rules (e.g., Sharpe ratio > return), and serve low‑latency queries to the front end without blocking writes.

**Action** – I chose a hybrid architecture: a write‑through cache in Redis for incoming scores, a Kafka stream that batches updates into a ClickHouse columnar store, and a scheduled Spark job that recalculates the global ranking every 5 s. The cache held a sorted set keyed by bot ID; we used Lua scripts to atomically update scores and recalculate the rank. For the front end, I exposed a REST endpoint backed by a read‑only ClickHouse replica with low‑latency SELECT * FROM leaderboard ORDER BY rank LIMIT 100.

**Result** – The system handled 20 k concurrent users with <30 ms response time, processed over 1 M score updates per minute, and reduced the ranking lag from 10 min to under 5 s. I learned that coupling an in‑memory sorted set for hot writes with a columnar store for durable analytics gives both speed and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
