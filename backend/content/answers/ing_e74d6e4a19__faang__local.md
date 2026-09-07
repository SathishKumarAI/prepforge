---
qid: ing_e74d6e4a19__faang__local
question: 'Explain: B. Go Dependencies — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 554
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:56-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a high‑performance REST API with Go that talks to Cassandra. I’ll assume:  
1. The API is read‑heavy (common in analytics services).  
2. Latency < 50 ms per request, throughput > 10k req/s.  
3. Data model fits Cassandra’s wide‑row design.

**Approach**  
1. **Model & schema** – create a single‑partition key for hot data, use clustering columns to support range queries.  
2. **Driver & connection pool** – use `gocql` with session pooling, keep connections alive and reuse them.  
3. **Batching & prepared statements** – pre‑prepare queries, batch writes where possible.  
4. **Caching layer** – add an in‑memory cache (e.g., Redis or Go’s `groupcache`) for the most frequently accessed rows.  
5. **Concurrency** – let each HTTP request spin a goroutine; use worker pools for heavy DB ops to avoid exhausting connections.  
6. **Monitoring** – instrument latency, error rates, and Cassandra metrics (read/write latencies, consistency levels).

**Depth**  
- Use `gocql`’s *ConsistencyLevel* = Quorum for strong reads, but fallback to ONE for cache‑hits.  
- Implement exponential backoff on retries; limit total retry depth to 3.  
- For writes, use `BatchTypeLogged` only when atomicity across multiple rows is needed; otherwise use unlogged batches to reduce commit log overhead.  
- Use Go’s context with deadlines to propagate request timeouts.

**Edge Cases**  
- **Hotspotting**: if a partition key gets too many writes, consider sharding the key or using a time‑series column.  
- **Node failures**: ensure read repair is enabled; fallback to other replicas on timeout.  
- **Cache staleness**: invalidate cache entries after write confirmation or use TTL.

**Optimize & Communicate**  
Explain trade‑offs: higher consistency → more latency, caching lowers DB load but adds complexity. Show how each layer (driver config, batching, caching) contributes to the target SLA. Emphasize that profiling (pprof, Cassandra’s nodetool) is essential to validate assumptions and iterate. This narrative demonstrates clear problem framing, a systematic solution path, technical depth, and an eye for operational robustness—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
