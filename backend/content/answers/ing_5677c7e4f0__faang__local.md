---
qid: ing_5677c7e4f0__faang__local
question: 'Explain: Just before you leave… — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 523
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks me to describe my go‑to algorithm and why I love it, then explain its core idea and practical use in ML pipelines. I’ll assume they want a concise, technical answer that shows both theory and real‑world impact.

**Approach**  
1. Name the algorithm & data structure.  
2. Explain the problem it solves (cardinality estimation).  
3. Detail how it works (hashing + leading zeros).  
4. Discuss time/space trade‑offs and why it’s valuable for ML workloads.  
5. Mention edge cases, limitations, and potential improvements.

**Depth**  
- **HyperLogLog (HLL)** is a probabilistic cardinality estimator that uses *m* registers to record the maximum number of leading zeros in hashed stream values.  
- Each incoming item is hashed to 64 bits; the first `p` bits index a register, and the remaining bits determine the rank (`R = 1 + ⌊log₂(remaining)⌋`). The register keeps the max `R`.  
- After processing, the estimate is `α_m * m² / Σ2^(-registers)`, with bias correction for small/large ranges.  
- Space: `m ≈ 2^p` registers → ~1.5 KB for 16 k registers; error ≈ 1.04/√m (≈0.81% for 16 k).  
- Time: O(1) per element, negligible overhead—ideal for streaming ML features or counting unique users in a log.

**Edge Cases**  
- Extremely small cardinalities require bias correction tables; large counts saturate the estimator.  
- Hash collisions can skew results; use a high‑quality 64‑bit hash (e.g., MurmurHash).  
- Non‑uniform data streams still maintain accuracy due to probabilistic nature.

**Optimize & Communicate**  
I’d highlight that HLL lets us keep near‑real‑time cardinality stats for millions of users with minimal memory, freeing compute for downstream ML tasks. If needed, we can switch to a linear counting variant for very low cardinalities or use HyperLogLog++ for improved accuracy at higher ranges. This showcases my ability to choose the right data structure, understand its math, and explain trade‑offs—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
