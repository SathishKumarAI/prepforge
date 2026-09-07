---
qid: ing_e616dea226__aws__local
question: 'Explain: Architecture — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 464
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:15-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built an *AI‑driven Computer Use Agent* that automatically schedules and runs computational jobs on a shared cluster. The goal was to reduce manual queue management by 60 % while keeping latency < 2 s for high‑priority workloads.

**Action (Architecture)**  
1. **Event ingestion** – CloudWatch Events → SNS topic → SQS queue (decouples producers).  
2. **Orchestration** – Step Functions with Lambda “Job‑Fetcher” (Python, Boto3) pulls queued requests, validates resource tags, and writes a *Task* to DynamoDB (primary key: `jobId`).  
3. **Compute layer** – Fargate tasks run the AI inference on ECR containers; Spot Instances are auto‑scaled via EC2 Auto Scaling Groups for cost control.  
4. **State & monitoring** – CloudWatch Logs + X-Ray trace each job; DynamoDB TTL removes stale entries after 48 h.  
5. **Security** – IAM roles scoped to least privilege, encryption at rest (KMS) and in‑transit (TLS).

**Result**  
- **Throughput:** 1,200 jobs/day vs. 800 pre‑system.  
- **Cost savings:** 35 % on compute by leveraging Spot Instances.  
- **Latency:** 95 % of jobs finished < 2 s; SLA met consistently.

**Leadership Principles**  
*Customer Obsession* – we measured user wait times and iterated until the target latency was achieved.  
*Ownership* – I owned end‑to‑end monitoring, troubleshooting, and cost optimization.  

**Bar‑raiser cues**  
- Demonstrated *dive deep* by quantifying queue latency per step.  
- Showed *bias for action* with rapid deployment of Step Functions & Lambda.  
- Learned from a failed Spot Instance outage: added a fallback on Reserved Instances, reducing downtime to < 1 min.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
