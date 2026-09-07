---
qid: ing_32e2d36d43__aws__local
question: 'Explain: 1.1.3. Lasso — 1.1. Linear Models \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 510
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:20-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science sprint for an e‑commerce recommendation engine. Our baseline linear regression overfit the sparse click‑through dataset, hurting production latency and accuracy.

**Action**  
I chose **Lasso (Least Absolute Shrinkage and Selection Operator)** from `sklearn.linear_model`. I clarified requirements: *predict click probability*, *support feature sparsity*, *scale to millions of users*.  
1. **Model design** – `Lasso(alpha=0.1, max_iter=10000)` with a L2 penalty for numerical stability.  
2. **Feature pipeline** – `StandardScaler` + `PolynomialFeatures(degree=2, include_bias=False)`.  
3. **AWS services** – train on **Amazon SageMaker Processing** (cost‑effective, autoscaling), deploy via **SageMaker Endpoint** with an inference container; use **Amazon S3** for data, **CloudWatch** for latency metrics.  
4. **Scalability / Availability** – the endpoint runs behind a **Elastic Load Balancer** and scales horizontally; we set `MinCapacity=1`, `MaxCapacity=10` to cap cost.  
5. **Cost trade‑off** – Lasso’s sparsity reduces model size (≈30 % smaller) → lower inference memory, enabling cheaper GPU instances.

**Result**  
Model MAE dropped from 0.112 to **0.078** (28 % improvement), and inference latency fell from 45 ms to **18 ms** per request. Cost per inference reduced by 22 %.  

**Learnings & Bar‑raiser cues**  
- *Ownership*: I drove the end‑to‑end pipeline, not just the algorithm.  
- *Dive Deep*: I tuned `alpha` via cross‑validation and inspected non‑zero coefficients to validate domain relevance.  
- *Quantified Impact*: 28 % error reduction directly translates to higher CTR and revenue.  
- *Learning from Failure*: Initial over‑regularization caused underfitting; I iterated quickly, demonstrating a bias for action.  

**Leadership Principles invoked**: **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
