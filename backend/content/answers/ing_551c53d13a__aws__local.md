---
qid: ing_551c53d13a__aws__local
question: 'Explain: Funding better evaluations of AI’s impact on wellbeing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:41-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional squad at a health‑tech startup that wanted to prove AI could *actually* improve patient wellbeing. The goal was to secure $2 M in Series B funding by showing a statistically significant lift in clinical outcomes.

**Action – Design & Execution**  
- **Requirements**: Real‑time symptom triage, personalized medication reminders, and a feedback loop for clinicians.  
- **Architecture**:  
  - *Data ingestion*: Amazon Kinesis Data Streams → Glue ETL → S3 (raw) and Redshift Spectrum (query).  
  - *Model training*: SageMaker Pipelines with AutoML to iterate on XGBoost models; model registry in SageMaker Model Store.  
  - *Inference*: SageMaker Endpoint behind an Application Load Balancer, auto‑scaling based on CloudWatch metrics.  
  - *Observability*: Amazon CloudWatch + OpenTelemetry for latency and error rates; SageMaker Debugger for feature importance drift.  
  - *Compliance & Cost*: Encrypted data at rest (SSE‑KMS), IAM least‑privilege roles, spot instances for training → 35 % cost savings.  

**Result**  
- Achieved a **15 % reduction in ER visits** and a **12 % increase in medication adherence** over a 6‑month pilot (p < 0.01).  
- Demonstrated **99.95 % uptime** for the inference service, meeting HIPAA SLA requirements.  
- Secured $2.1 M Series B, surpassing the target and enabling a full‑scale rollout.

**Reflection & Learning**  
I owned every stage—from data quality checks to stakeholder demos—ensuring transparency and rapid iteration (Bias for Action). The pilot revealed that feature drift required a retraining cadence of 3 weeks; we automated this via SageMaker Pipelines, a lesson that now informs our continuous‑learning strategy.  

*Leadership Principles Highlighted*: **Ownership**, **Dive Deep**, **Customer Obsession**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
