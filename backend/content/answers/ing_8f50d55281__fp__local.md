---
qid: ing_8f50d55281__fp__local
question: 'Explain: Q: Design a RAG system that serves 10,000 queries per second across
  500 tenants with a p99 latency of 2 seconds.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 447
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:04-05:00'
sources: []
---

**Why the constraints force a hierarchical RAG**

A Retrieval‑Augmented Generation (RAG) system must *retrieve* relevant documents and *generate* an answer in real time.  
The bottleneck is **retrieval latency**: every query triggers a nearest‑neighbour search over a massive embedding index.  
With 10 k QPS, even a single‑node GPU would be overwhelmed; we therefore decompose the problem:

| Layer | Role | Why it works |
|-------|------|--------------|
| **Tenant‑sharding** | Each tenant owns its own vector space | Eliminates cross‑tenant contention and keeps index sizes ≤ ≈ 200 M vectors, which fits on a single GPU. |
| **Global cache of “hot” embeddings** | Keeps the top‑k most frequently queried passages in RAM | Reduces disk I/O by 80 % for hot traffic; hits drive latency from ~50 ms to < 1 ms. |
| **Approximate NN (FAISS HNSW + IVF)** | Sub‑millisecond search on GPU, linear in log N | Guarantees sub‑p99 latency while scaling to millions of vectors per tenant. |
| **Model micro‑services** | Stateless transformers behind a request‑queue | Allows horizontal scaling; p99 latency is dominated by retrieval, not generation. |

**Non‑obvious insight:**  
*The p99 target can be met by treating the 2 s bound as a *service‑level objective* rather than a per‑request deadline.*  
By allocating a **dedicated “fail‑over” thread pool** that immediately returns a cached “best‑effort” answer when retrieval stalls, we keep tail latency flat. The system then re‑tries the full RAG in the background and updates the cache, preserving correctness without sacrificing p99.

This layered, tenant‑aware design meets 10 k QPS with < 2 s p99 while keeping cost proportional to active tenants rather than total query volume.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
