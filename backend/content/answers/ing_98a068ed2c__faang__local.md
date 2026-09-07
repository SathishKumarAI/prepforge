---
qid: ing_98a068ed2c__faang__local
question: 'Explain: Features — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 505
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:36-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber’s feature‑driven architecture enables **>40 M reads/s** from a distributed online store while keeping latency low. I’ll assume: *reads are read‑heavy, data is largely immutable per request; the cache sits in front of an eventual‑consistent object store (S3/Blob); and traffic is globally distributed.*

---

**Approach**  
1. Identify *read patterns* (hot keys, session affinity).  
2. Design a **hierarchical caching** stack: L0 in‑memory (per‑node), L1 CDN edge cache, L2 shared Redis/Memcached cluster.  
3. Use **feature flags** to route traffic between new and legacy storage during rollouts.  
4. Employ *cache invalidation* via publish/subscribe (Kafka) for writes.  

---

**Depth**  
- **Cache keying**: composite keys of user‑id + feature flag + data version → ensures consistent reads across nodes.  
- **Consistency model**: read‑your‑writes achieved by local in‑memory store; eventual consistency handled by background sync jobs.  
- **Load distribution**: consistent hashing with virtual nodes to avoid hotspotting.  
- **Throughput math**: 40 M reads/s ≈ 4 k requests per node for a 10,000‑node cluster; each node serves ~1–2 kB payload → <1 GB/s per node.  

Complexity: O(log N) for cache lookup; amortized O(1) for in‑memory hits.

---

**Edge Cases**  
- *Cache miss storms* on new feature rollouts → mitigate with request coalescing.  
- *Stale data* after schema changes → use versioned keys and graceful fallback to backend.  
- *Node failure* → health checks push traffic to healthy nodes; Redis cluster handles failover.

---

**Optimize & Communicate**  
Future improvements: move to a *write‑through cache* for mutable paths, employ *Bloom filters* to prefilter miss likelihood, and profile latency with real‑time dashboards. I’d explain the trade‑off between consistency (strong vs eventual) and performance, showing that Uber’s layered cache + feature flag strategy keeps reads fast while enabling safe A/B testing at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
