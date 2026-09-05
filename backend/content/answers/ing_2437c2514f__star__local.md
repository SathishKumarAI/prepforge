---
qid: ing_2437c2514f__star__local
question: 'Explain: Sharding — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 378
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:50-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with scaling the customer‑profile service for a fintech app that had just hit 2 million active users. The existing monolithic database could no longer handle read/write latency, and our data model required frequent joins across user, transaction, and credit‑score collections.

**Task:**  
Design and implement a sharding strategy to distribute load horizontally while keeping related data together, ensuring that the API response time stayed under 200 ms for 99.5% of requests.

**Action:**  
I chose MongoDB Atlas for its built‑in sharding support and started by profiling query patterns with the profiler tool. I identified a composite shard key—`{user_id: 1, created_at: -1}`—to co‑locate a user’s most recent activity with their profile data, reducing cross‑shard lookups. I added a hashed secondary index on `transaction_type` to balance write traffic across shards. Using the MongoDB Ops Manager, I monitored chunk sizes and automated rebalancing, preventing hot spots. I also implemented read/write routing in our Node.js service via Mongoose’s `readPreference`, directing reads to secondaries during peak hours.

**Result:**  
After deployment, read latency dropped from 450 ms to 140 ms, and write throughput increased by 3× without any downtime. The system handled a 30% traffic spike during a promotional event with no service degradation. I learned the importance of aligning shard keys with real access patterns and how automated monitoring can keep sharded clusters healthy with minimal manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
