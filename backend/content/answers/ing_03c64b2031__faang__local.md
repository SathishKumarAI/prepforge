---
qid: ing_03c64b2031__faang__local
question: 'Explain: We want to add semantic search to our existing product. Design
  the service.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 429
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:59-05:00'
sources: []
---

**Clarify**

You’re adding *semantic* (embedding‑based) search on top of a legacy keyword engine.  
Assumptions:  
1. Data is in a relational store with an existing inverted index.  
2. Query latency < 200 ms for 95% of traffic.  
3. The system must handle millions of docs and scale to billions of queries.  

**Approach**

1. **Embedding pipeline** – batch‑process documents through a transformer (e.g., Sentence‑BERT) to produce fixed‑size vectors; store vectors in a vector DB (FAISS, Milvus).  
2. **Hybrid ranking** – first run the keyword engine to get top‑k candidates, then re‑rank with cosine similarity against the query embedding.  
3. **API layer** – expose `/search` that accepts raw text, returns ranked hits.  
4. **Monitoring & retraining loop** – log user relevance signals; schedule nightly re‑embedding.

**Depth**

- *Vector store*: Faiss index (IVF+PQ) gives sub‑millisecond ANN queries on 1M vectors.  
- *Complexity*: O(log N) query time, O(N) memory for embeddings.  
- *Trade‑offs*: IVF reduces recall; tune `nprobe` to balance latency vs accuracy.  

**Edge Cases**

- Empty or very short queries → fallback to keyword only.  
- Out‑of‑vocabulary words → use subword tokenization.  
- Stale embeddings when content changes → incremental re‑embedding via webhook.

**Optimize & Communicate**

- Cache popular query vectors in Redis for 5 s window.  
- Parallelize embedding generation with GPU workers; batch size ≈ 512.  
- Present architecture diagram to stakeholders: ingestion → embedder → vector DB + keyword index → API gateway → client.  

This design keeps latency low, leverages existing infrastructure, and allows gradual rollout of semantic relevance without disrupting current search traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
