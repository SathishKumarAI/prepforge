---
qid: ing_07177dcdd1__fp__local
question: 'Explain: Creating a Hybrid Retrieval Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 603
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:59-05:00'
sources: []
---

### Why a hybrid pipeline is needed

In modern QA systems the goal is to retrieve *relevant* passages from a vast corpus and then generate an answer.  
Two complementary worlds compete:

| Retrieval | Generation |
|-----------|------------|
| **Sparse** (BM25, TF‑IDF) – fast, exact matches on surface tokens | **Dense** (sentence embeddings, cross‑encoder) – semantic similarity, robust to paraphrase |

Each approach solves a different sub‑problem: *exact recall* vs. *semantic relevance*.  A single method can never optimally balance both; we must combine them.

### The core principle

Treat the corpus as a **probabilistic mixture** of two latent relevance models:

\[
P(r|q) = \lambda\, P_{\text{BM25}}(r|q) + (1-\lambda)\, P_{\text{dense}}(r|q)
\]

where \(q\) is the query and \(r\) a candidate document.  
The mixture weight \(\lambda\) is learned (or tuned) so that the combined score maximizes downstream F‑score.  This is exactly what Haystack’s `HybridSearch` does: it runs both backends in parallel, normalises their scores to the same scale, and sums them.

### How it works in practice

1. **Sparse step** – BM25 returns a high‑ranked set \(S_{\text{BM}}\).  
2. **Dense step** – an encoder (e.g., SBERT) produces embeddings; a vector index returns \(S_{\text{dense}}\).  
3. **Merge & re‑rank** – scores are normalised (min–max or z‑score), then added:  

   \[
   \text{final\_score}(r)=w_{\text{BM}}\,s_{\text{BM}}(r)+w_{\text{dense}}\,s_{\text{dense}}(r)
   \]

4. **Optional re‑ranking** – a cross‑encoder can be applied to the top‑\(k\) candidates for fine‑grained relevance.

### Non‑obvious insight

A common mistake is to think that *more* dense vectors automatically improve recall.  In fact, the dense index tends to cluster semantically similar passages, causing **locality collapse**: many irrelevant documents share high similarity because they contain common terms (e.g., “the”). Normalising scores before merging prevents this bias; otherwise BM25 will be drowned out and recall drops.

By viewing retrieval as a probabilistic mixture, we obtain a principled, tunable system that leverages the strengths of both sparse exact matching and dense semantic search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
