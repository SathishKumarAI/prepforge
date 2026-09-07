---
qid: ing_156327ea32__faang__local
question: 'Explain: Scaling Strategy — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 491
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:52-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how to evaluate Retrieval‑Augmented Generation (RAG) models when you scale the underlying index or the number of documents. The goal is to keep latency low and relevance high while handling larger corpora.

Assumptions:  
- We use a vector‑based retriever (FAISS/Pinecone).  
- The generator is a transformer with limited context window.  
- Evaluation metrics are precision@k, recall@k, latency, and cost per query.

**2️⃣ Approach**  
1. Benchmark *baseline* retrieval on a small index.  
2. Incrementally enlarge the corpus (10×, 100×).  
3. Measure: top‑k accuracy, mean reciprocal rank (MRR), latency, and GPU/CPU usage.  
4. Apply *sharding* or *hierarchical indexing* to keep vectors per shard below GPU memory.  
5. Use *approximate nearest neighbor* trade‑offs (HNSW vs IVF) tuned for latency.

**3️⃣ Depth**  
- **Precision@k** shows relevance drop; a 10% hit at k=1 indicates retrieval drift.  
- **Recall@k** captures missing documents; useful when the index is too coarse.  
- **Latency** should stay <200 ms per query to be production‑ready; we use batch inference and pre‑fetching.  
- **Cost**: monitor vector storage (≈$0.0001/GB) vs compute ($3–5/hr GPU).  
- Implement *adaptive retrieval*—increase k only when confidence is low.

**4️⃣ Edge Cases**  
- Sparse embeddings → high false positives; test with noisy queries.  
- Cold‑start documents not in index; evaluate fallback to keyword search.  
- Shard imbalance causing hotspots; monitor per‑shard query rates.

**5️⃣ Optimize & Communicate**  
Iteratively tune IVF fanout and HNSW layers until latency <100 ms while keeping precision ≥0.85. Present results as a trade‑off curve: “For every 10% latency reduction we lose 2% recall.” This structured narrative demonstrates deep understanding, clear metrics, and pragmatic scaling choices—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
