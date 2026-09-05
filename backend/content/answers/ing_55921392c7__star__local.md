---
qid: ing_55921392c7__star__local
question: 'Explain: Yes. >> Can you still reward diversity — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 357
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:06-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time fraud monitoring platform for credit card transactions. The existing rule‑based engine flagged only obvious cases, missing subtle anomalies that varied by merchant and geography. Our key metric—false negative rate—was creeping above 12%, threatening revenue.

**Task:**  
I was tasked with building an unsupervised anomaly detection model that could surface diverse fraud patterns while keeping latency under 200 ms per transaction and maintaining interpretability for compliance auditors.

**Action:**  
I chose a hybrid of Isolation Forests (for speed) and Autoencoder reconstruction error (to capture nonlinear relationships). I trained on one month’s labeled data, then applied a two‑stage pipeline: first the isolation forest pruned obvious outliers; second, the autoencoder scored the remaining 1% for subtle deviations. To reward diversity, I clustered anomalies by merchant category and geography using DBSCAN, assigning higher “diversity weight” to under‑represented clusters in the final ranking. For explanations, I used SHAP values on the isolation forest features, feeding them into a lightweight rule engine that generated human‑readable alerts.

**Result:**  
The system reduced the false negative rate from 12% to 4% within two weeks of deployment and increased true positive detections by 35%. The diversity weighting surfaced previously unseen fraud patterns in three niche merchant categories, leading to an additional $1.2 M in recovered revenue over six months. I learned that balancing algorithmic power with explainability and business constraints is key to a successful anomaly detection solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
