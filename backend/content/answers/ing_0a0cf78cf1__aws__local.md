---
qid: ing_0a0cf78cf1__aws__local
question: 'Explain: Related products and services — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 461
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:45-05:00'
sources: []
---

**Situation –** In my last role I was tasked to build a fault‑tolerant recommendation engine for an e‑commerce platform that served 2 M daily users. The business could not tolerate any downtime, so we needed a robust Disaster Recovery (DR) strategy.

**Task –** Design a DR plan that guarantees <30 s recovery time and zero data loss while keeping cost under $5k/month.

**Action –**  
1. **Data Layer:** Replicated the nightly Parquet‑based training dataset from us-east-1 to us-west-2 using **AWS DataSync** (≈$0.15/GB) and kept an up‑to‑date copy in S3 Glacier Deep Archive for compliance.  
2. **Model Serving:** Deployed SageMaker endpoints behind a global **Application Load Balancer** with cross‑region health checks. When us-east-1 failed, traffic automatically routed to the us-west-2 replica within 12 s.  
3. **Orchestration:** Used **Step Functions** to trigger an automated rollback and re‑train pipeline if latency >200 ms or error rate >5%.  
4. **Monitoring & Alerting:** CloudWatch Alarms + SNS sent instant notifications; a Lambda auto‑scales the endpoint from 1 to 10 instances within 30 s.

**Result –** During a simulated outage we achieved 99.9% uptime and recovered in 18 s, saving the company $120k/year in avoided churn. The plan reduced DR costs by 35% compared with a full synchronous replica strategy.

> **Leadership Principles:** *Ownership* (I drove end‑to‑end delivery), *Dive Deep* (analyzed latency metrics to set thresholds), and *Bias for Action* (implemented automated rollback).  
> **Bar‑raiser cues:** Quantified impact, clear trade‑offs between cost vs. recovery time, and post‑mortem learning that led to a 10% performance boost in subsequent releases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
