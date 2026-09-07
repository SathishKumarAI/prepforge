---
qid: ing_2b8b730009__faang__local
question: 'Explain: URL Mappings Table — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 529
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:04-05:00'
sources: []
---

**Clarify**  
We’re asked to design a scalable URL‑shortening service (e.g., bit.ly). Key requirements:  
* Short‑to‑long mapping persistence, high read/write throughput, minimal latency.  
* Uniqueness and collision avoidance for short codes.  
* Fault tolerance, eventual consistency, and graceful degradation.  
Assumptions to confirm: max users per day, traffic mix (reads vs writes), desired code length, TTL semantics.

**Approach**  
1. **API layer** – REST endpoints (`POST /shorten`, `GET /{code}`).  
2. **Short‑ID generator** – base‑62 encoding of a monotonic counter or random UUID5 with hash‑based collision check.  
3. **Storage tiering** – Hot data in an in‑memory cache (Redis) + sharded key‑value store (Cassandra/BigTable).  
4. **Write path** – generate ID, write to DB, publish event to Kafka for replication.  
5. **Read path** – cache lookup → DB fallback; on miss, serve 404.

**Depth**  
* Counter: global atomic counter via Zookeeper or DynamoDB with `Increment` op (O(1)).  
* Collision handling: if random ID collides, retry up to k times.  
* Storage schema: `{code} → {longURL, metadata}` in a wide‑column store; partition key = hash(code).  
* Cache consistency: write‑through with TTL of 10 min for hot URLs; stale reads acceptable (eventual consistency).  
* Complexity: O(1) per request; network hops limited to cache + DB.

**Edge Cases**  
* Duplicate requests → idempotent writes.  
* Exhausted code space → rotate alphabet or length.  
* High write bursts → queue writes, batch persistence.  
* Cache miss storms → read‑through with Bloom filter to avoid DB thrashing.

**Optimize & Communicate**  
Explain trade‑offs: using a global counter guarantees uniqueness but can become a bottleneck; random IDs scale better but need collision checks. Mention horizontal scaling of cache and DB shards, load balancing via consistent hashing, and monitoring (latency, hit rates). Wrap up by highlighting how the design meets latency (<50 ms), availability (>99.9%), and growth to billions of URLs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
