---
qid: ing_965fcaf295__faang__local
question: 'Explain: Social Media App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 911
total_tokens: 1144
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:42-05:00'
sources: []
---

**Clarify**

We’re building a social‑media app (like Instagram/Twitter).  
Key assumptions:  
- “Top 20” refers to the most common interview questions for ML roles at FAANG.  
- Interviewers expect you to discuss data, models, evaluation, and deployment.  
- You can answer in ~3–4 minutes with concise, technical depth.

**Approach**

1. List the 20 high‑frequency topics.  
2. For each, give a one‑sentence rationale + brief “how I’d solve/approach it.”  
3. Highlight trade‑offs or edge cases that interviewers might probe.

**Depth (sample answer)**

| # | Question | Why It Matters | Typical Answer |
|---|----------|----------------|----------------|
| 1 | **Data ingestion & preprocessing** | Data quality drives model performance. | Use streaming ETL (Kafka → Spark) with schema validation and outlier handling. |
| 2 | **Feature engineering for user embeddings** | Captures latent interests. | Build collaborative‑filtering embeddings via matrix factorization or deep autoencoders. |
| 3 | **Cold‑start problem** | New users/items lack history. | Use content features (profile, posts) + transfer learning from related domains. |
| 4 | **Recommendation algorithm choice** | Trade‑off accuracy vs latency. | Hybrid of matrix factorization for long tail + real‑time bandit exploration. |
| 5 | **A/B testing framework** | Validates model impact. | Bayesian online changepoint detection with hierarchical priors. |
| 6 | **Evaluation metrics (precision@k, NDCG)** | Reflects business goals. | Compute offline metrics, then confirm lift on live traffic. |
| 7 | **Model interpretability** | Trust & compliance. | Use SHAP values per user group; provide explanation UI. |
| 8 | **Scalability of inference** | Millions of requests/day. | Serve models via TensorRT or ONNX with GPU autoscaling. |
| 9 | **Latency constraints** | Real‑time feed generation. | Cache top N recommendations per region + edge CDN. |
|10 | **Model drift detection** | Data distribution changes. | Monitor feature statistics & retrain schedule (online vs batch). |
|11 | **Privacy / GDPR compliance** | Legal requirement. | Differential privacy in embeddings; local differential privacy for user logs. |
|12 | **Bias & fairness** | Avoid discrimination. | Debias training data, apply equalized odds post‑processing. |
|13 | **Explainable recommendation loops** | Prevent filter bubbles. | Diversify feed with serendipity score. |
|14 | **User feedback loop** | Continuous improvement. | Active learning: query users on ambiguous content. |
|15 | **Multi‑modal data fusion** | Text + image + video. | Late fusion of CNN, RNN, and transformer embeddings. |
|16 | **Graph neural networks for social graph** | Captures relationships. | GCN or GraphSAGE to propagate influence scores. |
|17 | **Handling spam / toxic content** | Platform safety. | Fine‑tuned BERT classifier + human‑in‑the‑loop flagging. |
|18 | **Cold‑start for new posts** | Freshness of feed. | Content‑based ranking using metadata and early engagement signals. |
|19 | **Model versioning & rollback** | Operational reliability. | MLflow + Canary deployments; monitor error rates. |
|20 | **Cost optimization** | Scale without breaking the bank. | Spot instances for training, model compression (pruning, quantization). |

**Edge Cases**

- Sudden viral trends → spike in feature distribution → retrain or use online learning.  
- Adversarial manipulation of engagement signals → robust loss functions.  
- Regional regulatory differences → dynamic privacy settings.

**Optimize & Communicate**

Explain that the list is not exhaustive but covers core pillars: data pipeline, modeling, evaluation, deployment, ethics, and cost. Highlight how you’d prioritize based on business impact (e.g., latency for feed freshness). Emphasize iterative experimentation and monitoring—core to FAANG product ML teams. This structured narrative showcases problem‑solving, communication, and depth, scoring high on the SIGNAL rubric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
