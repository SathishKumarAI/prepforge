---
qid: ing_2f72c0a1c2__star__local
question: 'Explain: A primer on RAG: scaling to larger knowledge bases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:44-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the AI‑assistive documentation project for a SaaS company that had just migrated all its legacy knowledge into a unified vector store of over 8 million documents. Our internal RAG (Retrieval‑Augmented Generation) model was returning stale answers and lagging at 2 seconds per query, far above the 800 ms SLA we promised to product managers.

**Task** – I had to redesign the retrieval pipeline so that it could handle millions of vectors while keeping latency under 1 second and improving answer relevance by at least 15 % as measured against a curated test set.

**Action** – First, I switched from raw FAISS flat indices to an IVF‑PQ hybrid with HNSW routing, reducing memory footprint by 35 %. Then I introduced a two‑stage retrieval: a lightweight LSH filter pruned the search space to ~10k candidates, followed by an exact ANN pass. To keep embeddings fresh, I built an incremental training loop that updated vector representations every 12 hours using recent user queries. Finally, I wrapped the whole process in a microservice with async batching and cached top‑20 vectors per session.

**Result** – Query latency dropped to 620 ms on average; answer precision improved from 72 % to 88 %, surpassing our target by 10 %. The system now scales linearly up to 15 million documents, and I learned that hybrid indexing + staged filtering is the sweet spot for production RAG at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
