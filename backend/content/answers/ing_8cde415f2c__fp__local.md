---
qid: ing_8cde415f2c__fp__local
question: How do you choose k in clustering, and how do you evaluate a clustering
  when you have no labels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 677
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:38-05:00'
sources: []
---

**Choosing \(k\) without labels**

The clustering objective is usually *minimising within‑cluster variance* (k‑means) or *maximising separation* (spectral).  
Let \(\{x_i\}\subset\mathbb R^d\) and denote by \(C_1,\dots ,C_k\) a partition.  
Define the **within‑sum of squares**  

\[
W(k)=\sum_{j=1}^{k}\sum_{x_i\in C_j}\|x_i-\mu_j\|^2 ,
\]

where \(\mu_j\) is the mean of \(C_j\).  
If we increase \(k\), \(W(k)\) is guaranteed to *decrease* (adding a cluster cannot increase variance).  The fundamental problem is that the true number of groups, \(k^\*\), is unknown; we need a principled stopping rule.

The **elbow method** derives from observing that

\[
\Delta W(k)=W(k-1)-W(k)
\]

rapidly decays once we pass \(k^\*\).  In probabilistic terms, each additional cluster captures a new *mode* of the underlying density; beyond \(k^\*\) the marginal gain is dominated by fitting noise.  Formally, if data are drawn from a mixture of Gaussians with covariance \(\sigma^2I\), then \(W(k)\) behaves like

\[
W(k)=n\sigma^2 + O(n/k),
\]

so the curvature of \(W(k)\) is governed by the *bias–variance trade‑off*.  The elbow corresponds to the point where the bias (under‑segmentation) equals the variance (over‑fitting).

**Evaluating unlabeled clusters**

When no ground truth exists, we rely on *internal* criteria that measure compactness and separation:

| Criterion | Formula | Interpretation |
|-----------|---------|----------------|
| **Silhouette** \(s_i=\frac{b_i-a_i}{\max(a_i,b_i)}\) | \(a_i\)=avg intra‑cluster distance, \(b_i\)=closest inter‑cluster average | 1 = well separated; -1 = mis‑assigned |
| **Davies–Bouldin** \(DB=\frac{1}{k}\sum_j \max_{m\neq j}\frac{s_j+s_m}{d(\mu_j,\mu_m)}\) | \(s_j\)=average intra‑cluster distance | Lower DB = better |
| **Calinski–Harabasz** \(\frac{\text{between‑variance}}{\text{within‑variance}}\) | Ratio of dispersion between clusters to that within clusters | Higher is better |

A non‑obvious insight: *these metrics are invariant under affine transformations*.  Because they depend only on pairwise distances, a rotation or scaling of the data leaves the score unchanged.  Therefore, choosing \(k\) should be done **after** centering and whitening the data; otherwise anisotropic variances can bias the evaluation toward artificially inflated clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
