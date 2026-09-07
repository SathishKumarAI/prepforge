---
qid: ing_53db83223a__aws__local
question: 'Explain: F9: Tenant cross-contamination via shared eval infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 388
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:20-05:00'
sources: []
---

**Situation / Task**  
While designing a multi‑tenant AI training platform for our marketplace, I discovered that evaluation jobs from different tenants were running on the same EC2 spot cluster. A faulty model could leak predictions or data into another tenant’s environment (“cross‑contamination”).  

**Action**  
I owned the problem (Ownership) and dug into logs to quantify leakage incidents: 3 out of 120 tenants reported stale metrics, costing an average of **$1.8k/month per tenant**. I redesigned the infra:

| Component | AWS Service | Reasoning |
|-----------|-------------|----------|
| Job isolation | ECS Fargate + task roles | No shared host, IAM limits data access |
| Data segregation | S3 Object Lock & KMS keys per tenant | Prevents accidental read/write |
| Runtime sandbox | Nitro Enclaves for eval containers | Guarantees memory isolation |
| Monitoring | CloudWatch metrics + GuardDuty | Detect anomalous cross‑tenant traffic |

I introduced a **“Tenant‑Aware Scheduler”** that tags each job with the tenant ID, enforces per‑tenant quotas, and auto‑scales based on demand. Cost dropped from $12k/month to $9.3k (26% savings) while latency stayed < 200 ms.

**Result**  
Zero cross‑contamination incidents in the first 6 months; tenant churn fell by **14%**, and we achieved a 30% faster time‑to‑market for new models.  

*What a bar‑raiser listens for*: clear ownership, deep dive into root causes, quantified impact (cost & churn), and lessons learned (continuous monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
