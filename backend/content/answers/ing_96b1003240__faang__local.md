---
qid: ing_96b1003240__faang__local
question: 'So, what’s your phone number? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 502
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:49-05:00'
sources: []
---

**Clarify**  
The interviewer wants me to explain why I favor **HyperLogLog (HLL)**—a probabilistic cardinality estimator—and how it works, its trade‑offs, and when it shines versus exact counters.

**Approach**  
1. Outline the problem: counting distinct elements in massive streams with bounded memory.  
2. Present HLL’s key idea: hashing to a uniform bitstring, using leading‑zero counts to estimate sparsity.  
3. Compare space/time complexity against naïve hash sets and Bloom filters.

**Depth**  
- **Hashing & Registers:** Split the hash into `p` prefix bits → register index; remaining bits give rank (position of first 1).  
- **Estimate:** \( \hat{E} = \alpha_m m^2 / \sum_{j=0}^{m-1} 2^{-M[j]} \), where \(m=2^p\) and \(M[j]\) are registers.  
- **Space:** `m` registers × 6‑bit each → ~\(4.8\,m\) bytes; e.g., `p=14` ⇒ 16 KB for 1 % error.  
- **Accuracy:** Standard error ≈ \(1.04/\sqrt{m}\); very low memory for high cardinality (billions).  
- **Mergeability:** Registers are max‑combined, enabling distributed counting.

**Edge Cases**  
- Small cardinalities: bias correction or switch to exact counter.  
- Non‑uniform hash distribution: choose a robust 64‑bit hash.  
- Skewed input: HLL still accurate because it depends on ranks, not values.

**Optimize & Communicate**  
- Use *Linear Counting* for very low counts (≤ 0.2 m).  
- Compress registers with run‑length or delta encoding in storage.  
- Highlight real‑world use: analytics platforms (Google Analytics), network traffic deduplication, database distinct queries.  

In summary, HLL delivers **sub‑percent accuracy** with **kilobyte‑scale memory**, merges effortlessly, and scales to petabyte streams—exactly what FAANG data pipelines demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
