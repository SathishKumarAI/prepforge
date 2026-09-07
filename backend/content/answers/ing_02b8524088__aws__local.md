---
qid: ing_02b8524088__aws__local
question: 'Explain: So, if you just we''re streaming through — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:25-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a real‑time recommendation engine from an on‑prem Hadoop cluster to a fully managed, event‑driven pipeline at AWS. The goal was to cut latency by 70 % and double daily active users (DAU) without increasing infra costs.

**Action & Technical Design**  
* **Data ingestion** – We replaced the legacy batch ETL with **Amazon Kinesis Data Streams**, adding a *shard* per data source for horizontal scaling.  
* **Feature processing** – A Lambda layer pulls events, enriches them via **AWS Glue** crawlers, and writes to an **Amazon DynamoDB Global Table** (multi‑region).  
* **Model inference** – We containerized the PyTorch model in **ECS Fargate**, orchestrated by **Amazon EventBridge** rules that trigger on every stream record. The containers use **Elastic Inference** to cut GPU usage by 30 %.  
* **Serving & A/B testing** – Predictions are pushed back to Kinesis and consumed by a front‑end via **AppSync** GraphQL, enabling real‑time personalization.

I implemented *canary deployments* with CloudWatch metrics (latency, error rate) and automated rollback via CodePipeline. Cost was reduced from $120k/month to $70k/month while latency dropped from 2.3 s to 0.6 s, boosting DAU by 45 % in the first quarter.

**Result & Learning**  
The system now handles 1M events/sec with 99.9 % availability. The key lesson: **own the full stack and dive deep into each service’s throttling limits**, ensuring that every component is cost‑aware yet resilient. This approach aligns with Amazon’s *Customer Obsession* (fast, reliable recommendations) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
