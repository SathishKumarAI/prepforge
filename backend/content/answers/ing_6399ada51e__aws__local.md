---
qid: ing_6399ada51e__aws__local
question: 'Explain: um and that''s obviously not going to — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 580
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:18-05:00'
sources: []
---

**Situation (S)**  
I was leading a cross‑functional team that built a real‑time recommendation engine for a global e‑commerce platform at Google. The goal was to push personalized product suggestions within 50 ms while handling 2 M requests per second during peak holiday traffic.

**Task (T)**  
My responsibility was to design an end‑to‑end ML pipeline—data ingestion, feature store, model training, online serving—that met latency, availability, and cost targets, and to transition the system from a monolithic Python service to a scalable, cloud‑native architecture.

**Action (A)**  

| Step | AWS Service(s) | Rationale |
|------|----------------|-----------|
| **Data ingestion & feature store** | *Amazon Kinesis Data Streams* → *AWS Glue* → *Amazon DynamoDB* | Near‑real‑time streaming of clickstream data; Glue for schema evolution; DynamoDB for low‑latency key‑value lookups. |
| **Model training** | *Amazon SageMaker* (managed notebook & training jobs) | Built in hyperparameter tuning, automatic model packaging, and integration with AWS CodePipeline. |
| **Online inference** | *Amazon SageMaker Endpoint* + *AWS Lambda* for orchestration; *Elastic Load Balancing* | Serverless Lambda scales automatically to spikes; Endpoint provides 10‑ms latency at 99th percentile. |
| **Observability & rollback** | *Amazon CloudWatch* metrics, *X-Ray*, *S3* for logs | Continuous monitoring of request latency, error rates, and model drift. |
| **Cost control** | Spot Instances for training; Auto‑Scaling groups with predictive scaling | Reduced compute spend by 35 % while maintaining SLA. |

I applied **Bias for Action** to prototype a Lambda‑based inference layer in just two weeks, then iterated with A/B testing. **Dive Deep** came into play when diagnosing a sudden latency spike: I traced the issue to DynamoDB provisioned throughput throttling and re‑architected the feature cache to use *Amazon ElastiCache for Redis*, cutting read latency by 70 %.

**Result (R)**  
- Latency dropped from 120 ms to **48 ms** at 99th percentile.  
- Availability improved from 99.2 % to **>99.9 %** during holiday peaks.  
- Operational cost fell by **$1.2M annually** due to spot training and efficient caching.  

I documented the failure modes, refined our rollback playbook, and shared the learnings in a company‑wide workshop—showing true ownership and a commitment to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
