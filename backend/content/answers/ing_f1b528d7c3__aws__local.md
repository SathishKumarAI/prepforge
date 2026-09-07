---
qid: ing_f1b528d7c3__aws__local
question: 'Explain: Redistributing capacity globally by shifting demand sources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 437
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:33-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led the “Global Load Balancer” project for our recommendation engine that served 120 M daily requests worldwide. Latency spikes were concentrated in Asia‑Pacific during peak hours, causing a 12 % drop in conversion rates. The goal was to redistribute capacity globally by shifting demand from overloaded regions to underutilized ones while keeping cost growth <5 %.

**Action**  
1. **Data‑driven analysis (Dive Deep)** – Collected per‑region request logs and EC2 utilization metrics, then built a heat map in Amazon QuickSight. Identified that 40 % of traffic from APAC could be rerouted to US‑East with only a 0.3 % QoS impact.  
2. **Design & AWS services** – Implemented an *Application Load Balancer* (ALB) with weighted target groups, backed by Auto Scaling Groups (ASG) in each region. Added Amazon Route 53 latency‑based routing and Geo‑DNS failover to shift traffic dynamically. Used AWS Global Accelerator for low‑latency edge caching.  
3. **Cost & Availability** – Configured ASG policies to keep spare capacity at 15 % and leveraged Spot Instances (via EC2 Fleet) for burst demand, cutting compute spend by 18 %. Employed Amazon CloudWatch alarms and SNS notifications for real‑time monitoring, ensuring 99.95 % availability.

**Result**  
- Latency in APAC dropped from 350 ms to 210 ms (+40 %).  
- Conversion rate improved by 9 %, translating to an additional $3.2 M annual revenue.  
- Capacity shift reduced infrastructure costs by 18 % while maintaining a 99.95 % SLA.

**Learning & Ownership**  
I documented the failure modes (e.g., mis‑configured weight thresholds) and added automated rollback scripts, reinforcing a culture of ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
