---
qid: ing_eb0d00bdbe__fp__local
question: 'Explain: What is feature scaling? Compare normalization and standardization,
  and tell me which models actually need it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 381
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:42-05:00'
sources: []
---

Feature scaling answers a fundamental optimisation problem: when an objective depends on many variables of different magnitudes, the gradient descent (or any iterative solver) can oscillate wildly and converge slowly because one dimension dominates the step size. By putting all predictors onto a comparable scale we give each feature equal footing in the geometry of the loss surface.

**Normalization** (min‑max scaling) maps \(x\) to \(\tilde{x}=(x-\min)/( \max-\min)\). It preserves the shape of the distribution but forces every variable into \([0,1]\).  
**Standardisation** (z‑score) centers and rescales: \(\tilde{x}=(x-\mu)/\sigma\), producing zero mean and unit variance. It keeps outliers’ relative positions while removing scale.

When is it required?  
- **Gradient‑based learners** (logistic/linear regression, neural nets, SVMs with RBF kernels) – the optimisation path depends on feature magnitude.  
- **Distance‑based models** (k‑NN, k‑means, hierarchical clustering) – Euclidean distances are biased by large‑scale features unless scaled.  

Tree‑based methods (decision trees, random forests, XGBoost) are invariant to monotonic rescaling because splits depend only on ordering; they do not benefit from scaling.

A non‑obvious insight: *standardisation is usually preferable when the data contain outliers*. Normalization compresses extreme values into the tail of \([0,1]\), which can make gradients vanish or inflate for those points. Standardisation keeps outliers at a distance proportional to their deviation, allowing regularisers (e.g., L2) to penalise them appropriately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
