---
qid: ing_93e6357c9d__faang__local
question: 'Explain: Weighted Score Fusion — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 441
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:05-05:00'
sources: []
---

**Weighted Score Fusion – Hybrid Search**

| Step | What I’d do |
|------|-------------|
| **Clarify** | We’re merging relevance signals (e.g., TF‑IDF, BM25, embeddings) into a single ranking for a hybrid search engine. Assumptions: 1) each signal returns a normalized score; 2) we have a validation set to tune weights; 3) latency constraints allow a few extra arithmetic ops. |
| **Approach** | 1️⃣ Normalize all scores to [0,1]. <br>2️⃣ Assign learnable weights \(w_i\). <br>3️⃣ Compute fused score: \(S = \sum w_i s_i\). <br>4️⃣ Train weights via logistic regression or gradient‑based optimization on click‑through data. <br>5️⃣ Deploy with caching to keep latency < 50 ms. |
| **Depth** | *Normalization*: use min–max or z‑score per shard. <br>*Weight learning*: treat it as a linear model; can be updated online (e.g., stochastic gradient). Complexity: \(O(n)\) per document, negligible compared to retrieval. Trade‑off: heavier models (ML ensembles) give better gains but increase latency and interpretability. |
| **Edge Cases** | • Missing signals → set \(s_i=0\). <br>• Extreme outliers after normalization → clip. <br>• Cold start for new queries → fall back to BM25 until enough data. Test on A/B: precision@10, NDCG, latency. |
| **Optimize & Communicate** | *Improvement*: use a small neural network (e.g., 2‑layer MLP) if budget allows; add attention over signals for query‑specific weighting. *Narration*: “We first harmonize the diverse relevance voices, then let data decide how loudly each should speak, all while keeping our latency under the SLA.” |

*Word count: ~190.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
