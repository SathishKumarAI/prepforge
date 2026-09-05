---
qid: ing_47feb78b5d__star__local
question: How do you respect access controls for client data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 319
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:28-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were building an AI‑driven credit scoring model that processed sensitive customer financial histories. The regulatory environment required strict GDPR and PCI compliance, and our internal audit flagged potential over‑exposure of data in the training pipeline.

**Task:** I had to redesign the data access layer so that only authorized ML engineers could view raw client records, while anonymized datasets were used for model training and validation. This needed to be seamless for developers but enforce zero‑trust principles.

**Action:** I implemented role‑based access control (RBAC) in our data lake using Apache Ranger, coupled with dynamic masking via AWS Glue. Every dataset was tagged with a “client‑private” label, and only users with the “ML‑Engineer” group could bypass the mask. For training jobs on SageMaker, I used IAM roles that allowed read access to the masked S3 buckets but denied any direct connection to the raw tables. I also added automated audit logs in CloudTrail to trigger alerts if an unauthorized role attempted access.

**Result:** Within two weeks we passed a full penetration test with no data leakage findings, and our model accuracy improved by 3% because engineers could iterate faster on clean data. I learned that combining policy‑driven controls with real‑time monitoring turns compliance into a development advantage rather than a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
