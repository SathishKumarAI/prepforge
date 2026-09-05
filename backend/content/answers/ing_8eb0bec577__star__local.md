---
qid: ing_8eb0bec577__star__local
question: Which distance metric should you use for embedding search - cosine, dot
  product, or Euclidean - and does the choice actually matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 335
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:12-05:00'
sources: []
---

**Situation:**  
At my last role we launched a recommendation engine that had to surface similar products in real‑time. The backend stored embeddings from a transformer model, and the API needed to return the top‑10 most similar items for each user query within 50 ms.

**Task:**  
I was tasked with choosing a distance metric that maximized relevance while keeping latency low, and proving whether the choice really impacted results.

**Action:**  
First I benchmarked cosine similarity, dot product (unnormalised), and Euclidean distance on a sample of 100k embeddings. Cosine required normalising vectors, dot product skipped this step but needed careful scaling to avoid overflow, and Euclidean was straightforward but expensive in high dimensions. I integrated FAISS indexes for each metric, measured recall@10 against a human‑labeled gold set, and logged query times on our production hardware. The experiments revealed that cosine and dot product produced nearly identical ranking (≈ 97 % overlap) while Euclidean lagged behind by 15 % in precision. Dot product was marginally faster (1.2 ms vs 1.4 ms for cosine) because it avoided the normalisation pass.

**Result:**  
We switched to dot‑product similarity with a small scaling factor, cutting search latency by ~10 % and maintaining top‑10 relevance. The exercise taught me that in high‑dimensional embedding spaces the metric choice can matter only if precision is critical; otherwise practical concerns like computational cost often dominate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
