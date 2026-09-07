---
qid: ing_3fddd2d49e__aws__local
question: 'Explain: Uh, so you''ll add acc-- contacts explicitly'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 382
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous role I led a recommendation engine for an e‑commerce platform that served 3 M active users daily. The model’s recall dropped from **92 % to 78 %** after a recent product catalog update, causing a 4 % lift in cart abandonment.

**Action (Dive Deep + Bias for Action)**  
I first audited the training pipeline: data ingestion, feature engineering, and model evaluation. I discovered that “accessibility” (acc) contacts—user‑generated tags like *“eco‑friendly”* or *“budget”*—were being filtered out by an outdated regex during preprocessing.  

1. **Re‑engineered** the ingestion step in AWS Glue to preserve all contact tokens and added a deterministic hash for de‑duplication.  
2. Updated the SageMaker training script to treat contacts as categorical features with target encoding, enabling the model to learn their true impact.  
3. Deployed the new pipeline on **AWS Step Functions** orchestrating Glue → Lambda (data validation) → SageMaker Training/Inference endpoints.

**Result (Deliver Results)**  
Within two weeks post‑deployment, recall rose back to **91 %**, and we observed a 1.8 % lift in conversion rate—equivalent to an additional $2.4 M revenue per month. Cost was contained by using Spot Instances for training and scaling inference with Auto Scaling on the SageMaker endpoint.

**Learning & Bar‑raiser Insight**  
I documented the failure point, shared it in a post‑mortem, and instituted automated regex validation tests in CI/CD to prevent regressions—showing true ownership and a culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
