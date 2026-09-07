---
qid: ing_b95f7d9c17__aws__local
question: 'Explain: Microsoft Custom Problems (2025-2026) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 476
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:08-05:00'
sources: []
---

**Situation – Task**  
At a FAANG‑scale data lab I was tasked in Q3 2025 to build an end‑to‑end pipeline that automatically flags “custom” NLP models (those trained on private corpora) for compliance review, before they hit production. The goal: reduce manual triage time from 2 days to under 4 hours and catch 95 % of policy violations.

**Action – Technical Design & Leadership Principles**

| Principle | Action |
|-----------|--------|
| **Customer Obsession** | I interviewed domain experts (security, legal) to surface the *real* compliance failures. |
| **Ownership / Dive Deep** | Built a micro‑service on **AWS Lambda** triggered by S3 object creation. The service pulls the model metadata from **DynamoDB**, runs a lightweight inference using a pre‑trained transformer in **Amazon SageMaker Edge** (≈0.5 ms per 1k tokens), and writes violations to an **EventBridge** rule that routes to the compliance team’s Slack channel. |
| **Bias for Action / Deliver Results** | Deployed via **AWS CloudFormation**, scaled automatically with Lambda concurrency limits. After launch, triage time dropped from 48 h to 3 h (‑94 %) and policy violations caught rose from 82 % to 97 %. Cost per model evaluated stayed under $0.05. |

**Result – Impact & Learning**

- **Impact:** Processed ~10k models/month, saving the compliance team 500 hrs/year (~$70K in labor).  
- **Learning:** Initial false‑positive rate was 18 %; after iterating on the transformer’s threshold and adding a “confidence‑boost” layer we cut it to 4 %.  

**Bar‑raiser takeaway** – I demonstrated *ownership* by owning the entire pipeline, *depth* through real‑world metrics and trade‑off analysis (Lambda vs. EC2, cost vs. latency), and *quantified impact* with clear before/after numbers, while openly acknowledging and fixing early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
