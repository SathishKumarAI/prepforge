---
qid: ing_328ad53a85__aws__local
question: 'Explain: And uh part of the reason we''re — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:27-05:00'
sources: []
---

**Situation & Task**  
When I joined Google’s ML platform team, we had to migrate a monolithic recommendation engine that served 12 M daily users to a cloud‑native architecture. The goal was to cut latency from 350 ms to <80 ms while keeping cost under $1.5 M/month.

**Action (Technical)**  
* **Design** – I architected a two‑tier system:  
  * *Inference layer*: Amazon SageMaker endpoints behind an Application Load Balancer, auto‑scaling based on CPU/Memory thresholds.  
  * *Feature store*: DynamoDB + Kinesis Data Streams for real‑time feature updates, cached in ElastiCache Redis to reduce DB hits.  
* **Data‑driven ops** – Implemented CloudWatch metrics (latency, error rate) and automated Lambda alerts that triggered a fallback to the legacy model if latency exceeded 120 ms.  
* **Cost control** – Leveraged SageMaker’s “spot training” for nightly model retraining and reserved instances for predictable traffic periods.

**Result**  
Latency dropped from 350 ms to **72 ms** (−80%), throughput increased by **35 %**, and monthly spend fell from $2.3 M to **$1.4 M**—a 39 % cost saving. User engagement rose 12 % due to faster recommendations.

**Learning & Ownership**  
I owned the end‑to‑end migration, diving deep into each service’s limits (e.g., DynamoDB read capacity planning). The bar‑raiser will hear my focus on *Customer Obsession* (improving user experience), *Ownership* (full responsibility for failure recovery), and *Dive Deep* (quantitative tuning of autoscaling thresholds). I also documented a post‑mortem that highlighted the trade‑off between spot pricing and model accuracy, informing future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
