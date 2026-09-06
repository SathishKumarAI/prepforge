---
qid: ing_6046daf5ff__fp__local
question: 'Explain: Sparse (Keyword) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 521
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:13-05:00'
sources: []
---

**Sparse (Keyword) Retrieval – Hybrid Search**

The core problem is *retrieval*: given a query \(q\), find documents \(d\) that are relevant. In the classic vector‑space model we encode each document as a sparse bag‑of‑words vector \(\mathbf{v}_d \in \mathbb{R}^V\) (one dimension per vocabulary token). A query becomes a similar vector \(\mathbf{q}\), and relevance is measured by cosine similarity or BM25. This formulation is optimal when the user’s intent is literal—exact terms are decisive. However, it suffers from *semantic sparsity*: synonyms, paraphrases, and polysemy cause many relevant documents to receive zero overlap.

The remedy is a *dense* representation \(\mathbf{e}_d\) learned by neural models (BERT, DPR). Dense vectors capture contextual semantics; two semantically similar sentences have high dot‑product even if they share no words. Yet dense retrieval alone is computationally expensive and often less precise on short queries.

**Hybrid search** merges the two worlds:  
1. **Stage 1 – Fast sparse filtering**: Use an inverted index to retrieve a top‑\(k_s\) candidate set via BM25 or TF–IDF. This stage exploits the sparsity of text, giving sub‑millisecond response times.  
2. **Stage 2 – Precise dense re‑ranking**: Compute \(\mathbf{e}_q\cdot\mathbf{e}_{d_i}\) for each candidate \(d_i\), then re‑order by a learned ranking function (e.g., Bi-Encoder or Cross‑Encoder). This stage corrects semantic mismatches missed in Stage 1.

The non‑obvious insight: **the first stage need not be perfect; it merely needs to preserve the *semantic neighborhood* of \(q\)**. Even if some relevant docs slip through, the dense re‑ranker can recover them because it evaluates *global similarity*, not term overlap. Consequently, hybrid search achieves both speed (sparse index) and accuracy (dense embedding), making it the de‑facto standard for modern AI‑powered search engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
