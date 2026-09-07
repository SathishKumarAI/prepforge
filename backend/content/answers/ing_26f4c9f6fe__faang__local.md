---
qid: ing_26f4c9f6fe__faang__local
question: 'Explain: Sharding — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 500
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:14-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber scales read traffic (≈ 40 M RPS) for its online store. Key assumptions:  
1. Reads dominate; writes are far fewer but still critical.  
2. Latency must stay sub‑100 ms under peak load.  
3. System must tolerate hot keys and regional traffic spikes.

**Approach**  
1. **Sharding the primary data store** – horizontal partitioning by user ID or region so each node handles a fraction of keys.  
2. **Co‑located integrated cache** – a local in‑memory layer (e.g., Redis, Memcached) on every shard that serves hot items before hitting disk.  
3. **Cache warming & eviction policies** – LRU/TTL tuned to workload, with write‑through or write‑back semantics for consistency.  
4. **Load balancing & request routing** – consistent hashing or a global key‑to‑shard map so clients hit the correct shard directly.

**Depth**  
- Each shard runs on commodity servers; 40 M RPS ≈ 400 kRPS per node → feasible with SSD + in‑memory cache.  
- Cache hit ratio > 95 % keeps latency low; remaining reads go to disk, but are rare.  
- Consistency: read‑through ensures cache is refreshed on miss; write‑back updates all replicas asynchronously.  
- Complexity: O(1) lookup per shard, O(log N) routing overhead.

**Edge Cases**  
- Hot key bursts: pre‑allocate “hot shards” or replicate the key across nodes.  
- Node failure: use a global metadata service to redirect traffic; cache invalidation on failover.  
- Write storms: throttle writes, batch updates into cache and persist asynchronously.

**Optimize & Communicate**  
Explain trade‑offs: higher cache hit ratio → more memory cost; stricter consistency → write latency increase. Show how sharding reduces contention, and the integrated cache turns a 10 ms disk read into < 1 µs in‑memory access, enabling Uber to comfortably serve 40 M RPS while keeping costs reasonable. This narrative demonstrates structured reasoning, technical depth, and awareness of operational challenges—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
