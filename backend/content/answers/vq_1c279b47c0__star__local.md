---
qid: vq_1c279b47c0__star__local
question: Explain Unsupervised Learning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 360
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:13-05:00'
sources: []
---

**Situation**  
While leading the data‑science team at a fintech startup, we were tasked with reducing customer churn. Our internal database contained millions of anonymized transaction logs, but no labels indicating “churn” or “loyalty.”  

**Task**  
I needed to uncover hidden patterns in user behavior that could serve as early warning signals for churn, without relying on pre‑tagged data.  

**Action**  
We built an unsupervised learning pipeline using Python’s scikit‑learn and Spark MLlib. First, we performed feature engineering—creating time‑series aggregates (average spend per month, transaction frequency variance) and one‑hot encoding categorical fields. Then we applied t‑SNE for dimensionality reduction to visualize high‑dimensional data. For clustering, we chose the DBSCAN algorithm because it handles noise and doesn’t require specifying the number of clusters in advance. After tuning eps and min_samples via silhouette scores, we identified three distinct customer segments: “stable,” “in‑transit,” and “at‑risk.” We mapped these segments back to business metrics and found that the “at‑risk” group had a 35% higher churn rate over the next quarter compared to the baseline.  

**Result**  
The unsupervised model enabled us to flag 18,000 customers as at risk within two weeks of deployment, allowing targeted retention campaigns that reduced churn by 12% year‑over‑year. I learned how crucial it is to combine domain knowledge with algorithmic flexibility—DBSCAN’s ability to ignore outliers was key to avoiding false positives in our high‑volume dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
