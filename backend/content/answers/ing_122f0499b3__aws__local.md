---
qid: ing_122f0499b3__aws__local
question: 'Explain: Software Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 456
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:32-05:00'
sources: []
---

**Situation & Task (S)**  
I led the redesign of a recommendation engine that served 5 M daily users on an e‑commerce platform. The previous monolith had a 99.7 % availability SLA and was crashing during flash sales, costing $120K/month in lost revenue.

**Action (A)**  
- **Ownership & Bias for Action:** I broke the monolith into micro‑services using **Amazon ECS Fargate** + **AWS App Mesh** for service mesh, ensuring independent scaling.  
- Added **Elastic Load Balancing** with *sticky sessions* disabled to allow zero‑downtime deployments.  
- Implemented **Circuit Breaker** patterns (via AWS Service Quotas) and **Auto Scaling** based on CloudWatch metrics (CPU > 70 % → +2 tasks).  
- Migrated stateful components to **Amazon DynamoDB Global Tables** for multi‑AZ resilience, using *conditional writes* for conflict resolution.  
- Set up **AWS WAF & Shield Advanced** to absorb DDoS spikes during promotions.

**Result (R)**  
- Availability improved from 99.7 % to 99.999 % (five nines), cutting outage revenue loss by **$360K/month**.  
- Mean Time To Recovery dropped from 45 min to 5 min, and deployment time decreased from 2 h to 15 min via CI/CD pipelines in CodePipeline.  
- Cost increased only 12 % due to better utilization of Fargate’s pay‑per‑second model.

**Learnings (L)**  
I discovered that *data‑driven monitoring* is critical: by correlating CloudWatch alarms with user churn, we prioritized fixes that directly impacted revenue. I also realized the value of a **fail‑fast** philosophy—allowing services to fail fast and recover automatically rather than cascading failures across the stack. This experience reinforced my commitment to *Customer Obsession* and *Dive Deep*, ensuring our architecture not only scales but protects the customer’s trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
