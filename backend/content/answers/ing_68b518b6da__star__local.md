---
qid: ing_68b518b6da__star__local
question: Compare PCA, t-SNE and UMAP. When would you use each, and how do people
  misread these plots?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 347
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:42-05:00'
sources: []
---

**Situation** – In my last role I was tasked with visualizing a 50‑dimensional customer churn dataset for the product team, so they could spot segmentation patterns before building a predictive model. The data had noisy features and a skewed class distribution.

**Task** – I needed to choose an embedding technique that preserved cluster structure for interpretation while being fast enough to iterate on feature engineering.

**Action** – I first ran **PCA** to get a quick, linear projection into two components; it helped identify a global trend but blurred distinct groups. Then I applied **t‑SNE** with perplexity 30 and 1000 iterations to reveal finer clusters—though the runtime was high (≈15 min) and the distances between clusters were not meaningful. Finally I used **UMAP** (n_neighbors=15, min_dist=0.1), which produced a similar cluster layout in under two minutes and kept relative inter‑cluster distances more interpretable. I compared the plots against known segment labels to check for “crowding” artifacts that people often misread as real separations.

**Result** – UMAP gave the clearest, most actionable visualization: three distinct customer groups were highlighted with clear boundaries, leading the team to a 12 % lift in targeted retention campaigns. I learned that PCA is great for quick sanity checks, t‑SNE excels at uncovering subtle structure but can mislead about distances, and UMAP balances speed, interpretability, and faithful topology when presenting insights to non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
