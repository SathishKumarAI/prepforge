---
qid: ing_7cf616b822__aws__local
question: 'Explain: Stateful Rollbacks (Checkpointing) — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 410
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a server‑less inference pipeline for real‑time fraud detection. A sudden spike in traffic caused several Lambda functions to time out and the downstream DynamoDB writes were lost, jeopardising our SLA of 99.9 % data persistence.

**Action (Dive Deep + Ownership)**  
I architected *stateful rollbacks* using **AWS Step Functions** with a checkpoint‑and‑retry pattern:

1. **Checkpoint** – Each step writes its current state to an encrypted S3 bucket (`checkpoint-<run-id>.json`).  
2. **Retry** – If any Lambda fails, the Step Function automatically re‑invokes the failed task using the last checkpoint.  
3. **Idempotence** – All database writes are wrapped in DynamoDB conditional expressions keyed by a unique transaction ID, preventing duplicate records.

To keep costs low, I leveraged **S3 Intelligent Tiering** and **AWS Lambda Provisioned Concurrency** during peak hours. The system also emits CloudWatch metrics (`CheckpointCount`, `RetryLatency`) that feed into an SNS alert for the incident response team.

**Result (Deliver Results)**  
Within 24 h of deployment:

- SLA improved from **98.7 %** to **99.95 %** on data persistence.  
- The average rollback time dropped by **4×** compared to manual re‑processing.  
- Operational cost increased only **2 %**, thanks to the tiered storage strategy.

**Learning & Bar‑raiser cues**  
I documented failure scenarios, updated runbooks, and held a post‑mortem that highlighted the importance of *Ownership* and *Bias for Action*. The bar‑raiser looked for my deep dive into latency trade‑offs, quantitative impact, and proactive learning from each incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
