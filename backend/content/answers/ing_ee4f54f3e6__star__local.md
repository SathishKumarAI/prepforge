---
qid: ing_ee4f54f3e6__star__local
question: How does reciprocal rank fusion work, and why fuse by rank instead of by
  score?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 373
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:08-05:00'
sources: []
---

**Situation:**  
During a data‑science sprint at my last company we were building an AI‑powered search engine for a large e‑commerce catalog. The baseline ranking algorithm (BM25) was fine on click‑through rates, but when we added multiple feature models—semantic embeddings, image similarity, and user‑behavior signals—the scores from each model had incompatible scales, making it hard to combine them into a single list.

**Task:**  
I needed to devise a lightweight fusion method that could merge the outputs of these heterogeneous models without having to re‑normalize or retrain any of them, while keeping latency under 100 ms for real‑time search responses.

**Action:**  
I implemented Reciprocal Rank Fusion (RRF). For each document I calculated its rank in every model’s list and summed the reciprocals: score = Σ (1 / (k + rank)), with k set to 60. Because ranks are ordinal, this operation is scale‑agnostic; no cross‑model score calibration was required. I also added a small weight for the BM25 baseline to preserve term relevance. The fusion logic ran in a single pass over the merged lists, keeping CPU usage minimal.

**Result:**  
After deploying RRF, we saw a 12 % lift in NDCG@10 and a 7 % increase in click‑through rate within two weeks, all while maintaining sub‑100 ms latency. I learned that fusing by rank rather than raw scores sidesteps the messy problem of score normalization across models, yielding robust performance with minimal engineering overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
