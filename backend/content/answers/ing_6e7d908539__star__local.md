---
qid: ing_6e7d908539__star__local
question: 'Explain: Indexing New Content — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 451
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:30-05:00'
sources: []
---

**Situation**  
I was leading the backend team at a startup that wanted to launch an image‑sharing app similar to Instagram. Our user base grew from 10 k to 1 M in six months, but every new photo upload triggered a full reindex of our search service, causing 30 s latency spikes and blocking write traffic.

**Task**  
I needed to design a scalable “indexing‑new‑content” pipeline that could ingest millions of photos per day, keep the search index up‑to‑date in near real‑time, and allow read queries (likes, comments, hashtags) to stay under 200 ms without overloading the database.

**Action**  
I split the system into three layers:  
1. **Ingestion & sharding** – a Kafka topic per region with 100 partitions fed into a stateless microservice that writes photo metadata to a Cassandra cluster (partition key = user_id).  
2. **Incremental indexing** – each ingestion worker publishes an “index‑event” to another Kafka stream; downstream workers consume these events, update an Elasticsearch index in batches of 500, and use a Bloom filter to avoid duplicate updates for the same photo.  
3. **Cache & TTL** – hot tags are cached in Redis with a 10 min TTL; read requests hit the cache first, falling back to ES if stale.

We added a “write‑through” queue so that uploads never block; the pipeline processes 2 M photos/day with <50 ms write latency and <150 ms search response.

**Result**  
Post‑launch, index latency dropped from 30 s to under 200 ms, read throughput increased by 4×, and we handled a traffic spike of 5 k uploads per second during a viral campaign without downtime. I learned that decoupling ingestion from indexing and using probabilistic filters can dramatically reduce write contention while keeping search fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
