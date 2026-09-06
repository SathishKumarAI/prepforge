---
qid: ing_6737403a86__fp__local
question: 'Explain: Hashed sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 440
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:30-05:00'
sources: []
---

**Why shard a database?**  
A single table can grow to terabytes and serve millions of concurrent queries. The fundamental problem is *contention*: every transaction touches the same disk or memory region, forcing the storage engine to serialize access, throttle I/O, and limit scalability. Sharding divides the data space into disjoint partitions (shards) so that each node handles a subset of rows, thereby parallelizing reads and writes.

**How hashed sharding solves this**  
Instead of assigning ranges of keys (e.g., `user_id` 1‑100 000 to shard A), we hash the key with a deterministic function \(h(k)\). The output is mapped modulo the number of shards:
\[
s = h(k) \bmod N
\]
All rows whose keys produce the same remainder go to the same shard. This guarantees *uniform* distribution because cryptographic or non‑cryptographic hashes spread values evenly across the domain. Consequently, each shard sees roughly the same load; no single node becomes a hotspot.

**Deeper principle: Load balancing as entropy maximization**  
Hashing turns an arbitrary key space into a high‑entropy uniform distribution. From an information‑theoretic view, we maximize the Shannon entropy of the assignment, ensuring that the expected per‑shard cardinality is minimal variance. This aligns with the *law of large numbers*: over many keys, the hash behaves like independent random draws, giving predictable scaling.

**Non‑obvious insight**  
Hashing hides the *semantic* meaning of keys (e.g., sequential user IDs). While this improves distribution, it also makes range queries expensive because related rows may reside on different shards. A sophisticated system often mixes hashed sharding for write‑heavy workloads with a secondary “range” shard or a global index to support analytics without sacrificing write throughput.

In short, hashed sharding turns the database into a set of independent, evenly loaded replicas by exploiting hash‑induced entropy, thereby breaking contention and enabling horizontal scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
