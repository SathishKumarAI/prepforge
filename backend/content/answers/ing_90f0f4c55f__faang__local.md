---
qid: ing_90f0f4c55f__faang__local
question: 'Explain: System Design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 440
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:28-05:00'
sources: []
---

**Clarify**  
You want a system that returns the *sales rank* of each product **within its category** (e.g., “Top‑10 in Electronics”). Clarify: Is ranking static or real‑time? How many categories/products? What latency and consistency guarantees are needed?

**Approach**  
1. Ingest sales events → update a per‑category counter (Kafka stream).  
2. Persist counters in Redis sorted sets (`ZINCRBY category_id product_id`).  
3. Expose an API that queries the sorted set, fetches top N items.  

This yields O(log N) updates and O(N) reads for top‑k.

**Depth**  
- **Data flow:** Purchase → Kafka → stream processor (Kafka Streams/Flink) → Redis.  
- **Storage model:** `ZSET` per category; key = “cat:{id}”, members = product IDs, scores = cumulative sales.  
- **Scalability:** Partition categories across shards; use sharded Redis cluster or RediStack.  
- **Consistency:** Eventually consistent (acceptable for ranking).  
- **Complexity:** Update: O(log N); Read top‑k: O(k + log N).  

**Edge Cases**  
- New products → insert zero score, later updated.  
- Category deletions → clean up ZSETs via TTL or background job.  
- High write bursts → backpressure in Kafka Streams; use windowed aggregates if needed.

**Optimize & Communicate**  
To reduce latency, cache top‑k results in an LRU layer (e.g., Memcached). For global consistency, periodically snapshot Redis to HDFS and rebuild sorted sets offline. Explain trade‑offs: real‑time accuracy vs. write amplification; sharding complexity vs. horizontal scalability. This structure demonstrates clear problem restatement, a pragmatic solution path, depth in design choices, awareness of edge cases, and an optimization narrative—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
