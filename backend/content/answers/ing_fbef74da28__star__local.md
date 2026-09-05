---
qid: ing_fbef74da28__star__local
question: 'Explain: Hierarchical Index Strategy — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 362
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:27-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of our customer support knowledge base from a monolithic search index into a scalable Retrieval‑Augmented Generation (RAG) system. The existing Lucene index could handle ~10k queries per day, but we expected to grow to 200k+ and needed sub‑second response times for chatbots.

**Task** – Design an indexing strategy that would let us serve real‑time RAG requests at scale while keeping storage costs reasonable and ensuring up‑to‑date content after daily bulk updates.

**Action** – I introduced a hierarchical index architecture. First, I built a coarse semantic layer using sentence embeddings (Sentence‑BERT) stored in Faiss with IVF flat indexing for quick filtering. Next, each bucket contained a fine‑grained inverted index of token n‑grams on the original documents. During query time, we first retrieve top‑k vectors from the coarse layer, then drill down to the corresponding inverted lists for exact phrase matching before feeding the snippets into the language model. I also automated nightly re‑indexing pipelines with incremental updates and used Azure Blob Storage tiered tiers to keep hot data in SSDs and cold data in cool storage.

**Result** – Query latency dropped from 750 ms to 120 ms on average, and throughput increased by 15× without adding extra compute. The system handled a 30× traffic spike during a product launch with zero downtime. I learned that combining vector‑based filtering with traditional inverted indexes can deliver the best of both worlds in production RAG at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
