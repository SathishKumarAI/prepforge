---
qid: ing_50c36f417d__aws__local
question: 'Explain: Return Policy — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 462
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:33-05:00'
sources: []
---

**Return Policy – a data‑intensive design**

**Situation / Task**  
When I joined the e‑commerce platform team, we were asked to redesign the return‑policy service so that it could process 10 × the traffic of our legacy system while delivering real‑time eligibility scores to the front‑end. The goal was to reduce manual review time by 70 % and cut operational costs by 30 %.

**Action**  
I owned the solution, first mapping out the data flow: order records → policy engine → rule‑based decision tree → result cache. I chose **Amazon DynamoDB** for low‑latency storage of customer profiles and return histories, coupled with **AWS Lambda** to execute stateless policy logic at scale. For heavy‑weight inference (e.g., fraud risk), we spun up a **SageMaker endpoint** behind an **Application Load Balancer** to allow horizontal scaling. To keep the system resilient, I enabled DynamoDB auto‑scaling and set up **CloudWatch alarms** for cold starts; failures were routed through **AWS Step Functions** to a retry queue.

I also introduced **EventBridge** to capture return events in real time, feeding a **Kinesis Data Stream** that powered a downstream analytics pipeline (Redshift) for continuous model retraining. This reduced manual review load by 72 % and cut cost per return by 28 %, while maintaining <5 ms latency for eligibility checks.

**Result**  
The new architecture handled 15 M returns/month, achieved 99.9 % availability, and slashed support tickets related to return policy confusion by 65 %. I documented the trade‑offs (e.g., Lambda cold start vs. EC2 cost) and shared lessons on capacity planning with the team.

**Leadership Principles**  
- **Ownership**: Took end‑to‑end responsibility for performance & cost.  
- **Dive Deep**: Analyzed latency graphs, DynamoDB provisioned throughput, and model accuracy to fine‑tune the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
