---
qid: ing_037ef3abcc__faang__local
question: 'Explain: You have an embedding model and a reranker. Why sell both? Design
  the two-stage retrieval pipeline and tell me when the reranker earns its latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 546
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:11-05:00'
sources: []
---

**Clarify**  
We’re given: (1) an embedding‑based retrieval engine that returns a *k*‑set of candidate documents, and (2) a reranker that scores those candidates with a heavier model (e.g., BERT). The question asks why sell both components together and how to design the two‑stage pipeline, including when the reranker justifies its latency.

**Approach**  
1. **Stage 1 – Fast retrieval:** use vector similarity (FAISS/Annoy) to fetch top‑*k* candidates in milliseconds.  
2. **Stage 2 – Accurate reranking:** feed the *k* set into a dense, query–aware model that reorders them.  
3. **Latency budget:** only invoke Stage 2 when the user’s latency target is ≥ 200 ms (typical for search UI) or if the top‑*k* scores are uncertain (e.g., cosine gap < 0.05).  

**Depth**  
- *Why sell both?* The embedding engine offers scalable, cheap “first pass” retrieval; the reranker delivers higher relevance at a cost of compute and latency. Together they provide a tunable trade‑off: customers can choose a lighter bundle or the full stack for premium accuracy.  
- *Pipeline design:*  
  - **Query → Embedding** → ANN index → top‑*k* IDs + cosine scores.  
  - **Optional gate:** if (max_score – second_max) < τ, send to reranker; else return Stage 1 results.  
  - **Reranker input:** concatenate query and each candidate passage, run through a transformer; output final relevance logits → re‑rank.  
- *Complexity:* ANN is O(log N); reranker is O(k·d²) per token but amortized over small *k*.  

**Edge Cases**  
- *Cold start*: no embeddings yet – fall back to keyword search.  
- *Sparse queries*: high uncertainty → always rerank.  
- *Large documents*: truncate to fixed length or use hierarchical encoding.  

**Optimize & Communicate**  
To reduce latency, cache top‑*k* results for frequent queries, batch reranker inference across multiple requests, and quantize the transformer. I’d explain that selling both components gives customers flexibility: a lightweight bundle for low‑latency apps and a premium bundle for high‑accuracy use cases, while the two‑stage pipeline ensures we only pay the heavy cost when it truly improves relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
