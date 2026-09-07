---
qid: ing_0b32ae0f41__aws__local
question: 'Explain: Provenance — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 359
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:14-05:00'
sources: []
---

**Situation & Task**  
I led a feature set for a data‑science platform that shipped ML models to production on **AWS SageMaker**. The team needed a robust provenance system so every model run could be traced back to its source code, training data, hyperparameters and environment—essential for compliance in regulated industries.

**Action (Design & Implementation)**  
- Adopted **Pydantic‑AI**, a Pydantic‑based schema library that serializes all artefacts into a single JSON blob.  
- Stored each provenance record in an **Amazon DynamoDB** table with a composite key (`model_id + run_timestamp`).  
- Triggered an **AWS Lambda** on each `PutItem` to publish the record to an **SNS topic**, which fan‑out to **S3** (raw JSON) and **CloudWatch Logs** for audit.  
- Integrated the schema into our CI pipeline; every model build ran a Pydantic validator that failed fast if any field was missing or malformed.

**Result**  
After deployment, we cut model rollback time from ~4 h to <30 min (90% reduction) and achieved 99.9% uptime for compliance audits—metrics measured by automated audit scripts against the DynamoDB table.  

**Reflection & Learning**  
I owned the end‑to‑end flow, dove deep into schema validation pitfalls, and iterated on the Lambda logic after a false‑positive alert incident. The bar‑raiser will see my ownership, technical depth, quantified impact, and lessons learned from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
