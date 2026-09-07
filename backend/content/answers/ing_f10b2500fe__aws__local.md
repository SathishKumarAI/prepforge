---
qid: ing_f10b2500fe__aws__local
question: 'Explain: Problem — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 463
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a recommendation engine that served 4 M daily users. Our model drifted after each campaign launch because we had no audit trail of feature changes. The goal was to build an *event‑sourced* data layer that records every raw event, transformation, and training run so we could roll back or reproduce any model version.

**Action & Design**  
I chose **Amazon Kinesis Data Streams** for ingesting click, purchase, and context events at 200 k/s. Each record was stored in an immutable **S3 bucket** (object‑level versioning) and simultaneously written to a **DynamoDB table** that served as the event log. Lambda functions parsed records, applied deterministic transformations, and emitted new “derived” events—this kept all feature engineering steps auditable. For training, I used **Amazon SageMaker Pipelines**, which pulled the latest event stream slice from S3, trained a model, and logged the run metadata (hyper‑params, metrics) back to DynamoDB. This architecture gave us *100 % lineage* and 99.9 % durability.

**Result & Impact**  
After deployment we cut model retraining time from 8 h to 30 min and reduced A/B test roll‑back latency by 75 %. The immutable event store also enabled a compliance audit that saved us $120k in potential fines.  

**Leadership Principles Highlighted**  
- **Customer Obsession / Deliver Results**: Faster, reliable recommendations increased CTR from 3.2% to 4.7%.  
- **Ownership / Dive Deep**: I owned the end‑to‑end pipeline and debugged a subtle schema drift that had been hiding for months.

*Bar‑raiser takeaway*: Demonstrated ownership by designing a fully auditable system, quantified impact with clear metrics, and learned from past failures (schema drift) to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
