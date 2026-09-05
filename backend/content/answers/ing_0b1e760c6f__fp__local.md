---
qid: ing_0b1e760c6f__fp__local
question: 'Explain: My favorite algorithm (and data structure): HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 551
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:29:49-05:00'
sources: []
---

**HyperLogLog – a probabilistic cardinality counter**

The core problem is: *count distinct elements in a massive stream using sub‑linear memory*.  
A naïve hash table needs Θ(n) space; we want something that scales with the logarithm of the answer.

1. **Sketching by leading zeros**  
   Each incoming item `x` is hashed to a uniformly random 64‑bit integer `h(x)`.  
   The number of leading zeros in `h(x)` follows a geometric distribution:  
   `P(Z ≥ k) = 2⁻ᵏ`.  
   Hence the maximum observed `Zmax` over all items satisfies  
   `E[2^{Zmax}] ≈ n`, the true cardinality.  
   This is the *log‑rank* trick that converts a heavy tail into a simple estimator.

2. **Binning for variance reduction**  
   Instead of one global maximum, split the hash space into `m` registers (buckets).  
   For bucket `j` we keep `M[j] = max Z` among items whose hash prefix points to `j`.  
   The final estimate is a harmonic mean:  
   \[
   \hat n = α_m\, m^2\Big/ \sum_{j=1}^m 2^{-M[j]}
   \]
   where `α_m` is a small bias‑correcting constant.  
   This averaging dramatically reduces variance, giving *O(1/m)* error.

3. **Why it works**  
   The method relies on the *coupon collector* principle in reverse: we infer how many coupons (distinct items) are needed to observe a rare event (many leading zeros).  
   The harmonic mean emerges from the fact that registers capture independent geometric samples, and their expectation is inversely proportional to `n`.

4. **Non‑obvious insight**  
   HyperLogLog’s registers need only ⌈log₂ log₂ n⌉ bits each.  
   Most people overlook that the *information* about cardinality is concentrated in the *position of the first 1 bit*, not its value.  
   Thus a tiny counter per bucket carries almost all the entropy required for an accurate estimate.

In short, HyperLogLog turns a heavy‑tailed random variable into a compact sketch by exploiting the distribution of leading zeros, binning to reduce variance, and using a harmonic mean estimator—an elegant blend of probability and geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
