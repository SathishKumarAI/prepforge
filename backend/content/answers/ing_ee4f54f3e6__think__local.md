---
qid: ing_ee4f54f3e6__think__local
question: How does reciprocal rank fusion work, and why fuse by rank instead of by
  score?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 436
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:45:19-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
*Ask:* What exactly is “reciprocal rank fusion” (RRF)? Assume we have several ranked lists from different retrieval models, each providing a *rank* (position) for items but not necessarily comparable raw scores. We want to merge these lists into one consensus ranking.  

**2️⃣ Adopt the mental model of rank‑based aggregation**  
Treat each list as an ordinal scale: lower numbers mean higher relevance. RRF assigns a weight to every document equal to \( \frac{1}{k + r_d} \) where \(r_d\) is its rank in list \(k\). This is essentially a *score* derived from ranks, not the original model scores.

**3️⃣ Step‑by‑step reasoning**  
- For each query, collect all candidate documents across lists.  
- For every document, sum its reciprocal‑rank contributions over all lists it appears in.  
- Sort documents by this summed value (higher = more relevant).  
Why does this work? Reciprocal rank heavily rewards top positions while still allowing lower ranks to contribute modestly; the “+k” term normalizes across different list lengths.

**4️⃣ Common traps to avoid**  
- Mixing raw scores with reciprocal ranks: keep them separate.  
- Forgetting that RRF is *score‑agnostic*: you can’t compare a BM25 score to an RRF value directly.  
- Assuming the fusion will magically produce perfect rankings; it’s a heuristic, not a guarantee.

**5️⃣ Sanity‑check & verbalize**  
Check extremes: if a doc appears first in every list, its RRF weight is maximal (≈ 1). If it only appears low, its contribution shrinks toward 0. Explain that fusing by rank removes the problem of heterogeneous scoring scales and preserves the relative ordering that each model believes best, while still giving more weight to consistently high‑ranked items.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
