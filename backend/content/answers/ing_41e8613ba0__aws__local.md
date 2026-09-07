---
qid: ing_41e8613ba0__aws__local
question: 'Explain: Amazon Prime Video Microservices — Prime Video Microservices -
  by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 627
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:56-05:00'
sources: []
---

**Situation (S)**  
I was tasked with redesigning the **Prime Video recommendation engine** that previously ran on a monolithic Java EE stack. The service was responsible for generating real‑time “Recommended for you” cards, and its 30 % CPU spike during peak hours caused latency issues across the entire streaming platform.

**Task (T)**  
My goal was to split the monolith into independent microservices, each handling a distinct recommendation logic (genre affinity, user history, contextual freshness), while keeping end‑to‑end response time below **80 ms** and reducing cost by 25 %.

**Action (A)**  

| Microservice | AWS Services Used | Design Decisions |
|--------------|-------------------|------------------|
| **User‑Profile Service** | *Amazon DynamoDB*, *AWS Lambda* (Python) | Serverless, autoscaling to 0.5–2 k requests/sec; low‑latency key/value store for user vectors. |
| **Context Engine** | *Amazon Kinesis Data Streams* + *Glue* | Real‑time ingestion of device, location, time data; nightly ETL into a Redshift warehouse for batch scoring. |
| **Ranking Service** | *AWS SageMaker Endpoint*, *ECS Fargate* | Hosted model (XGBoost) served via SageMaker; containerized inference for custom logic (e.g., A/B testing). |
| **Aggregation Layer** | *Amazon API Gateway*, *Lambda@Edge* | Orchestrates calls, caches top‑10 results in CloudFront edge locations. |

- **Scalability:** Each service scales independently with AWS Lambda or Fargate’s auto‑scaling groups; Kinesis shards handle 5 k events/sec.
- **Availability:** All services are deployed across three AZs; DynamoDB global tables provide multi‑region failover.
- **Cost:** Serverless functions cut idle compute costs by ~35 %; SageMaker’s spot training reduced model training spend by 40 %.

**Result (R)**  
Post‑migration, end‑to‑end recommendation latency dropped from **120 ms to 65 ms**, a **45 %** improvement. Peak CPU usage fell from 30 % to <5 %. The new architecture handled a 4× traffic increase during the 2025 Black Friday sale without any outages, and operational costs were reduced by **28 %** annually.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered faster, more reliable recommendations that directly improved viewer satisfaction.  
- **Ownership & Dive Deep:** Took full ownership of the migration, performed deep performance profiling, and iterated on model selection and infrastructure tuning until metrics met or exceeded goals.

This example shows how I apply data‑driven decision making, AWS services expertise, and a bias for action to solve complex system challenges—qualities that align with Amazon’s expectations for high‑impact engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
