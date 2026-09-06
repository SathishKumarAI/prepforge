---
qid: ing_68b518b6da__fp__local
question: Compare PCA, t-SNE and UMAP. When would you use each, and how do people
  misread these plots?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 564
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:10-05:00'
sources: []
---

### Why dimensionality reduction matters

When we observe data \(X\in \mathbb{R}^{n\times d}\) with \(d\gg n\), the *effective* degrees of freedom are far fewer than \(d\). The goal is to find a mapping \(\phi:X\to \mathbb{R}^k\) (\(k\ll d\)) that preserves the structure most relevant for a downstream task.  
Three popular choices differ in **what structure they optimally preserve**:

| Method | Principle | Optimality |
|--------|-----------|------------|
| **PCA** | Linear subspace that maximises variance (or equivalently minimises reconstruction error) | Euclidean distances along the chosen axes |
| **t‑SNE** | Kullback–Leibler divergence between high‑dimensional and low‑dimensional pairwise similarity distributions | Local neighbourhoods; global geometry is not guaranteed |
| **UMAP** | Fuzzy topological manifold approximation + stochastic optimisation of a cross‑entropy objective | Both local and global structure (via geodesic distances), with provable stability under reasonable assumptions |

### When to use each

- **PCA** – when you need an interpretable linear summary, want to feed the result into a linear model, or require fast computation on massive data.  
- **t‑SNE** – when visualising clusters is paramount and you can tolerate distortion of global distances; best for exploratory plots with few hundred points.  
- **UMAP** – when you need a faithful embedding that preserves both local and broader topology, often used as a preprocessing step before clustering or classification.

### Common misinterpretations

1. **Treating t‑SNE/UMAP clusters as absolute separability**: the algorithm emphasises local density; two clusters may be arbitrarily far apart in the plot yet overlap in high‑dimensional space.  
2. **Assuming PCA captures “true” variance**: it only sees linear directions; nonlinear manifolds can have little variance along any single axis.

### Non‑obvious insight

The *choice of distance metric* is implicit in each method’s objective. t‑SNE uses a Student‑t kernel that down‑weights far points, effectively flattening the manifold; UMAP starts from a **fuzzy simplicial set** built on a *k‑nearest‑neighbour graph*, explicitly encoding topology before optimisation. Recognising this subtle shift explains why UMAP often preserves global relationships better than t‑SNE despite both being stochastic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
