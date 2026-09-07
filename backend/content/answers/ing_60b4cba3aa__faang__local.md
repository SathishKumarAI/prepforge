---
qid: ing_60b4cba3aa__faang__local
question: 'Explain: Pattern 3: Hybrid Search (Dense + Sparse)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 457
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:55-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe the hybrid search technique that fuses dense embeddings with sparse keyword matching in modern AI search engines.  
*Assumptions to confirm:*  
1. We have a pre‑trained embedding model (e.g., BERT) for dense vectors.  
2. A BM25/TF‑IDF index exists for exact term matches.  
3. Retrieval latency budget is tight (< 200 ms).  

**Approach**  
1. **Indexing:** Store both sparse TF‑IDF vectors and dense embeddings per document.  
2. **Query processing:** Convert the user query into a sparse vector (for BM25) and a dense embedding (via transformer).  
3. **Retrieval pipeline:**  
   *a.* Run BM25 to get top‑K₁ candidates quickly.  
   *b.* For each candidate, compute cosine similarity with the dense query embedding.  
4. **Scoring fusion:** Combine BM25 score \(s_{\text{BM}}\) and dense similarity \(s_{\text{D}}\) using a weighted sum or learned neural ranker.  

**Depth**  
- Complexity: BM25 retrieval is O(log N + K₁). Dense scoring for K₁ items is O(K₁·d), where d ≈ 768.  
- Trade‑offs: Larger K₁ improves recall but increases compute; vector quantization can reduce dense similarity cost.  
- Implementation uses Faiss or ElasticSearch with ANN support.  

**Edge Cases**  
- Very short queries → sparse dominates, dense may be noisy.  
- Out‑of‑vocabulary terms → sparse score zero; rely on dense semantic match.  
- Documents lacking embeddings (e.g., PDFs) → fallback to pure BM25.  

**Optimize & Communicate**  
- Tune the fusion weight via cross‑validation on a held‑out query set.  
- Cache top dense vectors for hot queries to reduce latency.  
- Explain that hybrid search leverages exact term precision of sparse methods while capturing semantic similarity from dense embeddings, achieving higher relevance within strict latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
