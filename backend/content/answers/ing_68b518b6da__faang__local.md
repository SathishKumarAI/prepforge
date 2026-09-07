---
qid: ing_68b518b6da__faang__local
question: Compare PCA, t-SNE and UMAP. When would you use each, and how do people
  misread these plots?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 503
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:06-05:00'
sources: []
---

**Clarify**  
You’re asking for a side‑by‑side comparison of three dimensionality‑reduction tools—PCA, t‑SNE, and UMAP—and guidance on when each is appropriate, plus common pitfalls in interpreting their visualizations.

**Approach**  
1. List key properties (linear vs nonlinear, global/local structure preservation).  
2. Map those to use‑cases (exploratory analytics, clustering, visualization).  
3. Highlight misinterpretation traps (cluster “tightness”, distance meaning).

**Depth**  

| Method | Core Idea | Preserves | Typical Use | Complexity |
|--------|-----------|-----------|-------------|------------|
| **PCA** | Linear projection maximizing variance | Global distances; eigenvectors | Quick sanity check, feature reduction before ML | O(n d²) for d features |
| **t‑SNE** | Probabilistic embedding optimizing pairwise similarities | Local neighborhoods | Visualizing high‑dim clusters (e.g., gene expression), exploratory plots | O(n²) but often subsampled |
| **UMAP** | Topological data analysis + fuzzy simplicial set optimization | Both local and some global structure | Large‑scale embeddings, clustering pipelines, interactive dashboards | Near‑linear; fast on GPU |

*When to use:*  
- **PCA** → when you need a linear baseline or feed into downstream models.  
- **t‑SNE** → small data (<10k) where cluster shape matters more than global geometry.  
- **UMAP** → large datasets, preserving both cluster separation and relative positioning; good for interactive visualizations.

**Edge cases**  
- t‑SNE can “split” a single class into multiple blobs if perplexity is low.  
- UMAP may collapse distinct manifolds if `min_dist` is set too high.  
- PCA may hide non‑linear separability entirely.

**Optimize & communicate**  
Explain that distances in t‑SNE/UMAP are *relative* probabilities, not Euclidean metrics; cluster “tightness” doesn’t imply similarity magnitude. Emphasize validating clusters with clustering metrics (Silhouette, Davies–Bouldin) and cross‑checking with domain knowledge before drawing conclusions. This structured narrative demonstrates clear problem framing, technical depth, and practical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
