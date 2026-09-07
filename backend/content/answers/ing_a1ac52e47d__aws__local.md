---
qid: ing_a1ac52e47d__aws__local
question: 'Explain: Underfitting and overfitting machine learning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 558
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:44-05:00'
sources: []
---

**Situation – Problem**  
While building a fraud‑detection model for a payment platform, I noticed the validation accuracy stayed around **68 %** while training hit **96 %**—classic overfit. Conversely, an earlier attempt on a churn dataset produced both training and validation scores near **60 %**, indicating underfit.

**Task – What I had to achieve**  
Improve model generalization so that production predictions stay within ±5 % of real‑world performance, while keeping inference latency below 10 ms per transaction.

**Action – Technical & AWS Design**  

| Issue | Fix | AWS Services |
|-------|-----|--------------|
| Overfit | Add L2 regularization (α=0.01), increase dropout to 0.3, and use early stopping on validation loss. | SageMaker training job, SageMaker Model Monitor for drift |
| Underfit | Expand feature set: add interaction terms via FeatureStore, augment data with synthetic samples using SMOTE, and switch to a deeper XGBoost tree (max_depth = 10). | SageMaker Feature Store, SageMaker Processing Job (SMOTE) |
| Scalability | Deploy model as a Lambda@Edge function behind API Gateway; use **SageMaker Neo** to compile for edge inference. | Lambda, API Gateway, CloudWatch |
| Cost & Availability | Spot Instances for training, autoscaling on demand for inference; set up multi‑AZ endpoint in SageMaker. | EC2 Spot, SageMaker Endpoint |

I also implemented a **CI/CD pipeline with CodePipeline** that runs unit tests and model quality checks before promotion.

**Result – Quantified Impact**  
- Overfitting mitigation raised production AUC from **0.72 → 0.84** (≈ 17 % lift).  
- Underfit solution increased churn prediction precision to **78 %** (up 12 % over baseline).  
- Inference latency dropped to **7 ms**, meeting SLA, while inference cost fell by **$1.2M annually** due to spot usage and Neo optimization.

**Reflection – Learning & Ownership**  
I documented the failure modes in a post‑mortem, shared insights with data science peers, and automated regular drift checks—demonstrating *Ownership* and *Dive Deep*. This experience reinforced that balancing bias–variance trade‑offs is as much an engineering discipline as it is statistical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
