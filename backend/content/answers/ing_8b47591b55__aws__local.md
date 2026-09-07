---
qid: ing_8b47591b55__aws__local
question: 'Explain: sequel to save the database after 2014 — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 502
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:39-05:00'
sources: []
---

**Situation (S)**  
When I joined the fleet‑management team in 2015, we had a legacy monolith that stored trip data in a single MySQL instance. It crashed under peak demand and couldn’t support real‑time analytics for surge pricing.

**Task (T)**  
I was tasked to design a new architecture that could handle millions of rides per day, provide instant driver‑passenger matching, and enable data‑driven dynamic pricing while keeping latency < 200 ms.

**Action (A)**  

1. **Micro‑service decomposition** – split into *Trip Service*, *Pricing Service*, *Driver Matching*, each exposing REST/GRPC APIs.  
2. **Event‑driven data pipeline** – use **Amazon Kinesis** for ingestion of trip events; stream to **AWS Lambda** → **DynamoDB** (hot keys) and **Redshift** (historical analytics).  
3. **Real‑time matching** – deploy a **Redis‑cluster** on **Elasticache** with Geo‑spatial indexing; Lambda functions query nearest drivers in < 50 ms.  
4. **Dynamic pricing** – model in **SageMaker**; endpoints served by **Amazon API Gateway + Lambda**.  
5. **Observability** – CloudWatch metrics, X-Ray traces, and automated rollback via CodePipeline.

**Result (R)**  
- 10× throughput with 99.9 % availability during city‑wide events.  
- Latency dropped from 1.2 s to 120 ms, improving driver‑pickup rates by **18 %**.  
- Cost of data storage fell 35 % by shifting from on‑prem MySQL to DynamoDB + Redshift.

---

### Leadership Principles Highlighted
- **Ownership** – drove end‑to‑end redesign and rolled it out in two weeks.  
- **Dive Deep & Deliver Results** – quantified performance gains and continuously tuned the pipeline based on metrics.  

*Bar‑raiser cues:* clear ownership, data‑driven impact, trade‑off analysis (e.g., Lambda cold starts vs. persistent containers), and post‑deployment lessons (e.g., added a circuit breaker after a surge pricing bug).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
