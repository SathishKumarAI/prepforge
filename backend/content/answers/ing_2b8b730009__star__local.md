---
qid: ing_2b8b730009__star__local
question: 'Explain: URL Mappings Table — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 346
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:56-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a high‑throughput URL shortener for an internal marketing platform that needed to handle ~1 M clicks per day while keeping latency under 20 ms.

**Task:**  
Design the URL mappings table—choosing schema, indexing strategy, and consistency model—to support rapid lookups, collision avoidance, and easy analytics ingestion.

**Action:**  
I opted for a NoSQL key‑value store (Cassandra) with a composite primary key: `short_id` (partition key) + `creation_timestamp` (clustering column). Short IDs were generated using a base‑62 counter with per‑shard offsets to avoid collisions. I added a secondary index on `original_url_hash` for reverse lookups and a materialized view for top‑referenced URLs, enabling quick analytics queries. To guarantee eventual consistency across shards, I implemented lightweight transactions (LWT) only during ID generation. I also set TTLs of 90 days for unused entries to auto‑prune the table.

**Result:**  
The system handled 1.2 M daily clicks with <18 ms average latency and a 99.9% hit rate. The analytics view delivered top‑URL reports in under 5 seconds, and we reduced storage costs by 30% through TTL pruning. I learned that coupling a simple counter with a distributed key‑value store balances speed, scalability, and data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
