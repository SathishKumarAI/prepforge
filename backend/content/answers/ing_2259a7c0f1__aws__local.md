---
qid: ing_2259a7c0f1__aws__local
question: What is availability in the cloud? — The quest for availability in the cloud
  | Pluralsight
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:37-05:00'
sources: []
---

**Situation / Task**  
When I led a migration of an AI‑inference service from on‑prem to AWS, my team had to guarantee *99.99 % availability* for a global customer base that paid per inference.

**Action**  
I broke the problem into three layers:  

1. **Compute & Scaling** – Deployed the model in an Auto‑Scaling group behind an Application Load Balancer (ALB) across two AZs, using *Amazon SageMaker Endpoint* for low‑latency inference.  
2. **Resilience** – Configured *Cross‑Region Replication* of the model artifacts to a secondary region and used *AWS Global Accelerator* to route traffic away from any AZ outage.  
3. **Observability & Recovery** – Instrumented CloudWatch metrics (latency, error rate) with alarms that trigger SNS notifications; automated recovery via Lambda that replaces unhealthy instances.

I also performed a *Chaos Monkey* test to validate failover and documented the impact: after the redesign, we reduced MTTR from 45 min to <5 min and maintained uptime above 99.999% during a simulated AZ outage.

**Result**  
The migration delivered **$2 M in annual savings** (using spot instances) while keeping SLA commitments intact. The customer reported a 30 % drop in latency complaints, and the system’s resilience earned us a “Best Practice” badge from AWS Well‑Architected Review.

---

*Leadership Principles:* **Ownership**, **Dive Deep** – I owned every layer of availability, dug into metrics, and iterated until we met the highest uptime goal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
