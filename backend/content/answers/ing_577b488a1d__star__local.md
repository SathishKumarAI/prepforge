---
qid: ing_577b488a1d__star__local
question: 'Explain: Advanced Indexing — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 362
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:40-05:00'
sources: []
---

**Situation:**  
At my last startup, we were building a knowledge‑base chatbot for a legal firm that needed to pull up relevant case law from over 12 TB of PDFs and court transcripts. The naive keyword search was returning thousands of documents per query, causing latency spikes and confusing users.

**Task:**  
I had to design an efficient retrieval system that could surface the top 3–5 most pertinent documents in under 200 ms while still allowing fuzzy matching on legal terminology.

**Action:**  
Using LlamaIndex’s advanced indexing features, I first parsed all PDFs into clean text and generated embeddings with OpenAI’s `text-embedding-ada-002`. I then created a **Hybrid Index**: a vector index (FAISS) for semantic similarity plus a traditional keyword index (Whoosh) for exact phrase matching. LlamaIndex’s `VectorStoreIndex` let me store the vectors in an SQLite backend, while the `KeywordTableIndex` handled full‑text search. For each query I ran a two‑stage pipeline—first retrieve candidate docs via the vector index, then re‑rank them with the keyword score. I also set up incremental updates so new documents were indexed in real time.

**Result:**  
Query latency dropped from ~1 s to 150 ms on average, and precision at top‑5 improved from 32% to 78%. The legal team reported a 40% reduction in user confusion, and we saw a 25% increase in customer satisfaction scores. I learned how blending vector and keyword indexes can dramatically boost relevance while keeping performance high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
