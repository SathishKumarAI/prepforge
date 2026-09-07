---
qid: ing_8db2d30b37__faang__local
question: 'Explain: Architecture 3: Staged Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 506
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:27-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks for an explanation of *Architecture 3: Staged Retrieval – Hybrid Search*. I’ll assume it refers to a two‑stage pipeline used in large‑scale semantic search systems (e.g., patent or legal document retrieval) that combines vector similarity with keyword ranking. The key assumptions:  

- Stage 1 is fast, approximate nearest‑neighbor (ANN) lookup on dense embeddings.  
- Stage 2 re‑ranks the top‑k candidates using exact lexical scoring (BM25/TF‑IDF).  
- We care about latency ≤ 200 ms and recall > 95 % for a 10M+ corpus.

**2️⃣ Approach**  
1. **Embedding stage:** Encode query + documents → vectors; use an ANN index (FAISS, HNSW). Retrieve top‑k₁ candidates.  
2. **Lexical re‑rank:** For each candidate, compute BM25 score against the raw text; combine with cosine similarity via weighted sum or learning‑to‑rank model.  
3. **Return final ranked list** to the user.

**3️⃣ Depth**  
- *Complexity:* ANN query O(log N) per vector; re‑ranking O(k₁·log k₂).  
- *Trade‑offs:* Larger k₁ → higher recall but more lexical work; smaller k₁ → lower latency.  
- *Index choice:* HNSW gives ≈ 10× speed with < 1% loss vs. IVF flat.  
- *Scoring fusion:* Linear interpolation β∈[0,1] balances semantic vs. exact match; tuned on dev set.

**4️⃣ Edge Cases**  
- Queries with no high‑cosine neighbors → fallback to pure keyword search.  
- Out‑of‑vocabulary terms → use subword embeddings or fallback embeddings.  
- Very long documents → truncate to top sentences before BM25 scoring.

**5️⃣ Optimize & Communicate**  
- Profile k₁ and β; use batch inference for stage 1.  
- Cache frequently seen queries’ candidate sets.  
- Explain to interviewers: “We first prune the search space with a cheap ANN lookup, then apply a robust lexical re‑ranker to correct semantic drift, achieving low latency while preserving high recall.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
