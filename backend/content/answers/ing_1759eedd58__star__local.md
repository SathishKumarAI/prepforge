---
qid: ing_1759eedd58__star__local
question: 'Explain: Cost per Query (Full RAG Triad) — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:27-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a Retrieval‑Augmented Generation (RAG) system for a legal tech startup that needed to answer client queries in real time. The budget was tight: each query had to cost less than $0.02, or the product wouldn’t be profitable.

**Task** – My goal was to design and evaluate a full RAG triad—retrieval, ranking, and generation—so we met that cost threshold while keeping latency under 500 ms per request.

**Action** – I first benchmarked several vector stores (Pinecone vs. Milvus) and found Pinecone’s API pricing hit our target when using the “small” index tier. For retrieval I limited the number of documents to 10, then used a lightweight BM25 re‑ranking layer in Elasticsearch before passing only the top three vectors to the generation step. On the generative side, I switched from GPT‑4 to an optimized GPT‑3.5 Turbo with a custom prompt that reduced token usage by ~30 %. I also implemented caching for identical queries and used batching to amortize API calls across 8 concurrent requests.

**Result** – The end-to-end cost per query dropped to $0.015, latency averaged 320 ms, and the system handled 1,200 QPS in production. We increased revenue by 18 % within three months while keeping infrastructure spend flat. I learned that careful trade‑offs between retrieval depth, re‑ranking precision, and generative token count are key to a cost‑effective RAG pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
