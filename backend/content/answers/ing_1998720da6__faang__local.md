---
qid: ing_1998720da6__faang__local
question: 'Explain: Cache Penetration — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:39-05:00'
sources: []
---

**Clarify**  
We’re asked how cache systems can “go wrong” via *cache penetration*—when a request bypasses the cache entirely and hits the underlying data store repeatedly. I’d confirm: are we talking about read‑heavy workloads, hot keys, or distributed caches? Does the system use a single node or cluster?

**Approach**  
1. Identify patterns that cause misses (invalid keys, TTL expiration).  
2. Show how repeated misses hit the database, inflating latency and load.  
3. Discuss mitigation strategies (placeholder values, Bloom filters, request coalescing).

**Depth**  
- **Root causes:**  
  - *Non‑existent or rare keys*: every lookup results in a miss → DB roundtrip.  
  - *Cache eviction/TLL expiry*: high churn leads to repeated misses.  
  - *Cache miss storms*: many clients request the same missing key simultaneously, causing “thundering herd.”  
- **Impact:**  
  - Latency spikes, increased database load, potential outages.  
  - In distributed caches, network hops amplify cost.
- **Mitigations:**  
  - Store sentinel values (e.g., `NULL` placeholder) for known missing keys to prevent DB hit.  
  - Use a Bloom filter to pre‑reject impossible keys before hitting the cache.  
  - Implement request coalescing or “singleflight” to collapse concurrent misses into one DB query.  
  - Tune TTLs and eviction policies to balance freshness vs. miss rate.

**Edge Cases**  
- What if the underlying data changes rapidly? Sentinel values may become stale—need invalidation logic.  
- Bloom filters can produce false positives, leading to unnecessary cache lookups; tune size/false‑positive rate.

**Optimize & Communicate**  
Explain trade‑offs: placeholders reduce DB traffic but add memory overhead; Bloom filters add a probabilistic layer but cut cache misses dramatically. Narrate the reasoning by linking each mitigation to the specific failure mode it addresses, emphasizing measurable improvements (e.g., 70 % fewer DB hits, reduced latency). This structured walk‑through demonstrates clear problem framing, technical depth, and practical solutions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
