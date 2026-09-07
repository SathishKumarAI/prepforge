---
qid: ing_dc36d59baa__faang__local
question: 'Explain: Other notes — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 559
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:25-05:00'
sources: []
---

**Clarify**  
You’re asked to design a “hit counter” for a high‑traffic service like Twitter – i.e., record how many times a tweet, user profile, or URL is viewed.  
Assumptions:  
* Reads far outnumber writes (many viewers).  
* Latency ≤ 10 ms per request.  
* Data must be eventually consistent across global replicas.  
* We need to support millions of concurrent hits per second.

**Approach**  
1. **Event ingestion layer** – a lightweight HTTP/GRPC endpoint that receives the view event and pushes it into a high‑throughput stream (Kafka, Kinesis).  
2. **Batch aggregation** – consumers read from the stream in micro‑batches, increment an in‑memory counter per key, and flush to a fast key–value store (Redis or DynamoDB) every few seconds.  
3. **Global replication** – use a multi‑region cache with eventual consistency; updates are propagated via asynchronous streams.  
4. **Read path** – expose a read API that queries the cache first, falling back to the DB if stale.

**Depth**  
*Stream ingestion* guarantees no loss under 99.999% durability; *batching* amortizes write cost (≈10 k hits/sec → ~1 k writes/sec).  
*Cache key*: `view:<entity_id>`.  
*Atomic increments* in Redis (`INCRBY`) or DynamoDB conditional updates ensure correctness.  
Complexity: O(1) per hit on ingestion, O(log N) for a DB read where N is keys.

**Edge Cases**  
*Duplicate events* (retries): include idempotency token in the stream message; store a hash set of seen IDs.  
*Cache eviction*: use LRU with TTL to avoid stale data.  
*Network partitions*: eventual consistency may show slightly outdated counts; acceptable for analytics.

**Optimize & Communicate**  
- **Horizontal scaling**: add more consumers per shard; Kafka’s partitioning handles load balancing.  
- **Latency reduction**: push increments directly into the cache on write‑through path for ultra‑fast reads.  
- **Cost trade‑off**: batch size vs. freshness – larger batches reduce cost but increase staleness.  
I’d present this flow diagram, then walk through a sample hit lifecycle, highlighting how each component meets latency and scalability goals. This demonstrates structured problem solving, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
