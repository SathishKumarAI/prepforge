---
qid: ing_de2610d6bf__aws__local
question: 'Explain: now the demand service requests the supply'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 490
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:47-05:00'
sources: []
---

**Situation / Task**  
At a fast‑growing on‑demand logistics startup I led the design of an ML‑driven “Demand‑to‑Supply” matcher that would route incoming delivery requests to the nearest available driver in real time. The system had to scale to 10 M requests/day, keep latency under 200 ms, and reduce idle driver time by at least 15 %.  

**Action**  
* **Ownership & Bias for Action** – I scoped a two‑phase solution: (1) an online inference layer using SageMaker RealTime endpoint with a lightweight XGBoost model that predicts the best driver within a 5‑km radius, and (2) a batch re‑training pipeline on Glue that ingests driver telemetry, request logs, and traffic data nightly.  
* **Dive Deep** – I engineered feature vectors (driver ETA, vehicle capacity, historical acceptance rate, real‑time traffic heatmaps) and used SageMaker Experiments to track A/B tests.  
* **AWS Services** – Lambda + API Gateway for the request surface, Step Functions to orchestrate inference → fallback rule engine, DynamoDB for driver state, CloudWatch & X-Ray for observability.  
* **Scalability & Cost** – Leveraged autoscaling on SageMaker endpoints (max 20 instances) and reserved capacity to cut GPU cost by 35 %. Implemented caching in ElastiCache Redis to shave inference time from 350 ms to 140 ms.

**Result**  
Within three months of deployment:  
* Driver idle time dropped **18 %**, boosting revenue by $1.2M/month.  
* Latency stayed <200 ms for 99.7 % of requests, exceeding SLA.  
* Operational cost decreased 28 % due to efficient scaling and caching.

**Learnings** – I realized the importance of continuous feature drift monitoring; we added a CloudWatch metric alert that auto‑triggers re‑training when RMSE > 0.12, preventing performance decay. This project exemplified *Customer Obsession*, *Ownership*, and *Dive Deep*—the traits a bar‑raiser expects in an ML lead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
