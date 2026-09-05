---
qid: ing_5c563ff65f__star__local
question: How to view a specific player’s rank and score?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:10-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping the leaderboard feature for a mobile sports‑fantasy app that had over 2 million active users. The existing backend stored raw score data in an S3 bucket, and the UI would query a single DynamoDB table to fetch player ranks, which caused latency spikes during peak hours.

**Task:**  
I needed to design a low‑latency, scalable solution that could display each user’s current rank and total points in real time while supporting millions of concurrent reads.

**Action:**  
First, I introduced an Apache Spark job scheduled every 15 minutes to ingest the raw score CSVs from S3, compute cumulative scores per player, and sort them to assign ranks. The output was written to a Redis cluster configured as a sorted set (ZSET), where each key is `player:{id}` with score as the member value. For the UI, I exposed a lightweight REST endpoint that performs a single `ZRANK` and `ZSCORE` call against Redis, returning rank and score in milliseconds. To handle traffic spikes, I scaled the Redis cluster horizontally and added a read replica pool behind an API gateway.

**Result:**  
Latency dropped from 200 ms average to under 10 ms for leaderboard queries. The new system handled 1.5× more concurrent users without any outages. Additionally, we reduced infrastructure costs by 30% compared to the previous DynamoDB solution. This experience taught me how to combine batch processing with real‑time in‑memory stores to meet strict performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
