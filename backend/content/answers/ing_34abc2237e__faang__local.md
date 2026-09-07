---
qid: ing_34abc2237e__faang__local
question: 'Explain: A. Cassandra Setup — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 515
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:49-05:00'
sources: []
---

**Clarify**  
We need to describe how to build a high‑throughput REST API in Go that persists data in Apache Cassandra. Assume we’re storing user‑generated metrics (e.g., page views), requiring low latency, horizontal scalability, and eventual consistency.

**Approach**  
1. **Schema design** – use a wide‑row key: `user_id|timestamp` to avoid hot partitions; add clustering columns for event type.  
2. **Data access layer** – wrap the Go DataStax driver with a thin repository that exposes CRUD ops and batched writes.  
3. **API layer** – implement HTTP handlers using `net/http` + Gorilla Mux, validate JSON payloads, and stream responses with pagination.  
4. **Write strategy** – employ client‑side batching (`gocql.Batch`) to send 100 rows per batch; use idempotent writes (client‑generated UUIDs).  
5. **Read strategy** – for analytics, query by time range using a materialized view or secondary index; cache hot rows in an in‑memory LRU map.  
6. **Deployment** – run the Go service behind a Kubernetes ingress, connect to a Cassandra cluster with multiple data centers; use `gocql`’s load balancing policy.

**Depth**  
- *Complexity*: Writes are O(1) per row; batch writes amortize latency but risk timeout if > 100 rows. Reads cost O(log n) due to clustering.  
- *Trade‑offs*: Choosing a wide row reduces write amplification but can cause hot partitions; materialized views simplify queries at the expense of extra storage.

**Edge Cases**  
- **Hot key**: rotate `user_id` shards or add a random salt prefix.  
- **Batch failures**: implement retry with exponential backoff and circuit breaker.  
- **Schema drift**: use CQL migrations guarded by version checks.

**Optimize & Communicate**  
To improve throughput, enable Cassandra’s `QUORUM` consistency for critical writes and `LOCAL_QUORUM` for reads; monitor latency with Prometheus. I’d narrate this plan to the interviewer by walking through each layer, highlighting why Cassandra’s wide‑row model suits time‑series data, and showing how Go’s concurrency primitives (goroutines, channels) help achieve sub‑10 ms request times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
