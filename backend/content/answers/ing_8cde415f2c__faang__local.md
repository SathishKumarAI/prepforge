---
qid: ing_8cde415f2c__faang__local
question: How do you choose k in clustering, and how do you evaluate a clustering
  when you have no labels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 437
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:42-05:00'
sources: []
---

**Clarify**  
You’re asking how to pick the number of clusters *k* in an unsupervised setting and how to judge the resulting partition without ground‑truth labels. I’ll assume we have a numeric feature space, want a flat clustering (e.g., k‑means), and can compute pairwise distances.

**Approach**  
1. **Elbow/Gap/Silhouette**: use internal validity indices that trade off compactness vs separation.  
2. **Stability**: resample or perturb data; clusters should be reproducible across runs.  
3. **Domain‑specific constraints**: prior knowledge (e.g., max/min cluster size) can narrow *k*.  

**Depth**  
- *Elbow*: plot WCSS versus *k*; the point where marginal gain drops is a candidate. Complexity O(n·k·t).  
- *Silhouette*: average silhouette score for each point; values close to 1 indicate good clustering. Compute in O(n²) but can be approximated.  
- *Gap Statistic*: compare WCSS against a null reference distribution; the first *k* where Gap is within one standard error of the maximum is chosen.  
- *Stability*: run k‑means multiple times with different seeds or bootstrap samples; compute adjusted Rand index (ARI) between runs—high ARI implies stable clustering.  

**Edge Cases**  
- Highly imbalanced clusters: silhouette may favor fewer clusters.  
- Noisy data or outliers inflate WCSS; consider robust variants (k‑medoids).  
- Very high dimensionality: distance concentration can mislead all indices; apply dimensionality reduction first.

**Optimize & Communicate**  
Start with an elbow to get a rough *k*, then refine using silhouette or Gap. Validate stability on a held‑out subsample. Explain that these are heuristic, not definitive, and that domain knowledge should ultimately guide the final choice. This shows structured reasoning, clear communication, and depth of technical understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
