---
qid: ing_e00781c638__star__local
question: 'Explain: Unsupervised learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 294
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:40-05:00'
sources: []
---

**Situation:**  
At my previous role as a data scientist at an e‑commerce startup, we were struggling with customer segmentation for personalized marketing. The user base was growing fast—over 500k monthly active users—and our manual segmentation approach couldn’t keep up.

**Task:**  
I needed to automatically group customers into meaningful clusters so the marketing team could target campaigns more efficiently, reducing churn and increasing average order value.

**Action:**  
I applied unsupervised learning using K‑means clustering on a feature set that included purchase frequency, recency, monetary value, and browsing behavior. I first cleaned the data with pandas, engineered features in Python, then used scikit‑learn to run the algorithm, tuning `k` via the elbow method. To validate clusters, I plotted silhouette scores and performed a manual review of sample customers per cluster. I integrated the results into our recommendation engine using TensorFlow’s embedding layer for real‑time personalization.

**Result:**  
The clustering model reduced manual segmentation effort by 90%, cut campaign response time from weeks to days, and lifted conversion rates by 12% in the first quarter post-implementation. I learned that unsupervised learning is a powerful tool for uncovering hidden patterns when labels are scarce, especially when combined with domain knowledge and rigorous validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
