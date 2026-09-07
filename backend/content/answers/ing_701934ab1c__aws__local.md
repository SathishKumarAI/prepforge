---
qid: ing_701934ab1c__aws__local
question: 'Explain: High Availability vs. Fault Tolerance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 408
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:35-05:00'
sources: []
---

**High‑Availability vs. Fault‑Tolerance**

*Situation:* While launching a global e‑commerce platform I was asked to guarantee 99.999% uptime for the checkout API while keeping costs under $200k/month.

*Task:* Distinguish and implement HA and fault‑tolerance, ensuring the service survived both planned and unplanned outages.

*Action:*  
1. **High Availability (HA)** – Deployed a **NLB** fronting **ALB** across 3 AZs, paired with **ECS Fargate** tasks behind an **Auto Scaling Group**. I set health‑check thresholds to redirect traffic instantly if an instance failed, achieving <2 s failover time.  
2. **Fault Tolerance (FT)** – Implemented **Amazon RDS Aurora Serverless v2** with cross‑region read replicas and automatic failover. Added a **SQS** dead‑letter queue for transient errors, re‑processing up to 3 times before escalation.  
3. Applied **AWS WAF** + **Shield Advanced** for DDoS protection and used **CloudWatch Alarms** to trigger auto‑scale on latency spikes.

*Result:* The system handled a simulated AZ outage with zero downtime; latency remained <150 ms. Across 12 months, we recorded only 0.001% unplanned outages (≈5 minutes), meeting the SLA while staying 15% below budget.

> **Leadership Principles:** *Customer Obsession* – delivered uninterrupted checkout experience; *Ownership* – architected end‑to‑end resilience.  
> **Bar‑raiser signals:** clear separation of HA vs FT concepts, concrete AWS services chosen, quantified uptime metrics, and a learning loop (post‑mortem analysis to refine thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
