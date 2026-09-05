---
qid: ing_ed70d4fa18__star__local
question: 'Explain: Leaderboard high-level design — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 376
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:38-05:00'
sources: []
---

**Situation** – While leading the analytics team at FinTechCo, we were asked to launch a real‑time trading leaderboard for our mobile app users. The existing ranking page was static and refreshed only every 24 hrs, causing user churn during live events.

**Task** – Design an end‑to‑end system that ingests millions of trades per minute, updates rankings in under 1 second, and serves a REST/GraphQL API with per‑user leaderboard snapshots, all while keeping cost below $5k/month on AWS.

**Action** – I chose a hybrid architecture:  
1. **Data ingestion** via Kinesis Data Streams feeding an Apache Flink job that aggregates trade scores into a Redis sorted set (ZSET).  
2. **Real‑time state** persisted in Amazon ElastiCache with 30 s TTL, and a backup stream to DynamoDB for durability.  
3. The API layer uses Lambda@Edge on CloudFront to serve cached leaderboard pages, pulling top‑N from Redis.  
4. For per‑user queries I implemented a pre‑computed “rank bucket” table in Aurora Serverless, refreshed every minute by a scheduled Flink job.  
5. We added a circuit breaker and exponential backoff for Kinesis consumer failures, ensuring no single point of failure.

**Result** – The leaderboard latency dropped from 24 hrs to <1 s; user engagement during trading tournaments rose 35%, and the monthly AWS bill stayed at $3.8k. I learned that coupling stream processing with in‑memory sorted sets delivers the scalability needed for real‑time leaderboards while keeping operational costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
