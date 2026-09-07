---
qid: ing_b79f13f691__faang__local
question: 'Explain: Clarifying questions & assumptions — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 481
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:02-05:00'
sources: []
---

**Clarify**  
Semantic search asks: *“Given a user’s query, retrieve the most meaning‑relevant documents, not just keyword matches.”*  
Assumptions I’d confirm:  
1. Are we working with text only or multimodal data?  
2. Do we need real‑time ranking or batch processing?  
3. What precision/recall trade‑off is acceptable?  
4. Is the vocabulary fixed (e.g., product catalog) or dynamic (news)?

**Approach**  
1. **Embed everything** – tokenize, encode queries and documents with a transformer (BERT/CLIP).  
2. **Index embeddings** using an ANN structure (FAISS, HNSW).  
3. **Re‑rank top‑k** with a fine‑tuned bi‑encoder or cross‑encoder for higher fidelity.  
4. **Cache popular queries** to reduce latency.

**Depth**  
- *Embedding*: Sentence‑BERT → 768‑dim vectors; cosine similarity for relevance.  
- *Indexing*: HNSW offers O(log n) search, memory ~2× vector size.  
- *Re‑ranking*: Cross‑encoder runs in O(k·d²); k≈10–20 keeps latency <50 ms.  
Complexity: Index build O(n log n), query O(log n + k). Trade‑off: larger index → faster search but more memory; higher re‑rank depth → better accuracy but slower.

**Edge Cases**  
- Out‑of‑vocabulary terms → fallback to keyword matching.  
- Adversarial queries (spam) → detect and filter before embedding.  
- Concept drift → periodic re‑embedding of stale documents.

**Optimize & Communicate**  
Explain that we balance *latency* (ANN + cache), *accuracy* (cross‑encoder), and *scalability* (sharded indices). I’d show a diagram of the pipeline, benchmark numbers (e.g., 95 % recall @10 with <30 ms latency), and outline A/B tests to validate improvements. This demonstrates structured reasoning, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
