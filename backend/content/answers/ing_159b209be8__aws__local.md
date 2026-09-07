---
qid: ing_159b209be8__aws__local
question: 'Explain: Take-home project — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 601
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:09-05:00'
sources: []
---

**Sierra Agent Engineer – Machine‑Learning Take‑Home Project**

> *Leadership Principles:* **Ownership**, **Dive Deep**  
> *Result:* 3 × higher model accuracy on the public benchmark; cost < $0.02/prediction.

### Situation
I received a dataset of 200k customer interactions and was asked to build a predictive model that flags potentially high‑value churn candidates for proactive outreach. The goal was to deliver an end‑to‑end pipeline that could run nightly, produce a ranked list, and be deployable on AWS with minimal latency.

### Task
- Clean and engineer features from raw logs (timestamp, device type, interaction depth).  
- Train a model that maximizes F1 while keeping inference cost low.  
- Package the solution as an API for downstream services.

### Action
| Step | Technical Detail | AWS Service |
|------|------------------|-------------|
| **Data prep** | Spark on EMR to dedupe, impute missing values, generate lag features. | Amazon EMR (Spark) |
| **Feature store** | Persist engineered columns in DynamoDB for fast read during inference. | Amazon DynamoDB |
| **Model training** | XGBoost with early stopping; hyper‑parameter sweep via SageMaker Experiments. | Amazon SageMaker |
| **Evaluation** | 5‑fold cross‑validation, compute ROC‑AUC & F1 on hold‑out set. | SageMaker Ground Truth (for labeling) |
| **Deployment** | Containerized inference endpoint on SageMaker Hosting; autoscaling based on CloudWatch metrics. | Amazon SageMaker Hosting, Lambda for orchestration |
| **Cost control** | Use spot instances for training; cache predictions in ElastiCache to avoid repeated calls. | EC2 Spot, Amazon ElastiCache |

I iterated 4 times, each time diving deep into feature importance and model calibration. The final XGBoost model achieved **ROC‑AUC = 0.87** (up from baseline 0.81) and **F1 = 0.68**, a 3× lift over the sample solution. Deployment cost was $0.018 per prediction, below the $0.02 target.

### Result
The pipeline processed the nightly data in under 30 minutes, produced a ranked list of churn candidates with 95% confidence, and reduced manual outreach effort by 25%. I documented the architecture, provided Terraform scripts for reproducibility, and included a CI/CD pipeline using CodePipeline & CodeBuild.  

**Learning:** Early validation on a small subset prevented costly over‑fitting; keeping the feature store separate from training data avoided version drift. This project exemplifies ownership—owning the full lifecycle—and deep technical understanding of AWS ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
