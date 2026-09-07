---
qid: ing_61c406beaf__faang__local
question: 'Explain: Variants — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 463
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:31:00-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *Bloom filters* and how they fit into system‑design decisions. I’ll assume we’re targeting high‑throughput, low‑latency services (e.g., cache lookups or anti‑spam filtering) where space is at a premium.

**Approach**  
1. Define Bloom filter basics (bit array + k hash functions).  
2. Show false‑positive mechanics and parameter trade‑offs.  
3. Discuss practical design choices: size, hash family, scalability.  
4. Highlight common use cases and integration points in larger systems.

**Depth**  
- **Structure:** `m` bits initialized to 0; insert an item by setting the k positions given by independent hash functions. Query checks if all those bits are 1 → “probably present” else “definitely absent”.  
- **Complexity:** O(k) per op, constant memory for each element (≈ (m/k) bits).  
- **False positives:** `p ≈ (1‑e^(−kn/m))^k`. Optimal `k = (m/n) ln 2` minimizes `p`.  
- **Scalability:** Use *scalable Bloom filters* (cascade of increasing arrays) or *cuckoo filters* for deletions.  
- **Integration:** Often sits between a cache and a database; e.g., “cache‑miss” check via Bloom filter to avoid expensive DB lookups.

**Edge Cases**  
- Over‑full filter → false‑positive rate explodes; monitor `n/m`.  
- Hash collisions or poor hash functions degrade performance.  
- Deletion is impossible in classic filters—use counting Bloom or cuckoo filters instead.  

**Optimize & Communicate**  
Explain that choosing `m` and `k` depends on acceptable `p` (e.g., 0.1% for a CDN). Show how to reallocate bits if traffic spikes. Conclude by stressing Bloom’s role: ultra‑fast, memory‑efficient “pre‑filter” that lets downstream systems avoid costly work while accepting negligible false positives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
