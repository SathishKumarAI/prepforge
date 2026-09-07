---
qid: ing_60b4cba3aa__aws__local
question: 'Explain: Pattern 3: Hybrid Search (Dense + Sparse)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 362
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:23-05:00'
sources: []
---

**Hybrid Search (Dense + Sparse)**  

**Situation & Task** – At my last role I led the redesign of a product‑search feature that served ~3 M daily queries. Users complained that keyword‑only results missed context while embedding‑based relevance drifted to noisy matches. The goal: boost precision by 15% and keep latency <200 ms.  

**Action** – I architected a two‑stage pipeline in AWS:

1. **Sparse Stage (Elasticsearch)** – Index raw text with analyzers, enabling term‑level filters (brand, category).  
2. **Dense Stage (SageMaker Endpoint + OpenSearch’s KNN plugin)** – Generate 768‑dim vectors via a fine‑tuned transformer; store them in an ANN index.

The controller Lambda routes the query: first fetch top‑k sparse hits, then re‑rank with dense similarity scores using the same embeddings. I added a *scoring fusion* layer that weights term relevance (70%) and semantic closeness (30%).  

**Result** – Precision improved from 72% to **87%**; recall increased by 12%. Latency stayed at **≈180 ms** thanks to S3‑based model hosting and spot instances. Cost per query fell 18% because the sparse stage pruned the candidate set, reducing dense inference calls.  

**Learnings** – The hybrid approach taught me that *ownership* means iterating on both data layers; *Dive Deep* into metrics revealed the sweet spot for k‑values; and *Bias for Action* pushed us to ship a minimal viable product before full A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
