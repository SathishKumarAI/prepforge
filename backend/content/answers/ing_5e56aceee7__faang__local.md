---
qid: ing_5e56aceee7__faang__local
question: 'Explain: Hash Functions — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:20-05:00'
sources: []
---

**Hash Functions – Bloom Filters (System‑Design Focus)**  

| Step | What I’ll do |
|------|--------------|
| **Clarify** | A Bloom filter is a space‑efficient probabilistic data structure that answers “is element *x* present?” with false positives but no false negatives. Key assumptions: we know the stream size or bound on distinct items, and we can tolerate a small false‑positive rate (e.g., 1–5 %). |
| **Approach** | 1️⃣ Pick `m` bits (size). 2️⃣ Use `k` independent hash functions (`h₁…h_k`). 3️⃣ For each element, set bits at positions `h_i(x)`. 4️⃣ To query, check all those bits; if any is zero → definitely absent; otherwise → probably present. |
| **Depth** | *False‑positive probability* ≈ \((1-e^{-kn/m})^k\). Optimal `k = (m/n) ln2` gives minimal error for given `m`.  
  • **Complexity**: Insert/lookup \(O(k)\) time, constant space per bit.  
  • **Trade‑offs**: Larger `m` → lower FP rate but more memory; more hash functions → slower ops but tighter bound. |
| **Edge Cases** | *Hash collisions* beyond intended probability (use good hash families). *Dynamic resizing*: when load factor > threshold, rebuild with larger `m`. *Deletion*: standard Bloom can’t delete—use counting Bloom or a “scalable” variant. |
| **Optimize & Communicate** | • Use 64‑bit MurmurHash split into two seeds for speed. <br>• For distributed systems, shard the filter across nodes and aggregate queries (parallel Bloom). <br>• Explain to interviewers: I’d start with a conservative FP target, compute `m` and `k`, evaluate memory vs latency trade‑off, then prototype and benchmark against real traffic. This shows clear structure, depth, and awareness of practical pitfalls. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
