---
qid: vq_101f90b0ba__fp__local
question: Should strongly linked variables be removed before doing PCA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 288
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:58-05:00'
sources: []
---

When you feed data into a linear dimensionality‑reduction algorithm such as Principal Component Analysis (PCA), the goal is to capture as much *variance* in the fewest orthogonal directions as possible.  
A pair of strongly correlated variables \(X\) and \(Y\) occupy almost the same subspace: their covariance matrix has an eigenvalue that is nearly the sum of their individual variances, while the orthogonal complement carries very little energy. If you keep both, PCA will simply allocate one principal component to this shared direction and another (almost flat) component to a noise‑like residual. The result is an inflated dimensionality that does not give you new information.

Removing one of the correlated variables before applying PCA is therefore **not mandatory**—PCA will “discover” the redundancy itself—but it often yields a cleaner, more interpretable factor structure and reduces computational cost.  
A subtle point many overlook: even if \(X\) and \(Y\) are highly correlated, their *joint* distribution can be non‑Gaussian; PCA’s linearity forces the model to treat them as lying on a single line, potentially discarding higher‑order dependencies that might be captured by other techniques (e.g., Independent Component Analysis). Thus, preprocessing with variable selection is a practical trade‑off between faithful variance capture and richer statistical modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
