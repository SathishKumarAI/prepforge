---
qid: ing_518901c133__faang__local
question: 'Explain: A. Go setup — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 501
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:01-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a high‑performance REST/GRPC API in Go that persists data in Cassandra. Key assumptions: (1) write‑heavy workloads, (2) low latency (<10 ms), (3) horizontal scalability, (4) strong consistency for critical paths, and (5) eventual consistency acceptable elsewhere.

**Approach**  
1. Design a thin service layer exposing endpoints.  
2. Use gRPC + Protobuf for binary transport, or HTTP/JSON with Go‑net/http if required.  
3. Adopt the “repository” pattern: an interface per aggregate that hides Cassandra details.  
4. Configure a connection pool (`gocql` driver) with prepared statements and keyspace replication factor tuned to workload.  
5. Model data with wide rows (partition keys = userID) and time‑series clustering columns for write throughput.

**Depth**  
- **Schema**: `CREATE TABLE events (user_id text, ts timestamp, payload blob, PRIMARY KEY ((user_id), ts));`  
- **Read path**: Use paging (`gocql.PageSize`) to keep memory usage low.  
- **Write path**: Batch inserts per micro‑batch; use `ConsistencyLevel.Quorum`.  
- **Concurrency**: Spawn worker goroutines reading from a channel of requests, limiting to `runtime.NumCPU()` to avoid context switching overhead.  
- **Metrics**: Export Prometheus counters for request latency, Cassandra query times, and error rates.  
- **Complexity**: Each read O(1) per partition; writes O(log N) due to LSM tree compaction.

**Edge Cases**  
- Partition key skew → shard key rotation or composite keys.  
- Tombstone accumulation → periodic compaction tuning.  
- Network partitions → fallback to retry policy with exponential backoff.  
- API timeouts → context deadlines and graceful shutdown hooks.

**Optimize & Communicate**  
Explain that using Go’s lightweight goroutines keeps CPU utilization high while Cassandra’s tunable consistency ensures SLA compliance. Highlight trade‑offs: higher `Quorum` improves durability at the cost of latency; batch size balances throughput vs. memory. Conclude by summarizing how this stack scales horizontally, handles failure modes, and meets performance targets—ready for a FAANG interview discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
