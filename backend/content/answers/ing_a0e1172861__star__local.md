---
qid: ing_a0e1172861__star__local
question: 'Explain: When does cosine similarity mislead you? Discuss embedding-space
  pathologies relevant to retrieval systems.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 347
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:24-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a project to build an enterprise search engine for a legal tech client. Their documents were encoded with BERT‑based embeddings, and the team had been using raw cosine similarity to rank results.

**Task** – My goal was to improve relevance metrics (Recall@10 and NDCG) while keeping latency under 150 ms per query on our GPU cluster.

**Action** – I first profiled the embedding distribution with PCA and t‑SNE. I discovered that many embeddings clustered in a narrow “hub” region, causing cosine similarity to inflate scores for unrelated documents—a classic hubness problem. I introduced angular distance scaling and added a reweighting step that down‑weights vectors with high dot‑product density (using the “local intrinsic dimensionality” estimator). I also experimented with Euclidean distance on L2‑normalized vectors and compared against a learned Mahalanobis metric via a small neural network fine‑tuned on relevance judgments. Finally, I integrated a thresholded pruning step to filter out low‑norm vectors before similarity computation.

**Result** – After deploying the revised pipeline, Recall@10 jumped from 0.61 to 0.78 and NDCG improved by 12 %. Latency stayed within budget (average 140 ms). The exercise taught me that cosine similarity can be deceptive when embeddings suffer from hubness or uneven norm distributions; careful preprocessing and metric selection are essential for reliable retrieval systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
