---
qid: ing_037ef3abcc__think__local
question: 'Explain: You have an embedding model and a reranker. Why sell both? Design
  the two-stage retrieval pipeline and tell me when the reranker earns its latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 431
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:58:39-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   *Assume you want fast, scalable search on a large document set.*  
   - Embedding model → quick approximate nearest‑neighbour (ANN) retrieval.  
   - Reranker → fine‑grained relevance scoring on a small candidate set.  
   Ask: “What trade‑offs do we care about? latency vs. precision?”  

**2. Adopt the two‑stage pipeline framework**  
   1. **Retrieval stage:** encode query & documents, query ANN index → top‑K (e.g., K=200).  
   2. **Re‑ranking stage:** run a heavier model (cross‑encoder, semantic similarity) on those K items to produce final scores and order.  

**3. Step‑by‑step reasoning toward latency decision**  
   - Measure per‑request cost of embedding + ANN lookup (≈ 1–5 ms).  
   - Estimate reranker cost (≈ 10–50 ms per request) given hardware.  
   - Compute overall latency budget (e.g., 100 ms for interactive search).  
   - If K is small enough that the aggregate reranker time fits within budget, enable it; otherwise reduce K or optimize the reranker.  

**4. Common pitfalls to avoid**  
   - Forgetting that ANN index construction can dominate initial latency.  
   - Assuming a larger K always improves recall; too large K inflates reranker cost.  
   - Ignoring caching of query embeddings for repeated queries.  

**5. Sanity‑check & verbalize**  
   - “If the embedding + ANN takes 3 ms and the reranker 15 ms, total ≈ 18 ms—well below our 100 ms budget, so we should use both.”  
   - Re‑evaluate after any change (new hardware, updated models) to keep the trade‑off optimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
