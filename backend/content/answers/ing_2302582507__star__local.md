---
qid: ing_2302582507__star__local
question: 'Explain: Scaling to Millions of Documents — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:09-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a knowledge‑base chatbot for a Fortune 500 client that had over 3 million internal policy documents in PDF and HTML format. The existing RAG pipeline was fine for a few thousand docs, but latency spiked to >5 seconds per query when the index grew.

**Task:**  
I needed to redesign the retrieval system so that the end‑to‑end response time stayed under 1.2 seconds while maintaining ≥95% recall on relevant documents and keeping cost per query below $0.02.

**Action:**  
1. **Vectorization & Indexing:** Switched from a flat FAISS index to an approximate nearest neighbor (ANN) engine—HNSW with cosine similarity—and sharded the index across 8 GPUs in an EC2 Spot fleet, using `faiss-cpu` for cost‑efficiency.  
2. **Chunking Strategy:** Implemented dynamic chunk sizing: long documents were split into overlapping 512‑token chunks; short ones stayed whole, reducing redundancy by ~30%.  
3. **Hybrid Retrieval:** Added a lightweight BM25 keyword filter on top of the vector search to prune candidates before embedding scoring, cutting disk reads by half.  
4. **Caching & Precomputation:** Deployed an in‑memory Redis cache for the top 10 most frequent queries and pre‑computed embeddings for newly added docs during off‑peak hours.

**Result:**  
Query latency dropped from 5.3 seconds to 0.9 seconds (≈80% improvement). Recall on a held‑out test set increased from 88% to 94%. Operational cost per query fell below $0.015, meeting the budget target. I learned that combining ANN with lightweight lexical filtering and thoughtful chunking can scale RAG pipelines to millions of documents without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
