---
qid: ing_78aa7314f2__faang__local
question: 'Explain: Topical relevance: Hybrid search with reranking'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:32-05:00'
sources: []
---

**Clarify**  
Hybrid search fuses *exact* retrieval (e.g., BM25 over inverted indexes) with *semantic* retrieval (dense embeddings from transformers). Reranking re‑orders the top‑N hits using a more expressive model. I’ll assume: 1) we have an index of sparse vectors, 2) a pre‑trained dense encoder is available, and 3) latency constraints (~200 ms) must be met.

**Approach**  
1. **Initial retrieval** – run BM25 to get the first *k* candidates (e.g., k=100).  
2. **Embedding generation** – encode each candidate document + query with a lightweight transformer (or reuse cached doc embeddings).  
3. **Similarity scoring** – compute cosine similarity or dot‑product between query and each candidate.  
4. **Re‑ranking** – combine sparse BM25 score *s₁* and dense similarity *s₂* using a learned linear combination or a small MLP: `score = α·s₁ + (1–α)·s₂`.  
5. **Return top‑n** – output the highest scoring subset.

**Depth**  
- BM25 provides fast, high‑precision hits; dense embeddings capture semantic drift.  
- Using cached doc vectors avoids recomputation.  
- The MLP can be trained on click logs or relevance judgments via pairwise ranking loss (e.g., logistic).  
- Complexity: O(k) for re‑ranking vs. O(N) if we scored all docs.  
- Memory: store 128‑dim embeddings per doc (~5 MB for 1M docs).

**Edge Cases**  
- *Sparse queries*: BM25 may dominate; set α high.  
- *Long documents*: embedding truncation or hierarchical pooling needed.  
- *Cold start*: fallback to BM25 until enough clicks train the reranker.

**Optimize & Communicate**  
- Profile latency; if >200 ms, reduce k or use approximate nearest neighbor for embeddings.  
- Explain trade‑offs: higher recall vs. speed; explain how α is tuned per domain.  
- Summarize that hybrid search + reranking balances precision, relevance, and scalability—critical for FAANG‑scale search services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
