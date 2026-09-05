---
qid: ing_888b3a5a25__star__local
question: 'Explain: Model Selection Criteria — Embedding Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 305
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:41-05:00'
sources: []
---

**Situation:**  
At my last company we were building a recommendation engine for a niche e‑commerce platform. Our user base had grown to 500k active users, but the click‑through rate on product suggestions was only 3%, far below our target of 8%.

**Task:**  
I needed to select an embedding model that could capture fine‑grained item similarities from sparse interaction data while keeping inference latency under 50 ms per request.

**Action:**  
I compared three candidate embeddings: a shallow matrix factorization (SGD), a deep neural collaborative filtering network, and a graph‑based node2vec approach. For each I evaluated reconstruction loss, sparsity handling, training time, and deployment footprint. I also ran a small A/B test on 10k users to measure real‑time CTR improvement. The node2vec model achieved the lowest mean reciprocal rank (MRR = 0.42) and produced compact 128‑dimensional vectors that fit in our existing GPU cache.

**Result:**  
Deploying the node2vec embeddings increased click‑through rate from 3% to 7.5% within two weeks, meeting almost all of the target. I also learned how to balance statistical performance with operational constraints and documented a reproducible selection pipeline for future model updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
