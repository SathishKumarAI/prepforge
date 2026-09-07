---
qid: ing_1b446a04f6__faang__local
question: 'Explain: Cached Reads — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 502
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:48:33-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber can deliver > 40 M reads/second directly from its online storage layer using a cache that’s integrated with the persistence store. Key assumptions: *“online storage”* refers to a highly‑available distributed DB (e.g., Cassandra or DynamoDB), *reads are latency‑critical*, and the system is globally replicated.

**Approach**  
1. **Cache‑on‑write strategy** – every write updates the primary store *and* pushes the new value into an in‑memory cache that lives on the same node.  
2. **Read‑through policy** – reads first consult the local cache; if a miss occurs, the data is fetched from the DB and immediately cached for future requests.  
3. **Cache eviction & consistency** – use LRU or LFU with size limits per shard; employ version tags (e.g., timestamps) to invalidate stale entries when writes occur.  
4. **Partitioning & replication** – align cache shards with DB partitions so that a read hits the local cache of its owning node, reducing cross‑datacenter traffic.

**Depth**  
- Cache size: ~ 10–20 % of memory per node, tuned to hit‑rate (~95%).  
- Latency: in‑memory lookups < 1 µs; DB fetches 5–10× slower.  
- Consistency: eventual consistency is acceptable for Uber’s use cases (e.g., ETA calculations).  
- Complexity: O(1) read path, O(log n) write propagation to cache.

**Edge Cases**  
- Cache storms from hot keys → sharding or rate‑limiting.  
- Network partitions causing stale data → version checks and fallback reads.  
- Sudden traffic spikes → auto‑scaling of cache nodes.

**Optimize & Communicate**  
Explain that the integrated cache eliminates cross‑node hops for 95 % of reads, thus meeting the 40 M RPS target while keeping memory usage bounded. Highlight trade‑offs: stronger consistency would require a two‑phase commit across DB and cache, which would hurt latency; instead Uber opts for eventual consistency with background invalidation. This structured explanation showcases problem understanding, design reasoning, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
