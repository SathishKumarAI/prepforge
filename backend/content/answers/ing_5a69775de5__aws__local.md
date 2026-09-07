---
qid: ing_5a69775de5__aws__local
question: 'Explain: 4.7 Monitoring, Alerting, and Runbooks — Single Point of Failure
  (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 383
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:07-05:00'
sources: []
---

**Situation / Task**  
While redesigning an AI‑inference pipeline for a real‑time recommendation engine (3 M requests/day), I discovered that the monitoring stack was a **single point of failure**: a single CloudWatch alarm processor and a single SNS topic. Any outage meant loss of alerts, delayed incident response, and 30 % more MTTR.

**Action**  
1. **Decoupled alerting** – moved from a monolithic Lambda to an EventBridge rule that fan‑out alarms to multiple destinations (SNS, SQS, Kinesis).  
2. **Distributed runbooks** – stored idempotent runbook scripts in S3 and invoked them via Step Functions orchestrated by CloudWatch Events, ensuring retry on failure.  
3. **High‑availability dashboards** – deployed Grafana on an Auto Scaling Group behind a Global Accelerator; data sourced from Prometheus on ECS Fargate with cross‑region replication.  
4. **Cost control** – used SQS FIFO queues to batch alerts (reducing SNS cost by 18 %) and leveraged Spot Instances for non‑critical monitoring tasks.

**Result**  
- Eliminated SPOF, reducing MTTR from **12 min to 2 min** (80 % drop).  
- Cut alerting cost by **$1.8k/month** while increasing reliability score in quarterly SLA audits from 92 % to 99.9 %.  

**Learnings**  
Ownership: I owned the entire monitoring stack, not just a component. Dive Deep: traced alarm propagation latency and discovered hidden dependencies. Bar‑raiser focus: demonstrated quantified impact (MTTR & cost) and a clear failure recovery plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
