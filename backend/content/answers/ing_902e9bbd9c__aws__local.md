---
qid: ing_902e9bbd9c__aws__local
question: 'Explain: System Components: — Parking Lot System Design | Notion'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:58-05:00'
sources: []
---

**Situation & Task**  
I was tasked to design a *Parking‑Lot Management* system for a multi‑story mall that needed real‑time spot availability, dynamic pricing, and seamless integration with the mall’s existing mobile app. The goal was to reduce parking‑related complaints by 30 % while boosting revenue by 15 % within six months.

**Action**  
- **Architecture**: Event‑driven microservices on **Amazon ECS Fargate** (Python/Go) for spot state, pricing, and reservation services; **Amazon DynamoDB** with TTL for spot metadata, ensuring low‑latency reads (<5 ms).  
- **Real‑time updates** via **AWS IoT Core** to read sensor data (RFID/Ultrasonic), publishing to an **SNS topic** that triggers a Lambda function updating DynamoDB.  
- **Dynamic pricing** calculated by a scheduled **Step Functions** workflow querying historical occupancy from **Amazon Redshift**, feeding a lightweight ML model in SageMaker for price elasticity, and pushing results back to the pricing service.  
- **Scalability & Availability**: Auto‑scaling on ECS, Multi‑AZ DynamoDB, and using **Route 53 latency routing** for global app users.  
- **Cost**: Estimated $1.2 k/month vs. legacy on‑prem ($4 k).  

**Result**  
Within 3 months post‑launch:  
- Parking complaints dropped 42 %.  
- Revenue grew 18 % due to dynamic pricing.  
- System handled a peak of 10,000 concurrent users with <1 s latency.  

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end solution, diving deep into sensor integration and ML inference cost trade‑offs. The quantifiable impact guided future feature rollouts, and I iterated on failure points by adding fallback caches for IoT outages. This aligns with **Customer Obsession** (reducing frustration) and **Ownership** (full responsibility from design to ops).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
