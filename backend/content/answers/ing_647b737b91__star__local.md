---
qid: ing_647b737b91__star__local
question: 'Explain: Non-Functional Requirements — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 366
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:37-05:00'
sources: []
---

**Situation** – At my previous company we launched a mobile gaming platform that needed a real‑time global leaderboard for our flagship title. The existing architecture only stored scores in a SQL database and refreshed the UI every 30 seconds, which caused lag spikes during peak hours (10–12 k concurrent users) and made it impossible to support leaderboards across multiple regions.

**Task** – I was tasked with designing a scalable leaderboard system that met strict non‑functional requirements: <1 second response time for top‑100 queries, 99.9% uptime, low cost (<$0.02 per request), and ability to ingest ~500 writes per second from game clients while ensuring eventual consistency across regions.

**Action** – I chose a hybrid approach: a Redis Cluster with partitioned sorted sets for hot data (top 10k) and an AWS DynamoDB global table as the durable store. I implemented a write‑through cache that batches score updates into micro‑batches, reducing write amplification. For read scaling I used read replicas per region and leveraged CloudFront edge caching for leaderboard snapshots. To guarantee consistency, I added a background Lambda that reconciles Redis with DynamoDB every 5 seconds, emitting metrics to Prometheus for alerting.

**Result** – The new system delivered sub‑200 ms latency for top‑100 requests even during peak load, reduced cost by 35%, and achieved 99.98% availability over the first six months. I learned that combining in‑memory caching with a globally replicated database can satisfy both performance and durability without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
