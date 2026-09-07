---
qid: ing_6ab1ee6d6b__faang__local
question: 'Explain: Video metadata storage — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 518
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:10-05:00'
sources: []
---

**Clarify**  
We need to design a system that stores and serves *video metadata* (title, description, tags, thumbnails, view‑counts, etc.) for a high‑throughput streaming platform like YouTube.  
Assumptions:  
- Millions of uploads per day; billions of users read metadata on demand.  
- Metadata changes frequently (view counts, likes).  
- Strong consistency is required only for the most recent updates; stale reads are acceptable for counters.

**Approach**  
1. **Data model** – split into *static* (title, tags) and *dynamic* (views, likes).  
2. **Storage layer** – use a distributed key‑value store (e.g., Bigtable/Spanner) for static data; a counter service (DynamoDB + Kinesis + Redshift) for dynamic metrics.  
3. **API gateway** – cache metadata in an edge CDN (Cloudflare, CloudFront).  
4. **Update flow** – writes go to the KV store; counters are batched and asynchronously persisted to avoid write amplification.

**Depth**  
- *Static*: `<video_id> → JSON blob` stored with wide columns for quick retrieval; read latency < 10 ms.  
- *Dynamic*: use an append‑only log (Kinesis) to ingest events, aggregate in micro‑batch jobs into a materialized view (Redshift/BigQuery).  
- Consistency: eventual consistency for counters; strong consistency for static data via single‑writer per key.  
- Complexity: O(1) read/write on KV store; counter aggregation is O(N) per batch but amortized over many writes.

**Edge cases**  
- Out‑of‑order events (e.g., delayed view counts). Use event timestamps and idempotent updates.  
- Hot keys (viral videos): shard the keyspace or use a hot‑spot cache with sharding on video hash.  
- Schema evolution: add new metadata fields without downtime by using JSON blobs.

**Optimize & Communicate**  
We can reduce read latency further by precomputing popular thumbnails and serving them from S3/CloudFront. Explain trade‑offs between write throughput (batch vs. real‑time) and freshness of counters. Highlight that this architecture scales horizontally, tolerates failures, and keeps operational complexity manageable—exactly what FAANG teams look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
