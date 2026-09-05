---
qid: ing_eca987fbe8__star__local
question: 'Explain: Cross-Encoder Models — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 325
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:14-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a semantic search feature for our e‑commerce platform. The initial retrieval step using BM25 returned roughly 500 candidate products per query, but user click‑through rates were only about 4 %, indicating the top results weren’t relevant enough.

**Task:**  
I was tasked with improving relevance by implementing a reranking layer that could score each of those 500 candidates more accurately without hurting latency beyond 200 ms per request.

**Action:**  
I chose a cross‑encoder architecture based on BERT‑base. For every query–candidate pair, I fed the concatenated text into the model and extracted the [CLS] token’s embedding to compute a similarity score via a dot product with a small feed‑forward layer. To keep inference fast, I distilled the cross‑encoder into a smaller DistilBERT variant and cached the candidate embeddings for each user session. I also introduced a two‑stage pipeline: first a lightweight bi‑encoder pruned candidates to 50, then the cross‑encoder reranked those 50.

**Result:**  
The click‑through rate jumped from 4 % to 9 %, a 125 % lift, and search latency stayed under 180 ms on average. I learned that careful model distillation and staged filtering can make powerful cross‑encoders production‑ready while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
