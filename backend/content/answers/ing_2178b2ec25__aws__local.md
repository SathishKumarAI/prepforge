---
qid: ing_2178b2ec25__aws__local
question: 'Explain: Learner reviews — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:59-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we needed to replace an ad‑hoc Excel model that predicted customer churn with a production‑grade ML pipeline. The goal was to reduce churn by 5 % and cut manual effort by 80 %.  

**Action – Technical Design**  
I scoped the problem as *supervised classification* (churn vs. no churn) and also built a *regression* model to estimate churn probability for each user. Using **Amazon SageMaker**, I trained an XGBoost model on 2 M labeled records, leveraging **S3** for data lake storage and **Glue** for ETL. The pipeline was orchestrated with **Step Functions** to ensure idempotent retries. For real‑time inference, I deployed the model as a SageMaker endpoint behind an **API Gateway**, autoscaling based on CloudWatch metrics (latency < 200 ms).  

I applied **Feature Store** to share features across training and serving, reducing data drift risk. Cost was controlled by using spot instances for training ($0.02/instance‑hour vs. $0.12) and reserving a small number of inference instances.

**Result**  
The model achieved an AUC‑ROC of 0.87, outperforming the legacy rule‑based system (AUC = 0.72). After deployment, churn dropped from 18 % to 13 %, a **5 % absolute reduction**. Manual effort fell by **82 %**, freeing analysts to focus on strategy.  

**Learning & Ownership**  
I took full ownership of the end‑to‑end ML lifecycle, iterating quickly (bias for action) and deeply investigating feature importance (dive deep). The success reinforced my commitment to *Customer Obsession*—the model directly improved user retention—and *Ownership*, as I managed both technical depth and business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
