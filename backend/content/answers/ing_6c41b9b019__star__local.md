---
qid: ing_6c41b9b019__star__local
question: 'Explain: RAG Pipeline Optimization — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:39-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a customer‑support chatbot that used Retrieval‑Augmented Generation (RAG) to answer technical queries. Within the first month, users complained about a 2‑second response time and our cloud spend was climbing because every request triggered full‑text search over a 10‑million document index.

**Task:**  
I had to cut latency to under 1 s per query while keeping cost below $0.02 per request and ensuring answer quality didn’t drop.

**Action:**  
First, I switched from a pure text BM25 retriever to a dense vector search using FAISS with 384‑dimensional embeddings from Sentence‑Transformers. Then I introduced a two‑stage cache: an LRU cache for the top‑10 retrieved docs per user session and a pre‑computed “hot” document pool that was refreshed nightly. For generation, I switched from GPT‑3 to our fine‑tuned T5 model, which runs 4× faster on GPU. Finally, I implemented batched inference: the retriever now pulls 32 docs at once, reducing API calls by 70 %.

**Result:**  
Response time dropped to 0.8 s average, and cloud cost per query fell from $0.05 to $0.015. User satisfaction scores rose 18 % in our A/B test. I learned that balancing dense retrieval with smart caching is key to scaling RAG without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
