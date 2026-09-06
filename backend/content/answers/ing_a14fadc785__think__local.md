---
qid: ing_a14fadc785__think__local
question: 'Explain: Sizing a Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 498
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:45:12-05:00'
sources: []
---

**1. Clarify the goal and constraints**  
   - *What is being sized?* The number of bits `m` in the filter.  
   - *Assumptions:* Known expected insertions `n`, acceptable false‑positive rate `p`, hash functions are independent and uniform, no deletions (standard Bloom).  

**2. Adopt the mathematical framework**  
   - Use the classic Bloom formula:  
     \[
     p = \left(1-e^{-kn/m}\right)^k
     \]  
     where `k` is the number of hash functions.  
   - For a fixed `p`, the optimal `k` minimizing `m` is \(k=\ln 2\,\frac{m}{n}\), which yields  
     \[
     m = -\frac{n\,\ln p}{(\ln 2)^2}.
     \]

**3. Reason step‑by‑step**  
   1. Decide target `p` (e.g., 0.01).  
   2. Plug into the formula to compute `m`.  
   3. Compute optimal `k = ln(2) * m / n`.  
   4. Round `m` up to a whole number of bits; round `k` to an integer.  

**4. Avoid common pitfalls**  
   - Mixing up `p` as the probability of a false **negative** (Bloom filters never have negatives).  
   - Forgetting that `n` is the *expected* insertions, not current size.  
   - Ignoring that extra space may be needed for metadata or to accommodate hash collisions in practice.

**5. Sanity‑check & communicate**  
   - Verify units: bits per element ≈ \(-\log_2 p / (\ln 2)^2\). For `p=0.01`, this is about 9–10 bits/element.  
   - Compare with known benchmarks (e.g., 1 M items → ~10 MB for 1% FP).  
   - Explain the trade‑off: smaller `m` → higher `p`; larger `k` reduces `p` but increases hashing cost. Use this to justify design choices in a system‑design discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
