---
qid: ing_adad03b82b__aws__local
question: 'Explain: Redundant Architectures — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 522
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:10-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science team that had to launch a real‑time recommendation engine for a global e‑commerce site. The product promised < 1 % downtime and > 99.9 % latency SLAs across 50M daily users, so the ML inference layer needed *architectural redundancy*.

**Action – Design & AWS Services**  
I built a **multi‑AZ, multi‑region** deployment on SageMaker Endpoint + Lambda edge. Each region hosted an autoscaling endpoint backed by **ECR containers**; we used **Route 53 latency routing** to send traffic to the nearest healthy region. For *model versioning* and *blue/green* rollouts I leveraged **SageMaker Model Registry** and **Step Functions** to orchestrate A/B tests, automatically switching traffic after a 99 % confidence threshold on RMSE was achieved.  

To guard against single‑point failures, we stored model artifacts in **S3 Cross‑Region Replication** and used **DynamoDB Global Tables** for request metadata, ensuring eventual consistency even during region outages. Health checks fed into **CloudWatch Alarms** that triggered a Lambda fallback to a *cached* baseline model stored in an S3 object lock.

**Result**  
After launch we achieved 99.97 % uptime (0.03 % downtime) and reduced latency variance from 120 ms to 30 ms across regions, meeting the SLA with a 25 % cost savings over a single‑region setup.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – delivering near‑zero‑downtime service.  
- **Ownership & Dive Deep** – architecting end‑to‑end redundancy and rigorously testing failover paths.  

Bar‑raisers look for *quantified impact* (99.97 % uptime), *deep technical reasoning* (multi‑AZ, multi‑region, A/B routing), and a lesson: “If you only test in one region you’ll miss cross‑region latency spikes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
