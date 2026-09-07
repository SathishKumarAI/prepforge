---
qid: ing_c35c599e3e__aws__local
question: 'Explain: Mean Time To Recovery (MTTR) — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 458
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:43-05:00'
sources: []
---

**Situation – Task**  
While leading the ML model‑deployment pipeline at a fintech startup, our nightly retraining job failed 4 % of the time due to transient EC2 instance crashes, causing a **Mean Time To Recovery (MTTR) of ~12 h**, which delayed critical risk‑model updates and impacted downstream fraud‑detection alerts.

**Action – Ownership & Dive Deep**  
1. Instrumented every step with **Amazon CloudWatch Logs + EventBridge** to capture failure context.  
2. Implemented a self‑healing architecture:  
   * **Auto Scaling Groups (ASG)** with health‑checks and **Elastic Load Balancer (ELB)** to route traffic away from failing instances.  
   * Wrapped the training job in an **AWS Step Functions state machine** that retries failed tasks up to 3 times, backing off exponentially.  
   * Persisted intermediate artefacts in **Amazon S3**, enabling a quick “cold start” if all nodes fail.  
3. Added **Amazon RDS Read Replicas** for the feature store so read traffic stayed online while the primary node was down.

**Result – Deliver Results**  
- MTTR dropped from ~12 h to **<15 min** (a 92 % reduction).  
- Daily model updates resumed on schedule, cutting fraud‑losses by **$1.8M/quarter**.  
- Cost impact: ASG and Step Functions added <$200/month, offset by avoided manual ops hours (~30 hrs/week).

**Learning**  
I documented the failure patterns in a post‑mortem; this drove the creation of an automated “Health‑Check Dashboard” that now alerts on anomalous MTTR spikes before they affect production. This demonstrates *Customer Obsession* (protecting user trust) and *Bias for Action* (quick, measurable fix).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
