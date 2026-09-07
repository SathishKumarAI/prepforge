---
qid: ing_ecfa29a04e__faang__local
question: 'Explain: Query a Present URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 451
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:23-05:00'
sources: []
---

**Clarify**  
You want a service that, given a URL, tells whether it has already been “present” (seen) before.  
Assumptions: *high traffic*, *low false‑positive tolerance*, *memory is limited*, and we only need to answer “yes/no” (no count or timestamp).  

**Approach**  
1. **Bloom filter** as the core structure – probabilistic set membership with fixed memory.  
2. Store the Bloom filter in a distributed cache (Redis/Memcached) for fast reads, backed by a write‑through to persistent storage if we ever need exact counts.  
3. For updates: hash the URL with *k* independent hash functions → set bits.  
4. For queries: compute hashes; if all bits are 1 ⇒ “present”; otherwise “absent”.  

**Depth**  
- Size `m` and number of hash functions `k` chosen to achieve desired false‑positive rate `p`:  
  `k = (m/n) * ln2`, `p ≈ e^(-k*n/m)`.  
- Complexity: O(k) per query/update, constant time.  
- Memory: `m` bits → 1 GB can store ~10⁸ URLs with p≈0.01.  

**Edge Cases**  
- **High load bursts**: cache warm‑up, read‑through throttling.  
- **Drift / expiration**: use a counting Bloom filter or periodic rebuild to purge stale entries.  
- **Hash collision**: choose cryptographic hash (e.g., Murmur3) and ensure independence.  

**Optimize & Communicate**  
Explain trade‑offs: Bloom gives speed + memory savings at the cost of false positives; if exactness is required, add a secondary lookup or use a Cuckoo filter for deletions. Highlight that in a FAANG interview I’d sketch the data flow diagram, discuss scaling (sharding by hash prefix), and quantify latency/throughput targets to demonstrate end‑to‑end understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
