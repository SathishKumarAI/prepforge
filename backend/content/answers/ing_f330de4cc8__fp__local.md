---
qid: ing_f330de4cc8__fp__local
question: 'Explain: Bi-Encoder vs Cross-Encoder — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 468
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:35:59-05:00'
sources: []
---

**Why do we need two encoder families?**

In retrieval‑to‑rerank pipelines the system must evaluate *pairs* (query + candidate) but often has to score thousands of candidates per query.  
A **Bi‑Encoder** processes the query and each candidate independently, producing embeddings that are later dot‑producted.  
A **Cross‑Encoder** concatenates the pair and feeds it through a transformer that can attend across the two sequences.

---

### Fundamental trade‑off

| Property | Bi‑Encoder | Cross‑Encoder |
|----------|------------|---------------|
| **Computational cost per query** | Linear in *k* (candidate count) after pre‑computing embeddings. | Quadratic in token length; must re‑run the model for every pair. |
| **Interaction modelling** | Limited to what the embedding captures; no cross‑attention at scoring time. | Full cross‑attention, capturing fine‑grained relevance signals. |
| **Approximation gap** | Embedding compression → loss of nuance. | Near‑optimal but expensive. |

The optimisation principle is *efficiency vs expressivity*. The Bi‑Encoder’s embedding can be viewed as a projection into a low‑dimensional subspace that preserves the inner product structure of relevance scores (Johnson–Lindenstrauss). The Cross‑Encoder, by contrast, solves an exact scoring problem in the full joint space.

---

### Non‑obvious insight

**Reranking is *not* merely a correction step; it can be viewed as a second‑order optimisation.**  
When the Bi‑Encoder’s subspace poorly separates hard negatives, the Cross‑Encoder’s attention acts like a Newton step: it re‑weights dimensions (via learned attention weights) that were collapsed in the projection. Thus, reranking often *improves* retrieval quality more than simply correcting mistakes—it refines the decision boundary by exploring directions invisible to the Bi‑Encoder.

---

**Bottom line:** Use a Bi‑Encoder for fast coarse filtering; deploy a Cross‑Encoder on the top‑k to exploit full contextual interactions and recover from projection loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
