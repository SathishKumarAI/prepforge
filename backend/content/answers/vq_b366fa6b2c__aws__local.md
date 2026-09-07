---
qid: vq_b366fa6b2c__aws__local
question: How does the weather influence your plans for the day?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 407
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:09:55-05:00'
sources: []
---

**Situation / Task**  
When I was leading a cross‑functional sprint to launch a new IoT sensor dashboard, we had a critical demo scheduled for 10 AM on a day when the National Weather Service forecasted a severe thunderstorm that could trigger power outages in our primary data center.

**Action**  
I immediately pulled the team into a rapid “weather‑resilience” planning session (Customer Obsession + Ownership). We identified two mitigation paths:  
1. **Fail‑over to the secondary region** – we spun up an identical VPC in us‑east‑2, replicated our RDS Aurora cluster via cross‑region read replicas, and redirected traffic with Route 53 latency routing.  
2. **Local caching fallback** – we enabled DynamoDB on‑demand tables for critical sensor metadata to keep the UI responsive even if the primary API went down.

I also set up a lightweight CloudWatch alarm that would auto‑trigger the fail‑over if the primary region’s health metrics dipped below 90 % availability. This required tweaking our CI/CD pipeline (AWS CodePipeline) to deploy the secondary stack in under 5 minutes, and I ran a “dry‑run” test three days before.

**Result**  
The storm hit at 9:45 AM; the primary region’s power was cut for 12 minutes. Thanks to the pre‑configured fail‑over, the demo continued uninterrupted with <1 % latency increase. Post‑demo, we logged a 30 % reduction in customer support tickets related to uptime, and our quarterly uptime SLA hit 99.999%.  

**Learning**  
The exercise taught me that proactive, data‑driven risk mitigation can turn a potential outage into an opportunity to demonstrate reliability—exactly what “Customer Obsession” and “Dive Deep” demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
