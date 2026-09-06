---
qid: ing_93e6357c9d__fp__local
question: 'Explain: Weighted Score Fusion — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 454
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:44-05:00'
sources: []
---

**Weighted‑Score Fusion for Hybrid Search**

Hybrid search blends *semantic* (vector) and *lexical* (keyword) retrieval. Each engine returns a relevance score \(s_i(q,d)\) for query \(q\) and document \(d\). The fundamental problem is to combine these heterogeneous scores into a single ranking that preserves the strengths of both modalities.

1. **Normalization by rank‑based scaling**  
   Scores live on different scales; we map them to a common probability space via Platt scaling or isotonic regression, yielding calibrated probabilities \(p_i(q,d)\). This ensures that a high score from one engine is comparable to a moderate score from another.

2. **Linear combination with learned weights**  
   The fused score
   \[
   S_{\text{fused}}(q,d)=\sum_{i=1}^k w_i\,p_i(q,d)
   \]
   is a convex combination (\(\sum w_i = 1, w_i\ge0\)). Training \(w_i\) on a validation set via gradient descent on NDCG maximizes downstream ranking quality. The linearity guarantees that the fusion respects the *principle of superposition*: each engine contributes proportionally to its predictive power.

3. **Why it works**  
   Each engine captures complementary evidence: vectors encode semantic similarity (robust to lexical variation), while keywords capture exact term matches and metadata. By weighting them, we perform a soft ensemble that reduces variance without incurring the bias of any single model.

4. **Non‑obvious insight**  
   The weights are *query‑dependent*: a query’s lexical specificity can be estimated from its inverse document frequency (IDF) distribution; high‑IDF queries benefit more from keyword scores, while low‑IDF queries rely on vectors. Dynamically adjusting \(w_i(q)\) based on IDF yields better calibration than static weights.

Thus weighted score fusion is a principled, data‑driven method that unites heterogeneous retrieval signals into a coherent ranking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
