---
qid: ing_bbbde0d004__faang__local
question: 'Explain: Query an Absent URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:41-05:00'
sources: []
---

**Clarify**

You’re asked how a system can quickly determine whether a given URL *has never* been seen before using a **Bloom filter**.  
Assumptions:  
1) URLs are hashed to a bit array; we only care about “absent” vs “present”.  
2) False positives (reporting present when absent) are acceptable but false negatives aren’t.  
3) The set of known URLs is large and grows over time.

**Approach**

1. **Design the filter** – choose `m` bits and `k` hash functions based on expected size `n` and desired false‑positive rate `p`.  
2. **Insertion** – for each URL, compute its `k` hashes and set the corresponding bits to 1.  
3. **Query** – compute the same `k` hashes; if all bits are 1, report “present” (may be a false positive), else “absent”.  
4. **Maintenance** – if the universe grows beyond capacity, rebuild with larger `m` or use a *scalable Bloom filter* that appends new layers.

**Depth**

- False‑positive probability: `p ≈ (1 - e^{-kn/m})^k`.  
- Space complexity: `O(m)` bits; time per op: `O(k)`.  
- Trade‑off: larger `m` → lower `p`; more hashes → higher computation.  
- Bloom filters are immutable; deletions require a *counting* variant or periodic rebuilds.

**Edge Cases**

- Extremely long URLs may overflow hash space; normalize before hashing.  
- Repeated insertions of the same URL do nothing, but keep idempotent.  
- If false positives become unacceptable, switch to a deterministic structure (e.g., a Bloom‑filter‑backed hash table).

**Optimize & Communicate**

Explain that for high traffic query rates we can shard the filter horizontally and use a consistent hashing scheme so each request hits one replica, keeping latency low. Emphasize that Bloom filters give sub‑byte storage per element and O(1) query time, making them ideal for “query an absent URL” scenarios where occasional false positives are tolerable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
