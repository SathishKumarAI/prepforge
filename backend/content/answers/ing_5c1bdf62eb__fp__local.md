---
qid: ing_5c1bdf62eb__fp__local
question: 'Explain: Selected Prototypes — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 417
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:48-05:00'
sources: []
---

**Selected‑Prototype learning** is the principled answer to *“how can we compress a training set while keeping its predictive power?”*  
At the core we face a combinatorial optimisation: choose a small subset \(P\subseteq X\) of instances so that every point in the full dataset is well represented by one of the prototypes. Formally, minimise  

\[
\min_{P}\; \sum_{x\in X} \ell\!\bigl(\hat{y}(x;P),\, y(x)\bigr)
\quad\text{s.t.}\;\|P\|\le k ,
\]

where \(\hat{y}(x;P)\) is the label inferred from the nearest prototype in \(P\).  
This problem is a *k‑medoids* or *k‑means* variant, but with an additional **label‑aware** objective: we care about classification error, not just distance. The solution must respect two principles:

1. **Information bottleneck** – prototypes act as a compressed representation of the data; they preserve the mutual information \(I(X;Y)\) while discarding redundancy.
2. **Geometric consistency** – each prototype should lie in a high‑density region of its class, ensuring that nearest‑neighbour decisions remain stable under perturbations.

A non‑obvious insight: *prototype quality is not purely local*. Selecting a prototype that sits on the boundary between two classes can dramatically reduce error even if it lies far from the majority of points. This reflects the fact that classification cost is driven by *decision boundaries*, not cluster centroids. Thus, optimal prototypes often correspond to support vectors in SVMs or decision‑boundary samples in nearest‑neighbour ensembles—revealing a deep link between prototype learning and margin maximisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
