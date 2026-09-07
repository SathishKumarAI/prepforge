---
qid: ing_ca72ccec02__faang__local
question: 'Explain: Metadata Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 489
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:30-05:00'
sources: []
---

**Clarify**  
The goal is a scalable metadata store for a web‑crawler that must ingest billions of URLs, persist link graphs, crawl states, and per‑page attributes (size, MIME type, timestamps). Assumptions: high write throughput, eventual consistency acceptable, queries are read‑heavy (e.g., “next URL to fetch”), and the system must tolerate node failures.

**Approach**  
1. **Partitioning** – hash URLs into shards (e.g., by first 4 hex chars) so each shard is a separate database instance.  
2. **Storage engine** – use a distributed key‑value store (Cassandra/Scylla) for fast writes and tunable consistency.  
3. **Schema** – key = URL; value = JSON blob with metadata plus link list references.  
4. **Link graph** – maintain adjacency lists in separate tables or as secondary indexes to enable traversal queries.  
5. **Caching** – hot URLs cached in Redis/LRU cache to reduce DB load for fetch scheduling.

**Depth**  
- *Write path*: client → API gateway → shard router → Cassandra node (write with consistency level ONE).  
- *Read path*: scheduler queries “next URL” by scanning a priority queue table per shard.  
- Complexity: writes O(1), reads O(log N) for priority queue scans, storage cost linear in number of URLs.  
- Trade‑offs: using Cassandra gives high write throughput but sacrifices strict ordering; eventual consistency is acceptable because crawler can re‑process duplicates.

**Edge Cases**  
- Duplicate URLs across shards → dedupe via a global “seen” Bloom filter.  
- Shard hot spots → dynamic re‑hashing or consistent hashing with virtual nodes.  
- Large adjacency lists → spill to secondary storage (HDFS) and stream when needed.

**Optimize & Communicate**  
Future improvements: switch to a graph database (Neo4j) for richer traversal queries, add TTLs to purge stale metadata, and implement adaptive sharding based on URL access patterns. I’d explain each decision by linking it back to latency, throughput, and fault‑tolerance goals, ensuring interviewers see clear trade‑offs and a production‑ready design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
