---
qid: ing_f8b420bf65__fp__local
question: 'Explain: And every leaf node by construction is — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 419
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:48:23-05:00'
sources: []
---

### Why every leaf node is an “anomaly detector”

In a supervised decision‑tree, each leaf represents the set of training samples that follow the same sequence of splits.  
For **unsupervised anomaly detection** we treat the tree as a *partition* of feature space:

1. **Fundamental problem** – We want to flag points lying in low‑probability regions of the data distribution \(p(\mathbf{x})\).  
2. **Tree construction** – Splits are chosen to maximise information gain (or reduce impurity). This forces each leaf to contain a *homogeneous* subset of the training set.  
3. **Leaf statistics** – For leaf \(\ell\) let \(n_\ell\) be its sample count and \(V_\ell\) its volume in feature space (estimated via bounding boxes or kernel density on the samples).  
4. **Anomaly score** – Define
   \[
   s(\mathbf{x}) = -\,\log\!\left( \frac{n_\ell}{N}\right)+\log V_\ell,
   \]
   where \(N\) is total training size. The first term rewards rarity, the second penalises large regions.  
5. **Guarantee** – Because splits minimise impurity, any point reaching a leaf with very few samples must have followed a *rare* path; thus its score will be high.

#### Non‑obvious insight
A leaf’s volume \(V_\ell\) is often overlooked. Two leaves may contain the same number of points, yet one spans a vast region (low density but not anomalous). By explicitly incorporating \(V_\ell\), we correct for *density* rather than just *frequency*, turning each leaf into a principled anomaly detector that respects both geometry and probability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
