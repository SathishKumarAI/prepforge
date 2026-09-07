---
qid: ing_9ee014b125__faang__local
question: 'Explain: Caches — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:53:23-05:00'
sources: []
---

**Clarify**  
You’re asking how Bloom filters are used as a cache‑level optimization in distributed ML systems—i.e., to avoid expensive lookups (e.g., DB or model inference) when the key is definitely absent. I’ll assume we need *space efficiency*, *sub‑millisecond hit rates*, and *low false positives*.

**Approach**  
1. Model Bloom filter as a probabilistic set.  
2. Show its integration: query → filter → if negative, skip expensive fetch; if positive, proceed to cache/DB.  
3. Discuss sizing: `m = -(n ln p)/(ln 2)^2`, `k = (m/n) ln 2`.  
4. Evaluate trade‑offs: memory vs false‑positive rate, update strategy (rebuild or use counting Bloom).

**Depth**  
- **Construction**: For `n` expected items and target false‑positive probability `p`, allocate `m` bits; choose `k = round((m/n) ln 2)` hash functions.  
- **Query cost**: O(k) bit lookups—essentially constant time.  
- **False positives** inflate cache hit rate but not correctness because a positive still triggers the real lookup.  
- **Updates**: Standard Bloom is immutable; use *Counting Bloom* or *Cuckoo filters* for deletions/updates.  
- **Complexity**: Memory O(m), query O(k).  

**Edge Cases**  
- Over‑provisioning leads to wasted RAM; under‑provisioning inflates `p`.  
- Skewed key distributions may require per‑partition Bloom filters.  
- Stale data if filter isn’t rebuilt after bulk changes.

**Optimize & Communicate**  
Explain that a Bloom filter reduces network and compute cost by ≈ 90 % for negative queries while keeping latency negligible. In practice, we’d batch rebuilds during low traffic windows, monitor `p`, and expose metrics (hit‑rate, false‑positive rate) to ops. Conclude with a quick pseudo‑code snippet showing the lookup flow and note that this pattern is widely used in large‑scale recommendation engines and feature stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
