---
qid: ing_d0f3d7f1db__faang__local
question: 'Explain: Redis Codec — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 484
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:46:39-05:00'
sources: []
---

**Clarify**  
*Question*: “How does Uber use Redis Codec to serve >40 M reads/sec from online storage?”  
Assumptions: we’re talking about the *online* data store (e.g., PostgreSQL) and a high‑velocity cache layer; Redis is in‑memory, but not just key/value—Redis Codec adds a schema/serialization layer.  

**Approach**  
1. Describe the problem space: latency vs consistency, write amplification, cache miss penalty.  
2. Explain the architecture: application → Redis (Codec) → PostgreSQL.  
3. Highlight how Codec turns arbitrary Java objects into byte streams and back, keeping type safety while using a compact binary format.  

**Depth**  
- **Serialization**: Uber’s custom codec uses *Protobuf*‑style tags + schema evolution support; avoids reflection overhead of Jackson/JSON.  
- **Cache population**: Reads hit Redis first; on miss, fetch from PostgreSQL, re‑serialize via Codec, write back to Redis with a TTL.  
- **Hotspot handling**: Partitioned shards (100+ nodes) and consistent hashing keep traffic balanced.  
- **Consistency**: Write‑through policy – every update goes to PostgreSQL first, then updates the cache atomically, ensuring read-after-write consistency.  
- **Throughput**: 40 M RPS ≈ 400 µs per op; achieved by batching I/O, using pipelined commands, and tuning Redis `maxclients` & `cluster-max-connections`.  

**Edge Cases**  
- Schema drift → Codec versioning prevents deserialization failures.  
- Cache churn → TTL tuning to avoid stampedes.  
- Network partitions → fallback to PostgreSQL on Redis failure.  

**Optimize & Communicate**  
Future gains: switch to *Redis Modules* for custom data types, adopt *Redis Streams* for change‑data capture, and instrument latency with OpenTelemetry to surface cold‑path bottlenecks. I’d present this as a concise flow diagram, then walk through the numbers (e.g., 5 ms DB read vs <1 µs cache hit) to show the impact on user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
