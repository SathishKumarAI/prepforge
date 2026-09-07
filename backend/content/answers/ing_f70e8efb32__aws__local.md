---
qid: ing_f70e8efb32__aws__local
question: 'Explain: Data Correctness — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 434
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:35:26-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* My team built a recommendation engine for an e‑commerce platform that handled 10 M requests/day. A spike in model drift caused product scores to become inconsistent, hurting conversion rates.

*Task:* Ensure *data correctness*—the reliability of training and inference pipelines—so the system always reflects true customer preferences.

*Action:*  
1. **Audit & Validation** – Added an *ETL validation layer* (AWS Glue + AWS Lambda) that runs nightly checks against reference datasets, flagging anomalies in feature distributions or target labels.  
2. **Schema Governance** – Deployed *AWS Lake Formation* to enforce schemas and access controls; any schema change must pass automated tests before promotion to production.  
3. **Observability & Alerting** – Instrumented the inference API with *Amazon CloudWatch Metrics* (latency, error rate) and *CloudWatch Logs Insights* queries that surface data quality drift in real time. When deviations exceed 2 σ, an SNS alert triggers a rollback to the last validated model checkpoint stored in **S3 Glacier Deep Archive** for cost‑effective archival.  
4. **CI/CD Pipeline** – Integrated unit tests for feature extraction and end‑to‑end integration tests into CodePipeline; any failure blocks deployment.

*Result:* After implementation, data‑quality incidents dropped from 15 % to <0.5 %, boosting conversion by 3.2 % (≈$1.8M incremental revenue/month). The system now scales horizontally via **Amazon SageMaker Endpoint** autoscaling and remains highly available with multi‑AZ deployment, keeping cost below $500k/year.

*Learnings:* Ownership means continuously monitoring the data life‑cycle, not just model performance. Diving deep into logs revealed that a third‑party API update was the root cause of drift—highlighting the need for external dependency contracts. This iterative approach keeps our ML system reliable and customer‑centric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
