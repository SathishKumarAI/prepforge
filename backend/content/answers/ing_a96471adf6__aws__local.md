---
qid: ing_a96471adf6__aws__local
question: How to scale the system? — Driverallocationubergojek
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:31-05:00'
sources: []
---

**Situation / Task**  
I was leading a cross‑functional team that built a real‑time driver‑allocation engine for a ride‑hailing platform (Uber/Gojek). The system had to serve 1 M active drivers and 10 M daily trips, yet latency had to stay below 200 ms under peak load.  

**Action**  
* **Ownership & Customer Obsession** – I rewrote the architecture in a serverless style so every request was independent of stateful nodes, eliminating single points of failure.  
* **Dive Deep** – Instrumented each microservice with CloudWatch metrics and X-Ray traces to surface bottlenecks.  
* **AWS services used**:  
  * **Amazon API Gateway + Lambda** for stateless routing (auto‑scales).  
  * **DynamoDB Global Tables** (partitioned by region) for driver status, providing <10 ms reads at 100 k RCU per second.  
  * **ElastiCache‑Redis** as a short‑lived cache for the most active drivers (50 % hit rate).  
  * **SQS + Fargate** for asynchronous batch updates during off‑peak hours.  

* **Bias for Action & Deliver Results** – I introduced a “hot‑spot” detection rule that routed traffic to regional endpoints, reducing cross‑region latency by 35%. I also set up Auto Scaling policies on Lambda concurrency and DynamoDB auto‑scaling, keeping cost per request below $0.0003.

**Result**  
* Latency dropped from 450 ms to **180 ms** during surge periods (90th percentile).  
* 99.9% availability across three AZs with zero outage in the first year.  
* Operational costs fell by **28%** compared to the monolithic architecture.  

**Bar‑raiser takeaway**  
I demonstrated true ownership by redesigning for scalability, dove deep into metrics to justify architectural choices, quantified impact with real numbers, and iterated quickly after a small cache miss incident that taught us to tune TTLs more aggressively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
