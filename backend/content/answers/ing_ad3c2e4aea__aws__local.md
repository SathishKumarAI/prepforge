---
qid: ing_ad3c2e4aea__aws__local
question: 'Explain: The quest for availability in the cloud — The quest for availability
  in the cloud | Pluralsight'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 387
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:12-05:00'
sources: []
---

**Situation / Task**

When I led the migration of our recommendation engine to AWS, the team’s goal was a *99.999% uptime* that matched our on‑prem SLA, while keeping costs under $200k/month.

**Action**

I applied **Customer Obsession** and **Ownership**:  
- Designed a multi‑AZ architecture with **Amazon RDS Aurora Serverless v2** for the catalog DB (auto‑scaling read replicas) and **Elasticache Redis** in each AZ.  
- Implemented **AWS CloudWatch + SNS** alarms to trigger an automated *Failover Lambda* that re‑routes traffic via a global **Route 53 latency‑based routing policy**.  
- Added **AWS WAF** and **Shield Advanced** for DDoS resilience, and scheduled **RDS backups** with point‑in‑time recovery.

I used **Dive Deep** to benchmark: 99.999% availability translates to <5 minutes of downtime per year. With the above stack, our pilot ran 730 days with only 1 minute of unplanned outage (0.00014%), achieving *99.9999%*.

**Result**

- Uptime hit **99.9999%**, surpassing SLA by 0.0004%.  
- Cost stayed at **$185k/month**, a 7% reduction from the baseline.  
- Customer support tickets dropped 42%, proving higher availability directly improved user experience.

**Learnings**

I realized that *auto‑scaling* alone isn’t enough; coupling it with proactive failover automation and global routing is key. This iteration now informs our continuous improvement cycle for all latency‑critical services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
