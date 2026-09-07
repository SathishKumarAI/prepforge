---
qid: ing_797a36e07f__aws__local
question: 'Explain: 1.1.3.2. Setting regularization parameter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:42-05:00'
sources: []
---

**Situation & Task**  
While building a fraud‑detection model for our payment gateway, we hit overfitting: the validation loss stayed high while training loss dropped steeply. My goal was to tune the regularization hyper‑parameter (λ) so that the model generalized without sacrificing accuracy.

**Action**  
1. **Dive Deep into Data & Metrics** – I plotted learning curves and inspected feature importances; I noticed a few highly correlated features driving variance.  
2. **Design Experiment** – Adopted a grid search over λ ∈ {0.01, 0.05, 0.1, 0.5}. Each run was executed on an AWS SageMaker training job (managed Spot instances to cut cost by ~30 %).  
3. **Automate & Scale** – Wrote a Lambda function that triggered the jobs, stored results in DynamoDB, and updated a CloudWatch dashboard for real‑time monitoring.  
4. **Select λ=0.1** – This value reduced validation loss from 0.48 to 0.32 (34 % improvement) while keeping training accuracy above 92 %. The model’s ROC AUC jumped from 0.81 to 0.87, translating into $120k/month savings on false positives.

**Result**  
Post‑deployment, the fraud detection system achieved a 15 % reduction in missed fraud cases and cut operational costs by 12 % annually. I documented the process in Confluence; the team now uses this pipeline as a standard for future model tuning.

---

> **Leadership Principles Highlighted:**  
> • *Customer Obsession* – improved fraud detection directly protects customers.  
> • *Ownership & Dive Deep* – I took full responsibility, analyzed data, and engineered an automated, cost‑efficient solution.  

**Bar‑raiser takeaways**: clear ownership, quantitative impact (ROC AUC +0.06), deep technical reasoning (SageMaker, Spot, Lambda, DynamoDB), and a documented learning loop for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
