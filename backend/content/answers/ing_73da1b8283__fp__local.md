---
qid: ing_73da1b8283__fp__local
question: 'Explain: Data types supported (for value) — Datatypes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 414
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:18-05:00'
sources: []
---

In a supervised learner the *value* (label) is the target we try to predict.  
Why must it be restricted to certain data types? Because the learning algorithm
operates on a **mathematical space** where distances, gradients or likelihoods are defined.  

1. **Real‑valued** – most models assume Euclidean geometry: linear regression,
   neural nets, SVMs with kernels all use dot products or norms that only make sense
   over ℝ.  
2. **Categorical (ordinal / nominal)** – encoded as one‑hot or integer indices.
   The learning objective can be a cross‑entropy loss, which is well‑defined on a
   simplex of probability distributions.  
3. **Binary** – a special case of categorical; the hinge or logistic loss treats it
   as ±1 or {0,1}.  
4. **Structured (sets, sequences, graphs)** – modern deep nets (RNNs, GCNs)
   treat these as tensors with implicit order or adjacency matrices; the loss still
   reduces to a real‑valued scalar.

A non‑obvious insight: *any* value type can be mapped into ℝⁿ via an embedding,
but the **geometry of that embedding dictates inductive bias**.  
For example, treating words as one‑hot vectors forces models to learn semantic
relationships from scratch; pre‑trained word embeddings give a low‑dimensional
manifold where Euclidean distance correlates with meaning. Thus, the choice of
datatype is not just a syntactic convenience—it encodes assumptions about how the
target lives in space and what kind of regularization (distance metrics,
probability simplices) will guide learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
