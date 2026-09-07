---
qid: ing_f5753b8524__faang__local
question: 'Explain: Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:10:43-05:00'
sources: []
---

**Bloom Filters – System‑Design Perspective**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want a probabilistic data structure that tells us whether an element *might* be in a set, with no false negatives but some false positives. Assume we’re dealing with millions of keys and need sub‑MB memory.” |
| **Approach** | 1️⃣ Decide on size `m` (bits) and number of hash functions `k`. <br>2️⃣ For each key, compute `k` hashes → set those bits. <br>3️⃣ To query, check all `k` bits; if any is 0 → definitely absent; otherwise possibly present. |
| **Depth** | *False‑positive rate* ≈ `(1−e^(−kn/m))^k`. Optimize `k = (m/n) ln2` for minimal error. Memory = `m/8` bytes. For 10⁶ keys and 0.01% FP, need ~1.44 MB. Hashes can be two independent ones with bit‑wise shifts to get `k` values, saving CPU. |
| **Edge Cases** | • Rehashing when the set grows → rebuild filter (expensive). <br>• Deletions impossible without counting Bloom; would need a separate counter array or use a *Counting Bloom Filter* at extra cost. <br>• Non‑uniform key distribution can skew hash load. |
| **Optimize & Communicate** | • Use *Cuckoo Filters* for deletions and slightly lower FP. <br>• Batch inserts to amortize hash costs. <br>Explain trade‑offs: smaller `m` → faster queries but higher FP; larger `k` → more CPU per operation. Conclude with a diagram of the bit array, hash function pipeline, and typical use case (e.g., DNS cache pre‑filter). |

*Word count:* 212 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
