---
qid: ing_fecc064db6__fp__local
question: 'Explain: How Each Architecture Processes a Query-Document Pair'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 516
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:38-05:00'
sources: []
---

**From the problem to the algorithm**

A *query–document* pair is a noisy signal: we want a scalar \(s(q,d)\) that estimates relevance.  
The fundamental requirement is **monotonicity in evidence** – adding more matching content must never lower the score. This drives every model toward a decomposition into local evidences (term matches, embeddings, attention weights).

| Architecture | Core idea | How it builds \(s(q,d)\) |
|--------------|-----------|--------------------------|
| **TF‑IDF** | Evidence = term frequency weighted by rarity | \(s=\sum_{t\in q}\text{tf}(t,d)\cdot\log\frac{N}{n_t}\). Each term contributes independently; idf down‑weights ubiquitous terms. |
| **BM25** | Same evidence, but normalizes for document length and caps saturation | \(s=\sum_{t\in q}\frac{\text{tf}(t,d)(k_1+1)}{\text{tf}(t,d)+k_1(1-b+b\cdot\frac{|d|}{avg|d|})}\log\frac{N-n_t+0.5}{n_t+0.5}\). The length‑dependent denominator is a *convex* penalty derived from a probabilistic relevance model. |
| **Transformer‑based re-rankers** | Evidence = contextual similarity in high‑dimensional space | Encode \(q\) and \(d\) with shared weights, compute cross‑attention logits, then aggregate via a learned MLP: \(s=f(\text{softmax}(QK^T)V)\). The softmax implements a *probabilistic* alignment that is differentiable, allowing end‑to‑end learning. |

**Non‑obvious insight**  
All three can be seen as *kernel density estimators* over the joint space of query and document features: TF‑IDF uses a linear kernel on bag‑of‑words; BM25 adds a length‑dependent bandwidth; neural models learn a non‑linear kernel implicitly. Recognizing this unifies sparse retrieval, probabilistic ranking, and deep re‑ranking under a single density estimation framework, revealing why hybrid pipelines (BM25 + neural reranker) often outperform either alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
