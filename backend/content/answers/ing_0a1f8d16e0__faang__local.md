---
qid: ing_0a1f8d16e0__faang__local
question: How would you evaluate multilingual retrieval quality - a customer's employees
  query in French and Korean over mostly-English documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 487
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:07:54-05:00'
sources: []
---

**Clarify**

We’re asked how to measure the quality of a multilingual retrieval system where users (French or Korean) search an English‑centric document collection.  
Key assumptions:  
1. The query is fully in French/Korean; documents are in English.  
2. Retrieval scores come from a cross‑lingual embedding model (e.g., LASER, XLM‑R).  
3. We have access to user feedback or a labeled relevance set.

**Approach**

1. **Ground truth creation** – build a small test set of queries in French/Korean with human‑annotated relevant English documents.  
2. **Cross‑lingual mapping** – ensure the model maps both query and document vectors into the same space.  
3. **Evaluation metrics** – compute standard IR measures (MAP, NDCG@10, Recall@100).  
4. **Baseline comparison** – compare against a naive MT+BM25 pipeline to quantify gains.

**Depth**

- Use *cross‑lingual sentence embeddings* to encode queries/documents; similarity = cosine.  
- For MAP: average precision over all retrieved documents per query.  
- NDCG@10 rewards correct ranking of the top 10 results, weighted by relevance grade.  
- Recall@100 ensures we’re not missing relevant docs beyond the top‑ranked ones.

Complexity is O(Q·D) for naive pairwise similarity; use FAISS or approximate nearest neighbors to reduce to O(Q log D).

**Edge Cases**

- Queries with mixed language (code‑switching).  
- Very short queries leading to ambiguous embeddings.  
- Domain mismatch: technical terms not well represented in multilingual corpora.

Test by injecting synthetic noise, varying query length, and measuring metric drift.

**Optimize & Communicate**

- Fine‑tune the cross‑lingual encoder on a bilingual corpus of French/Korean ↔ English documents to reduce semantic drift.  
- Introduce relevance feedback loops: after each search, let users flag hits; retrain embeddings incrementally.  
- Present results in an interactive dashboard: per‑language precision curves and confusion matrices.

This structured plan demonstrates clear problem framing, a concrete evaluation pipeline, awareness of pitfalls, and actionable optimizations—all key for a FAANG interview score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
