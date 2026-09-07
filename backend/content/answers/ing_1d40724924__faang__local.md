---
qid: ing_1d40724924__faang__local
question: 'Explain: HLL in the wild — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 442
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:00-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise, interview‑style explanation of **HyperLogLog (HLL)**—a probabilistic cardinality estimator used in production systems. I’ll assume the audience knows basic hashing and streaming concepts but not HLL specifics.

**Approach**  
1. Restate HLL’s goal: estimate distinct elements in a data stream with < 5 % error using ~12 KB per counter.  
2. Outline its three core ideas: hash uniformity, leading‑zero counting, and bitmap aggregation via the “max” operation.  
3. Mention practical deployment points (e.g., Redis `PFADD/PFCOUNT`, Google BigQuery’s `APPROX_COUNT_DISTINCT`).

**Depth**  
- **Hashing**: each element → 64‑bit hash; first *p* bits = register index, remaining bits determine rank.  
- **Register update**: `M[i] = max(M[i], rank)` where rank = position of first 1 + 1.  
- **Estimation**: harmonic mean of registers → raw estimate; bias correction using precomputed tables; small‑range corrections for ≤ 2 000 distinct values.  
- **Complexity**: O(1) update, O(m) memory (m = 2^p), O(m) merge.  
- **Trade‑offs**: smaller *p* → less memory but higher error; larger *p* gives more precision.

**Edge Cases**  
- Zero input → return 0.  
- Very large cardinalities → overflow handled by scaling the estimate.  
- Non‑uniform hash distributions → degrade accuracy—test with synthetic skewed data.

**Optimize & Communicate**  
Explain why HLL is chosen in “the wild”: it allows distributed counting (mergeable sketches), low memory footprint, and near‑constant update time—perfect for analytics at scale. Conclude by noting that modern systems replace naïve counters with HLL to save cost while keeping error within acceptable bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
