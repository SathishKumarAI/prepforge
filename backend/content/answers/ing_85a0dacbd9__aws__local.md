---
qid: ing_85a0dacbd9__aws__local
question: 'Explain: Automating Kerberos Keytab Rotation at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 373
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:56-05:00'
sources: []
---

**Situation & Task**  
At Uber I led the “Keytab Refresh” project to eliminate a 4‑hour manual window that left our auth servers exposed after a key compromise. The goal was to automate Kerberos keytab rotation without impacting service uptime.

**Action**  
I owned the end‑to‑end pipeline:  

1. **Design** – A Lambda function (Python) triggered by CloudWatch Events every 12 hrs, pulling the latest keytab from Secrets Manager and storing it in an encrypted S3 bucket.  
2. **Deployment** – An EC2 Auto Scaling group running a lightweight `keytab‑rotator` container pulled the new keytab via the SSM Parameter Store API. The containers were registered with ECS Service Discovery so each auth node could fetch the fresh tab on startup.  
3. **Observability** – Integrated CloudWatch Alarms (95 % success rate threshold) and a Step Functions state machine to rollback if any node failed to update.

**Result**  
- Reduced rotation downtime from 4 hrs to < 30 s, achieving a 99.9 % availability SLA for auth services.  
- Cut operational cost by $1,200/month (no manual intervention).  
- Earned the “Customer Obsession” and “Ownership” badges at my quarterly review.

**Learnings**  
I discovered that IAM roles with least‑privilege were critical; granting broad Secrets Manager access caused a false‑positive audit. After tightening policies, we passed a security scan with zero findings. This experience reinforced the *Dive Deep* principle: always validate assumptions against real metrics before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
