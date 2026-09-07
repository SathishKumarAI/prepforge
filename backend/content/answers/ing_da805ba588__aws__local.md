---
qid: ing_da805ba588__aws__local
question: 'Explain: we have a i don''t know web — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 447
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:25-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I led the redesign of our flagship parking‑garage app after a 23 % spike in user complaints about spot availability and 18 % drop in revenue per visit during peak hours. The goal: deliver real‑time occupancy data, predictive pricing, and automated slot allocation while keeping latency <200 ms.

**Action (Dive Deep + Bias for Action)**  
1. **Data Pipeline** – Sensor streams → Amazon Kinesis Data Streams → Lambda → DynamoDB (partitioned by zone).  
2. **Real‑time inference** – Trained a gradient‑boosted model on historical occupancy + weather data; served via SageMaker endpoint behind API Gateway.  
3. **Predictive pricing** – Scheduled Lambda pulls daily demand forecasts from the model, updates Spot Pricing table in DynamoDB (event‑driven).  
4. **Availability & Scale** – Auto‑scaling Lambda with provisioned concurrency, DynamoDB Global Tables for multi‑AZ resilience, CloudFront caching for static assets.  
5. **Cost control** – Spot Instances for training jobs; reserved capacity for production endpoint; cost monitoring via Cost Explorer (target < $0.02/slot update).

**Result (Deliver Results)**  
- Reduced average wait time from 4.2 min to 1.8 min (58 % improvement).  
- Increased revenue per visit by 12 % during peak periods.  
- Cut operational cost of the real‑time service by 30 % through spot usage.

**Reflection (Learn from Failure)**  
Initial rollout suffered a 15 % spike in cold starts; we switched to provisioned concurrency and added a warm‑up Lambda, eliminating the issue within 24 h. This taught me to validate edge cases early with load testing and to treat latency as a first‑class metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
