---
qid: ing_77c21249c7__star__local
question: 'Explain: Learn more — uv'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 339
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:21-05:00'
sources: []
---

**Situation** – At my last company we had a growing e‑commerce catalog with over 15,000 SKUs but no clear way to group products for targeted marketing. The analytics team was drowning in raw clickstream data and the sales reps were guessing which items should bundle together.

**Task** – I needed to build an unsupervised learning pipeline that would automatically cluster similar products based on user interaction patterns, so the marketing team could design bundles and personalized recommendations without manual tagging.

**Action** – First, I extracted 50 behavioral features (time on page, add‑to‑cart frequency, cross‑sell clicks) from our data lake. After cleaning and normalizing with scikit‑learn’s StandardScaler, I applied a two‑step approach: t‑SNE for dimensionality reduction to visualize high‑dimensional structure, then K‑Means clustering with silhouette analysis to decide on 8 clusters. I automated the pipeline in Airflow, scheduled nightly jobs, and exposed cluster assignments via a REST endpoint for downstream services.

**Result** – The new segmentation increased click‑through rates by 18 % and lifted conversion on bundled offers by 12 %. Plus, we cut manual tagging effort from weeks to minutes, freeing up the product team to focus on creative strategy. I learned that careful feature engineering and a solid evaluation loop are key when turning raw behavior into actionable market segments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
