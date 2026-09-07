---
qid: ing_5829d13f50__aws__local
question: 'Explain: Product details — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 410
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:54-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a recommendation engine for an e‑commerce platform that had to ingest and process ~10 M product records per day, deliver personalized search results within 200 ms, and support A/B testing for new ranking algorithms.

**Action (Design)**  
- **Data ingestion**: Kinesis Data Streams → Lambda → S3 (raw) + DynamoDB (latest metadata).  
- **Feature store**: Amazon SageMaker Feature Store to centralize feature values; updates via Glue jobs.  
- **Model training**: SageMaker Pipelines, training on Spot Instances (cost ↓ ≈ 40 %).  
- **Serving**: SageMaker Endpoint behind CloudFront + Lambda@Edge for latency <200 ms; fallback to cached predictions in ElastiCache Redis.  
- **Observability**: CloudWatch metrics + X-Ray traces to enforce SLAs and trigger auto‑scale.  

I adopted *Customer Obsession* by validating each metric with real user clicks, *Ownership* by owning the end‑to‑end pipeline, and *Dive Deep* to tune shard counts and batch sizes.

**Result**  
- 30 % lift in conversion rate (from 2.1 % → 2.73 %) within two weeks of deployment.  
- Latency reduced from 450 ms to <200 ms for 95 th percentile requests.  
- Operational cost cut by 25 % after moving to Spot Instances and caching.

**Bar‑raiser takeaways**  
- Demonstrated ownership through complete pipeline design.  
- Quantified impact (conversion + latency).  
- Learned from a failed model drift episode: added drift detection via Evidently, now auto‑retraining when MAE > 0.05.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
