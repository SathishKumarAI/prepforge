---
qid: ing_bad03fd581__faang__local
question: 'Explain: B. Cassandra Schema — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 495
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:11-05:00'
sources: []
---

**Clarify**  
You’re asked to design an API that reads/writes high‑volume data in Cassandra, written in Go. I’ll assume: *write‑heavy traffic (≥10k ops/s), low latency (<50 ms read), eventual consistency is acceptable, and the data model is a simple key/value + time‑series per user.*  

**Approach**  
1. **Data modeling** – choose partition keys that avoid hotspotting; e.g., `user_id` as partition key with a bounded range of recent events (`event_ts`) as clustering columns.  
2. **Cassandra schema** – single table, wide rows, TTL on old data to auto‑prune. Use `clustering order DESC` for fast latest‑first reads.  
3. **Go client** – use the DataStax Go driver with prepared statements, connection pooling, and consistent “QUORUM” for writes.  
4. **API layer** – expose CRUD via gRPC/REST; batch writes to amortize round‑trips, stream reads for pagination.  

**Depth**  
- **Schema**: `CREATE TABLE events (user_id uuid, event_ts timestamp, payload text, PRIMARY KEY ((user_id), event_ts));`  
- **Batching**: `gocql.Batch(both).Add(...)`; batch size tuned to ~100 rows per op.  
- **Read path**: `SELECT * FROM events WHERE user_id=? LIMIT 50;` returns newest events first due to DESC ordering.  
- **Complexity**: O(1) for writes, O(log N) for reads within a partition; overall throughput limited by cluster capacity.

**Edge Cases**  
- Hot partitions if many users share the same key – mitigate with sharding (`user_id % N`).  
- TTL mis‑config leading to data loss.  
- Network partitions causing write retries.

**Optimize & Communicate**  
Suggest adding a secondary index for “event_type” only if needed, otherwise use materialized views sparingly. Highlight that Go’s goroutine model lets us parallelize batch writes, and Cassandra’s auto‑sharding keeps the cluster horizontally scalable. Conclude with trade‑offs: higher consistency vs latency, and monitoring key metrics (latency percentile, tombstone count).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
