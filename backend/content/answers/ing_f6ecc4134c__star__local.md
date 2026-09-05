---
qid: ing_f6ecc4134c__star__local
question: 'Explain: Learned Sparse Embeddings (SPLADE) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 397
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:17-05:00'
sources: []
---

**Situation**  
At my last company we were launching a new internal knowledge‑base for product support. The existing keyword index could not handle the volume of user queries and often returned noisy results; our engineers needed a smarter search that could surface relevant documents even when users typed ambiguous or misspelled terms.

**Task**  
I was asked to design a hybrid retrieval system that combined dense embeddings (for semantic similarity) with sparse term‑based scores, aiming for at least 20 % higher precision@10 compared to the legacy Lucene index, while keeping latency under 200 ms on our cluster of 8 GPUs.

**Action**  
I built a SPLADE model using PyTorch and the HuggingFace Transformers library. First, I fine‑tuned a BERT base on our FAQ corpus with the SPLADE loss to produce sparse token weights that highlight discriminative terms. Next, I paired these sparse vectors with a pre‑trained Sentence‑BERT encoder for dense matching. In production, I used FAISS’s IVF index for dense search and Elasticsearch for sparse scoring, then fused scores with a weighted linear combination tuned via grid search on a held‑out dev set. I also added a caching layer to keep the top 1 000 candidates in memory, ensuring sub‑200 ms latency.

**Result**  
After deployment, precision@10 jumped from 0.42 to 0.61 (a 45 % lift), and average response time stayed at 180 ms. The hybrid approach also reduced the number of irrelevant hits by 30 %, improving user satisfaction scores in post‑launch surveys. I learned that carefully balancing dense and sparse signals, and engineering a lightweight fusion pipeline, can deliver real‑world gains without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
