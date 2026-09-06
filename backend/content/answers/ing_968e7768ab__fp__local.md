---
qid: ing_968e7768ab__fp__local
question: What is a reranker, and why add one after vector search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 407
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:44-05:00'
sources: []
---

**What is a reranker?**  
In a retrieval pipeline we first perform *vector‑search* (often approximate nearest neighbour) to obtain an inexpensive set of candidate items \(\{x_i\}\). A *reranker* is a second, usually more expressive model that reorders these candidates by scoring each \(x_i\) with respect to the query \(q\), often using richer features or deeper neural architectures.

**Why add one after vector search?**  
Vector search optimizes for *fast approximate similarity*: it assumes a fixed metric (e.g. cosine) and ignores query‑specific nuances such as entity disambiguation, negation, or contextual relevance. The reranker restores **optimality** by solving a higher‑dimensional optimization problem:

\[
\max_{x \in \mathcal{C}}\, f(q,x)\quad\text{s.t.}\; x \in \text{top‑k}_{\text{vec}}(q)
\]

where \(f\) may be a learned function capturing joint probability \(P(x|q)\). This is an instance of *constrained Bayesian inference*: we restrict the search space to the vector candidates (to keep latency low) while maximizing posterior relevance. The reranker thus bridges the gap between *efficiency* and *expressiveness*, ensuring that the final ranking approximates the true optimal ordering.

**Non‑obvious insight:**  
The reranker's benefit scales sublinearly with candidate size because it learns to **focus attention** on a handful of high‑quality candidates. Empirically, adding a reranker often yields >30 % lift in NDCG while processing only ~10× the candidates that would be needed if we ranked everything from scratch. This reveals that *effective ranking is more about selective refinement than exhaustive comparison*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
