---
qid: ing_01ba64a6c3__aws__local
question: 'Explain: Type of data store — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 508
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:04-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to build a real‑time leaderboard for a mobile gaming platform that served 2 M daily active users (DAU). The goal was to keep latency under 200 ms while supporting millions of concurrent score updates.

**Action – Design**  
1. **Data store choice** – A *hybrid* approach:  
   - **Amazon DynamoDB** for the hot, per‑game ranking table (partitioned by game ID + region). DynamoDB gives single‑digit millisecond reads/writes and automatically scales to 10 M writes/second with on‑demand capacity.  
   - **ElastiCache Redis** for a *cached* in‑memory leaderboard cache that serves the top‑100 scores, reducing read load on DynamoDB by ~80 %.  
2. **Write pipeline** – Scores are pushed to an **Amazon Kinesis Data Stream**, processed by a Lambda function that updates DynamoDB and pushes delta events to Redis via the `RedisClient`. This decouples ingestion from persistence and guarantees at‑least‑once delivery.  
3. **Scalability & Availability** –  
   - DynamoDB global tables replicate data across AZs, providing 99.999% availability.  
   - Lambda concurrency is auto‑scaled; Kinesis shards are increased as traffic grows.  
4. **Cost control** – On‑demand DynamoDB keeps costs predictable; Redis cache is sized to the top‑100 entries (~1 GB) and uses Auto‑Minor‑Version upgrades for patching without downtime.

**Result**  
- Latency dropped from 600 ms to <150 ms for 99th percentile reads.  
- Cost decreased by 35 % YoY thanks to efficient caching.  
- During a peak event (1 M concurrent score updates) the system maintained 99.9 % success rate with zero data loss.

**Leadership Principles**  
*Customer Obsession*: I focused on the end‑user experience—fast, accurate leaderboards. *Dive Deep*: I benchmarked each component, iterated on shard sizing and cache eviction policies, and documented trade‑offs in a post‑mortem. This approach not only delivered results but also built confidence across teams that our architecture could grow with traffic while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
