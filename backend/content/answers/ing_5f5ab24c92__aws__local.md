---
qid: ing_5f5ab24c92__aws__local
question: 'Explain: Example: Orchestration-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 484
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:42-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a multi‑service recommendation engine to a fully serverless stack on AWS. The pipeline involved data ingestion, feature engineering, model training, and post‑processing. Each step depended on the previous one, yet we needed to guarantee eventual consistency across services while keeping costs predictable.

**Action – Orchestration‑Based Saga Design**  
I chose **AWS Step Functions** as the saga orchestrator. Every state in the workflow represented an atomic sub‑process (e.g., “Ingest CSV → Load to S3,” “Generate Features → Put into DynamoDB,” “Train SageMaker Endpoint”). For compensations I added *parallel rollback* branches: if training failed, a Lambda function would delete stale feature tables and terminate any running endpoints.  
- **AWS services used**: Step Functions (state machine), Lambda (micro‑tasks & rollbacks), S3/SQS for buffering, DynamoDB for idempotent state, SageMaker for training, CloudWatch Events for monitoring.  
- **Scalability**: Each task runs in its own container; Step Functions automatically retries and scales horizontally.  
- **Availability**: All services are region‑replicated; the orchestrator holds no mutable state, so failure of a sub‑process does not bring down the entire saga.  
- **Cost**: I leveraged Lambda’s pay‑per‑invoke pricing and reserved capacity for SageMaker training, reducing spend by 28 % compared to a monolithic batch job.

**Result**  
The new pipeline cut end‑to‑end latency from 3 hrs to 45 min and reduced operational incidents by **75 %**. The saga pattern also enabled us to roll back partial updates instantly, preventing stale model data from leaking into production—an essential requirement for customer trust.  

---

*Leadership Principles highlighted*: **Ownership** (I took end‑to‑end responsibility), **Dive Deep** (selected services based on cost/latency trade‑offs), and **Deliver Results** (measurable performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
