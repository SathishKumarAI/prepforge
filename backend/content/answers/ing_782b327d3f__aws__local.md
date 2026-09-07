---
qid: ing_782b327d3f__aws__local
question: 'Explain: Um it''s not necessarily the best tool — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 470
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:05-05:00'
sources: []
---

**Situation & Task**  
When I joined a new product team at AWS, we had been shipping an on‑premises recommendation engine built in Java + Hadoop. It was fast to iterate but hit 70 % CPU utilization and 15 min batch latency during peak traffic—customers complained about stale recommendations. My goal was to redesign the pipeline into a fully serverless ML workflow that could scale automatically while reducing operational overhead.

**Action (Design & Tech)**  
1. **Data ingestion** – Kinesis Data Streams for real‑time clickstream, S3 for raw logs.  
2. **Feature store** – DynamoDB with TTL for per‑user features; Lambda functions update it on every record.  
3. **Model training** – SageMaker Pipelines orchestrated by Step Functions; training jobs run in Spot instances (cost ↓ 60 %).  
4. **Inference** – SageMaker Endpoint behind API Gateway, auto‑scaling to 0 when idle (save $1k/month).  
5. **Monitoring** – CloudWatch metrics + Evidently experiments to A/B new models without traffic risk.

We added a nightly batch job in Glue that refreshed the feature store at 2 am; this reduced data staleness from 12 hrs to < 30 min. The live inference latency dropped from 15 s to **< 200 ms** and CPU usage fell below 20 %. Revenue lift of **18 %** on upsell recommendations was observed in the first quarter.

**Result & Learning**  
*Ownership*: I owned the full lifecycle, from data ingestion to A/B testing.  
*Dive Deep*: We identified that the bottleneck was feature recomputation; moving it to DynamoDB eliminated a 5‑hour batch job.  
*Bias for Action*: Leveraged Spot instances and serverless services to hit cost targets within 48 hrs of proposal.  

**Bar‑raiser check** – I demonstrated measurable impact, deep technical reasoning, and the ability to learn from the initial “best tool” assumption that a monolithic Java stack was sufficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
