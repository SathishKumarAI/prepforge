---
qid: ing_ee4f54f3e6__fp__local
question: How does reciprocal rank fusion work, and why fuse by rank instead of by
  score?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 430
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:25:45-05:00'
sources: []
---

**Reciprocal Rank Fusion (RRF)** is a lightweight ensemble that tackles the *ranking consistency* problem in information retrieval: each system orders documents differently because of distinct feature sets or models.  
From an optimization view, we want a single ranking that maximizes **average precision** over all queries. The key observation is that for any query, if a relevant document appears early in *any* list, it should be promoted globally.  

Let \(r_i(d)\) denote the rank of document \(d\) in system \(i\). RRF assigns to each document a score

\[
S_{\text{RRF}}(d)=\sum_{i=1}^{N}\frac{1}{k+r_i(d)},
\]

where \(k\) is a tuning constant (often 60). This formula is nothing but the harmonic mean of ranks, giving high weight to low ranks and diminishing returns for later positions. The reciprocal form guarantees **submodularity**: adding an extra system can only improve a document’s score if it appears early in that new list, preventing domination by a single noisy scorer.

Why rank instead of raw scores?  
1. **Score calibration** is notoriously hard across heterogeneous models; ranks are invariant to monotonic transformations.  
2. Ranks implicitly encode *information gain*: the earlier a relevant item appears, the more information it provides about relevance.  

A non‑obvious insight: the choice of \(k\) acts as a *regularizer* that balances between *exploration* (allowing lower‑ranked items to contribute) and *exploitation* (focusing on top hits). Setting \(k\) too low makes RRF equivalent to a simple union; setting it high reduces RRF to majority voting. Thus, tuning \(k\) tailors the ensemble’s bias–variance trade‑off without re‑scoring any base model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
