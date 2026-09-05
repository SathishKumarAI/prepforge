---
qid: ing_368f2082f9__star__local
question: 'Explain: to make sure you backfill the cach — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 361
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:09-05:00'
sources: []
---

**Situation**  
At my previous role at a streaming platform, we migrated our recommendation engine from a monolith to a set of microservices. The new service used Redis for caching user preference vectors, but the first few weeks after deployment we saw a 35 % drop in cache hit rate because the cache wasn’t populated with historical data.

**Task**  
I had to design and implement a back‑fill strategy that would load the existing recommendation vectors into Redis without disrupting live traffic or causing memory pressure, while keeping latency under 50 ms for real users.

**Action**  
1. I wrote an incremental ETL job in Go that read the legacy SQL table, chunked rows by user ID, and streamed them to a Kafka topic.  
2. A dedicated “cache‑backfill” microservice subscribed to this topic, deserialized each vector, compressed it with LZ4, and pushed it into Redis using pipelined `MSET` commands.  
3. To avoid peak traffic interference, the job ran in a separate Kubernetes namespace with its own CPU limits and was throttled by a rate‑limiter that capped writes to 5 kB/s per node.  
4. I added Prometheus metrics to track backlog size and hit rates, triggering alerts if latency exceeded our SLA.

**Result**  
The back‑fill completed in 18 hours, restoring cache hits to 92 % within the first day. Overall request latency dropped from 120 ms to 48 ms. I learned that coupling a streaming pipeline with controlled throttling is essential for safe cache population in production microservices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
