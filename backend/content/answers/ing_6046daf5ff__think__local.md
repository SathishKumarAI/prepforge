---
qid: ing_6046daf5ff__think__local
question: 'Explain: Sparse (Keyword) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 448
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:22:53-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Confirm whether “Sparse (Keyword) Retrieval” refers to classical keyword‑based IR or a modern sparse vector model (e.g., BM25).  
   - Assume the audience knows basic IR but not hybrid search specifics.  

**2. Adopt a layered mental model**  
   1. **Foundations**: Keyword retrieval basics → indexing, term frequency–inverse document frequency (TF‑IDF), scoring.  
   2. **Sparse representation**: Each document/query is a high‑dimensional vector with most entries zero; the “sparsity” comes from limited vocabulary usage.  
   3. **Hybrid search**: Combine sparse keyword scores with dense neural embeddings (dense retrieval) to capture both exact matches and semantic similarity.  

**3. Step‑by‑step reasoning**  
   - Explain indexing & scoring in sparse mode.  
   - Show how a query is turned into a sparse vector, dot‑product with document vectors → relevance score.  
   - Introduce dense retrieval: encode docs/query via neural net → dense vector; compute cosine similarity.  
   - Detail fusion strategies (early/late combination, re‑ranking) and why they help (cover vocabulary gaps, improve recall).  

**4. Common traps to avoid**  
   - Mixing up *sparse* vs *dense* terminology.  
   - Over‑emphasizing BM25 without noting its TF‑IDF nature.  
   - Ignoring computational cost differences or indexing overhead in hybrid systems.  

**5. Sanity‑check & verbalize**  
   - Verify that the explanation covers: what “sparse” means, how retrieval works, and how the hybrid approach merges both worlds.  
   - Summarize with a concise example (e.g., searching “climate change policy”) to illustrate keyword hits vs semantic matches.  

This structure keeps the answer focused, logically ordered, and defensible against common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
