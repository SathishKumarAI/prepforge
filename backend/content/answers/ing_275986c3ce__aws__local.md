---
qid: ing_275986c3ce__aws__local
question: 'Explain: Model quality metrics — What is concept drift in ML, and how to
  detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 401
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:54-05:00'
sources: []
---

**Situation & Task**  
While leading the fraud‑prevention team at a fintech startup, we noticed our transaction‑risk model’s precision drop from **92 % to 78 %** over three weeks (a classic concept drift). My goal was to detect this drift early and restore performance without redeploying the entire pipeline.

**Action**  
I implemented a *model monitoring* layer using **Amazon CloudWatch**, **AWS Lambda**, and **S3** for raw prediction logs. Every hour, a Lambda function calculated the *Mean Absolute Deviation (MAD)* between predicted risk scores and actual outcomes in a sliding window. If MAD exceeded 0.12 (threshold set after A/B testing), an SNS alert triggered a re‑training workflow on **Amazon SageMaker Ground Truth** data.

The re‑train job was orchestrated with **AWS Step Functions**, leveraging **SageMaker Training** with a *Hyperparameter Tuning* job that automatically adjusted the learning rate. I also added a *shadow mode* deployment (via **SageMaker Multi-Model Endpoint**) to compare new predictions against live traffic before full rollout.

**Result**  
Within 48 h of detecting drift, we deployed an updated model that restored precision to **91 %** and reduced false positives by **27 %**, saving ~$120K/month in transaction costs. The monitoring pipeline cost less than $0.50 per hour and added no latency to the inference path.

---

### Leadership Principles Highlighted
- **Ownership & Bias for Action** – Took full responsibility, built an end‑to‑end drift detection system.
- **Dive Deep** – Quantified drift with MAD, tuned thresholds through data experiments.
- **Deliver Results** – Achieved measurable performance recovery and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
