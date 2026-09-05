---
qid: ing_adc9dee093__star__local
question: 'Explain: AI and machine learning — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 319
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:42-05:00'
sources: []
---

**Situation** – At my last company we had a customer churn prediction model that was only 68 % accurate, causing us to lose millions in upsell revenue each quarter.

**Task** – I was tasked with boosting accuracy to at least 80 % while keeping the inference latency under 50 ms so it could run on our edge devices.

**Action** – First, I mapped the problem onto IBM’s Think Topics framework: *Data Preparation*, *Model Training*, and *Deployment*.  
1. **Data Prep** – I used Spark to engineer new features (customer lifetime value, engagement heatmaps) and applied SMOTE for class imbalance.  
2. **Model Training** – Leveraging TensorFlow on the Cloud Pak for Data, I experimented with gradient‑boosted trees and a lightweight neural net, using hyperparameter tuning via Bayesian optimization.  
3. **Deployment** – I containerized the best model with Docker, deployed it to Kubernetes, and used IBM’s Watson Machine Learning service for real‑time inference, adding an A/B testing layer to monitor drift.

**Result** – Accuracy jumped to 82 %, churn prediction latency fell to 38 ms, and we captured an additional $4.2 M in upsell revenue over the next six months. I learned that aligning ML work with IBM’s Think Topics ensures end‑to‑end scalability and business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
