---
qid: ing_f6125321fa__aws__local
question: 'Explain: AI and ML training — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 420
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:17-05:00'
sources: []
---

**Situation (S)** – While leading an ML‑ops team at a fintech startup, we had to migrate our monolithic data lake into a production‑grade *data architecture* that could support nightly model retraining without disrupting live services.

**Task (T)** – Design a scalable pipeline that ingests raw logs, cleanses them, stores feature tables, and feeds them to SageMaker training jobs, all while meeting SLA of 4 h end‑to‑end latency.

**Action (A)** –  
- **Customer Obsession + Ownership**: I mapped every data source to the *customer journey* so we only kept features that improved model explainability.  
- **Dive Deep & Bias for Action**: Built an event‑driven architecture using EventBridge → Lambda → Glue ETL, storing raw data in S3 (data lake) and curated feature tables in DynamoDB for low‑latency lookups.  
- **Invent & Simplify**: Employed SageMaker Feature Store to centralize feature management, eliminating duplicate transformations.  
- **Deliver Results**: Added automated versioning with AWS Step Functions; each training run writes metrics to CloudWatch and triggers a Lambda that updates the model registry in S3.  

**Result (R)** – Reduced retraining time from 12 h to 4 h, cut storage costs by 30 % using S3 Intelligent‑Tiering, and increased model accuracy by 7 pp due to consistent feature lineage. Post‑deployment monitoring revealed a 99.9 % availability of the training pipeline.

**Bar‑raiser takeaway** – Showed ownership by redefining data flow, depth through concrete AWS service choices, quantified impact (time & cost savings), and learned from an initial failure where ad‑hoc Glue jobs caused stale features—resolved by centralizing with Feature Store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
