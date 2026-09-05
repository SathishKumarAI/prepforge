---
qid: ing_9c1182874f__star__local
question: 'Explain: Cache Invalidation — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:07-05:00'
sources: []
---

**Situation:**  
In a fintech platform we were streaming real‑time transaction data into a Spark Structured Streaming pipeline that fed a recommendation engine. The downstream cache in Redis held pre‑computed risk scores, but as new transactions arrived the cache became stale, causing inaccurate fraud alerts.

**Task:**  
Implement a robust cache invalidation strategy that kept the Redis store fresh without overwhelming the ingestion pipeline or sacrificing throughput.

**Action:**  
I designed a Change Data Capture (CDC) layer using Debezium on top of our MySQL source. Every write trigger generated an event in Kafka, which Spark consumed and parsed into delta records. Instead of bulk flushing the cache, I built a lightweight “eviction queue” that stored only the keys affected by each CDC event. Spark then issued batched `DEL` commands to Redis every 100 ms, aggregating up to 10 k evictions per batch to stay within the 1 MB throughput limit. To avoid race conditions I added optimistic locking via Redis Lua scripts that checked version numbers before deletion.

**Result:**  
Cache hit rate improved from 82% to 97%, reducing false positives in fraud alerts by 35%. Latency for score recomputation dropped below 200 ms, and we maintained a 99.9% pipeline uptime. I learned the value of coupling CDC with targeted eviction queues to balance consistency and performance in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
