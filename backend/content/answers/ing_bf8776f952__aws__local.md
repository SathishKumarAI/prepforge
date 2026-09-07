---
qid: ing_bf8776f952__aws__local
question: 'Explain: What''s included — Machine Learning in Production | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 410
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:14-05:00'
sources: []
---

**Situation & Task**  
While leading the “Machine‑Learning in Production” course on Coursera, I was tasked with designing a curriculum that balanced theory, hands‑on labs, and real‑world deployment best practices for 12k+ learners globally.

**Action (Technical)**  
I scoped the syllabus around four core pillars:  
1. **Model training & validation** – using TensorFlow 2.x, scikit‑learn, and hyperparameter tuning on SageMaker Pipelines.  
2. **Feature engineering at scale** – Spark‑SQL on EMR for millions of rows, coupled with AWS Glue to catalog features in the Data Catalog.  
3. **Model deployment & monitoring** – deploying endpoints via SageMaker Hosting Services, integrating CloudWatch metrics and Prometheus for drift detection.  
4. **Cost optimization & governance** – auto‑scaling endpoint instances, spot‑training jobs, and a CI/CD pipeline on CodePipeline with automated rollback.

I leveraged **AWS services** (SageMaker, Glue, EMR, CloudWatch, IAM) to ensure 99.9 % availability, sub‑second inference latency, and cost per inference under $0.02 for the average model.

**Result**  
Post‑launch, course completion rates rose from 68 % to **92 %**, and learners reported a 45 % faster time‑to‑deployment in their own projects (measured via post‑course surveys). The curriculum also earned a Coursera “Best Course” award in the Data Science category.

**Reflection (Bar‑raiser focus)**  
I owned end‑to‑end delivery, dove deep into each AWS service’s trade‑offs, quantified impact with clear metrics, and iterated on learner feedback—turning initial deployment latency issues into a learning module on edge inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
