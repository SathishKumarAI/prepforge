---
qid: ing_e8f206f473__aws__local
question: 'Explain: Tracing ​ — MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 431
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:49-05:00'
sources: []
---

**Situation & Task**  
When my team launched a generative‑AI product on Databricks (MLflow 3) at the edge of AWS, we saw model drift in real‑time inference—accuracy dropped from 92% to 78% within 48 hrs after deployment. My goal was to build an end‑to‑end tracing pipeline that surfaced every training and inference artifact, so we could pinpoint failures and rollback automatically.

**Action**  
I owned the solution:  

1. **Capture & Store** – Integrated MLflow’s `log_metric` and `log_artifact` hooks into our Spark jobs; each run writes a unique trace ID to an encrypted S3 bucket (`mlflow-traces/`).  
2. **Observability Layer** – Created a lightweight Lambda that polls the bucket, ingests metadata into DynamoDB (partition key: model‑version), and pushes alerts to SNS when drift thresholds are crossed.  
3. **Auto‑Rollback** – Added a Step Functions state machine that, on alert, triggers a SageMaker `CreateModel` with the last good checkpoint from S3 and updates the ALB target group via API Gateway.

I also drafted a “post‑mortem” playbook for our Ops team, ensuring we captured lessons in Confluence.  

**Result**  
Within two weeks, drift detection latency dropped from 48 hrs to <2 hrs, and rollback time fell from 3 days to under 30 min—saving an estimated $12k/month in inference costs. The tracing system now supports 1M+ requests/day with <0.5 % added latency.

**Learning & Leadership Principles**  
*Customer Obsession*: we reduced user‑visible errors by 85%.  
*Ownership & Dive Deep*: I traced every artifact, quantified impact, and iterated on the design—turning a reactive problem into a proactive system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
