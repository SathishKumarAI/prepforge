---
qid: ing_b7c933e5b3__fp__local
question: 'Explain: Then we also did some normalization to — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 422
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:57-05:00'
sources: []
---

**Why normalize before detecting anomalies?**

Anomaly‑detection algorithms (k‑NN, isolation forest, one‑class SVM, density estimators) all hinge on a *distance* or *similarity* measure between observations.  
If feature \(x_j\) is measured in kilograms while another \(x_k\) ranges from 0 to 1 000, the Euclidean distance will be dominated by \(x_j\). Consequently, patterns that are truly anomalous along the small‑scale dimension will be drowned out.  

Mathematically, for any two points \(\mathbf{u},\mathbf{v}\),
\[
d^2(\mathbf{u},\mathbf{v})=\sum_{j=1}^p w_j (u_j-v_j)^2,
\]
where the implicit weights \(w_j=1/\sigma_j^2\) arise from variance. Normalization sets \(\sigma_j\simeq1\), yielding equal weight to each dimension and preserving the geometry of the data manifold.

**Deeper principle: isotropy in feature space.**  
Statistical learning theory assumes that the training distribution is sampled from an underlying probability density \(p(\mathbf{x})\). If features are on different scales, the kernel bandwidth or neighborhood radius must be tuned per‑feature, which defeats the purpose of a *single* global hyperparameter. Normalization enforces isotropy, making the learned decision boundary invariant to unit changes.

**Non‑obvious insight:**  
After normalizing, *the shape* of the anomaly region may change dramatically: points that were previously “far” in Euclidean sense can become close, revealing anomalies that are subtle variations across many features. Thus, normalization is not merely a preprocessing step; it redefines what constitutes *distance* and hence *anomaly* in the feature space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
