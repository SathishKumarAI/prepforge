---
qid: ing_aea3292408__fp__local
question: 'Explain: Latency, cost, caching — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 315
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:54-05:00'
sources: []
---

**Latency, Cost & Caching in Retrieval‑Augmented Generation (RAG)**  

At its core, a RAG system solves the *information bottleneck*: it must supply a language model with the most relevant facts while keeping inference time cheap.  
1. **Latency** – Inference time is proportional to the number of retrieved documents and their size because each token produced requires attention over them. Minimising latency means limiting the retrieval window (k‑nearest neighbours) and compressing passages, which reduces the dimensionality of the softmax in the decoder.  
2. **Cost** – Cloud compute and storage are billed per byte processed. Retrieval adds a *query cost* (index lookup + network transfer). By caching frequently accessed vectors locally, we shift from expensive remote lookups to cheap in‑memory operations.  
3. **Caching** – The cache is itself an online estimator of the *mutual information* between query and answer. Frequently retrieved passages are stored with a decay schedule that mirrors their *entropy* over time; low‑entropy (stable) facts stay cached longer, while high‑entropy topics expire quickly.  

A non‑obvious insight: **caching should be adaptive to model confidence**—high‑confidence answers need fewer fresh lookups, whereas uncertain responses trigger an on‑demand cache refill, balancing latency against answer quality without manual tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
