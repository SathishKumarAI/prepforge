---
qid: ing_ca72ccec02__star__local
question: 'Explain: Metadata Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 350
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:09-05:00'
sources: []
---

**Situation** – While leading a team building an internal search engine, we discovered that our crawling pipeline was stalling because the metadata store kept growing beyond the capacity of our single-node NoSQL database; latency spiked to 250 ms per document.

**Task** – I had to design a scalable, fault‑tolerant metadata storage layer that could ingest millions of URLs daily, support rapid lookups for deduplication and freshness checks, and expose a simple API for the crawler workers.

**Action** – First, we sharded the keyspace by hashing the canonical URL into 256 partitions and stored each shard in a distributed RocksDB cluster on SSDs, leveraging its embedded ACID guarantees. To handle hot spots, we introduced a secondary “hot‑spot” cache layer using Redis Streams that buffered writes for high‑traffic domains before flushing to RocksDB asynchronously. We also implemented a time‑to‑live (TTL) policy and a background compaction job that purged stale metadata older than 30 days, keeping the dataset lean. The API was wrapped in gRPC with protobuf messages so workers could batch fetch or update up to 1,000 URLs per call.

**Result** – After deployment, write latency dropped from 250 ms to under 30 ms, and read throughput increased by 4×. The crawler processed 2.5 million new pages in a week instead of the previous 1.8 million. I learned that combining an embedded KV store for durability with an in‑memory stream cache can deliver both speed and consistency in large‑scale crawling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
