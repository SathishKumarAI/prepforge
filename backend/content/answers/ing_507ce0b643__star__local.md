---
qid: ing_507ce0b643__star__local
question: 'Walk me through the latency budget of a query: query understanding → retrieval
  → rerank → LLM answer. Where do you spend and where do you cut?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 436
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:21-05:00'
sources: []
---

**Situation:** I was tasked with redesigning the latency budget for our AI-powered search platform at a fintech startup. The end-to-end query path—query understanding, retrieval, rerank, and LLM answer—needed to stay under 200 ms during peak load.

**Task:** Allocate budget slices per stage, identify bottlenecks, and apply optimizations that preserved relevance while cutting latency.

**Action:**  
- **Query Understanding (30 ms):** Switched from a heavy BERT encoder to a distilled DistilBERT model and added a lightweight rule-based fallback. Deployed the encoder as a GPU batch inference service with 64‑sample batches, reducing per‑query compute by ~40%.  
- **Retrieval (70 ms):** Moved vector similarity search to an in‑memory FAISS index on SSDs, adding a pre‑filter cache of top 100 candidates. Implemented async retrieval so the next stages could start while I/O awaited, shaving 15 ms.  
- **Rerank (40 ms):** Replaced the original transformer reranker with a LightGBM model trained on query‑context features; inference runs in CPU threads and returns results within 12 ms.  
- **LLM Answer (60 ms):** Used a quantized GPT‑NeoX checkpoint served via Triton, limiting prompt size to 256 tokens and using beam width = 1. Added a caching layer for identical queries, cutting latency by ~20 ms on repeat hits.

**Result:** The total average latency dropped from 350 ms to 185 ms, meeting the budget while improving mean reciprocal rank by 8%. I learned that aggressive model distillation coupled with smart batching and cache layering can deliver both speed and quality in production AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
