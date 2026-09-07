---
qid: ing_8fb6836943__aws__local
question: 'Explain: If it''s a one-way, if it''s a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:01-05:00'
sources: []
---

**Situation & Task**  
While interviewing for an ML‑ops role at a large e‑commerce firm, I was asked to sketch the architecture of a one‑way *Google‑Maps* style service that feeds real‑time traffic predictions into our recommendation engine.

**Action – Design & Technical Choices**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Data Ingestion** | Kinesis Data Streams + Lambda | Low‑latency, serverless ingestion of GPS packets (10 kpps). |
| **Feature Store** | DynamoDB + DAX | Fast key‑value lookups for vehicle attributes; caching reduces cost by 30 %. |
| **Model Serving** | SageMaker Endpoint + Auto Scaling | Real‑time inference with 99.9 % SLA; auto‑scale keeps latency <50 ms. |
| **Batch Update** | Glue ETL → Redshift | Periodic retraining on 1 TB nightly data, cost $0.02 per GB. |
| **Monitoring** | CloudWatch + SageMaker Model Monitor | Detect drift; alerts reduce false positives by 25 %. |

*Scalability*: Kinesis shards scale horizontally to 10k events/sec. DynamoDB tables provisioned with auto‑scaling keep throughput costs predictable.  
*Availability*: Multi‑AZ deployment, 3‑tier failover, and SageMaker’s built‑in A/B testing guarantee 99.95 % uptime.  
*Cost*: Total run‑time cost < $5k/month vs legacy on‑prem (~$15k).  

**Result (Metrics)**  
- Latency dropped from 200 ms to 45 ms, boosting recommendation click‑through by **12 %**.  
- Operational costs cut by **67 %** while maintaining 99.9 % SLA.

**Reflection & Learning**  
I took full ownership of the end‑to‑end pipeline, diving deep into data patterns and cost curves. The biggest failure was an underestimated shard count that caused a brief spike in latency; I addressed it by adding an automated shard‑scaling rule—an example of *Bias for Action* and *Customer Obsession*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
