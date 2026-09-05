---
qid: ing_d09f6cd190__star__local
question: 'Explain: Netflix — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 302
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:36-05:00'
sources: []
---

**Situation**  
At my previous internship I was tasked with building a lightweight recommendation engine for a startup that wanted to launch a “watch‑later” feature similar to what Netflix uses internally.

**Task**  
I needed to design an algorithm that could predict user interest in thousands of titles while keeping latency under 100 ms per request and scaling to millions of users.

**Action**  
I started by collecting implicit feedback (clicks, watch time) and built a matrix‑factorization model using ALS in Spark. To reduce dimensionality I applied PCA on the item embeddings and then switched to a hybrid approach: a content‑based filter that leveraged title metadata (genre, cast, director) via TF‑IDF vectors fed into a small XGBoost classifier. I deployed the model as a REST service behind a Redis cache, adding rate limiting and batching to keep response times low.

**Result**  
The recommendation accuracy improved from an RMSE of 1.02 to 0.78 (≈23% better). User engagement on the watch‑later list rose by 18%, and latency stayed well under 90 ms for 99th percentile requests. I learned how to blend collaborative filtering with content signals and the importance of real‑time serving constraints in a production ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
