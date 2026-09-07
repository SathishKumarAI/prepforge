---
qid: ing_c41315890d__aws__local
question: 'Q: How do you keep eval results honest against data contamination?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 587
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:31-05:00'
sources: []
---

**Situation (S)**  
In my last role I led a fraud‑detection model that needed to stay unbiased for quarterly regulatory audits. The risk was *data contamination* – training data leaking into validation or test splits.

**Task (T)**  
Build an end‑to‑end pipeline that guarantees honest evaluation, scales to 10 TB of event logs, and delivers results within a 48‑hour window.

**Action (A)**  

| Step | AWS Service(s) | Why it matters |
|------|----------------|----------------|
| **Data ingestion & lineage** | *AWS Glue*, *S3*, *Lake Formation* | Keeps raw data immutable; catalog tags track provenance. |
| **Deterministic split generation** | *Python + Pandas in SageMaker Processing* | Uses a fixed seed per customer ID → no overlap between splits. |
| **Hash‑based contamination check** | *AWS Lambda* + *DynamoDB* | Computes MD5 of each record; any duplicate across splits flags contamination instantly. |
| **Model training & evaluation** | *SageMaker* (managed notebook + distributed training) | Parallelism keeps 48‑h SLA even on 10 TB. |
| **Audit trail** | *AWS CloudTrail*, *Athena* queries on Glue catalog | Full visibility of every split decision, enabling quick rollback. |

**Result (R)**  
The pipeline reduced contamination incidents from **12% to <0.1%** in production. Accuracy drift dropped by 4 pp over six months, and the audit team approved our model with zero re‑runs—saving $15k/month in manual review effort.

---

### Leadership Principles Anchored

- **Customer Obsession** – ensured regulators (our customers) received trustworthy metrics.  
- **Ownership** – I took responsibility for every data touchpoint and maintained a single source of truth.  

### What the Bar‑raiser Listens For

1. **Depth (Dive Deep)** – I described hash checks, seed determinism, and lineage tracking.  
2. **Quantified Impact** – 12 % → <0.1% contamination; $15k/month saved.  
3. **Learning from Failure** – Initial ad‑hoc splits caused audit failures; the new pipeline fixed that root cause.

This answer demonstrates ownership, technical depth, and a measurable customer‑centric outcome—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
