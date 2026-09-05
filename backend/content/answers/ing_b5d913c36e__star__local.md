---
qid: ing_b5d913c36e__star__local
question: 'Explain: Week 2: Modeling Challenges and Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 318
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:03-05:00'
sources: []
---

**Situation:**  
During the second sprint of a churn prediction project for a telecom client, our initial model’s AUC dropped from 0.78 on the training set to 0.62 on the hold‑out data. The feature space was dense (≈2,500 one‑hot encoded columns) and the target class was heavily imbalanced (only 8% churn).

**Task:**  
I had to rebuild a robust model that maintained high predictive power while keeping inference latency under 50 ms for real‑time scoring.

**Action:**  
First, I applied SMOTE‑ENN on the training split to balance the classes and then performed automated feature selection with SHAP-based importance ranking, reducing features to 350. Next, I switched from a random forest to a LightGBM model, tuning `num_leaves`, `min_data_in_leaf`, and `lambda_l2` via Optuna. To handle latency, I pruned the tree depth to 8 and quantized leaf values. Finally, I wrapped the pipeline in a Docker container with GPU acceleration for batch scoring.

**Result:**  
The new model achieved an AUC of 0.85 on the hold‑out set and maintained 45 ms inference time. Deployment reduced churn by 12% over three months, and I learned that balancing data, feature sparsity, and model complexity trade‑offs are critical in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
