---
qid: ing_4e7b1f6d37__aws__local
question: 'Explain: 93: System Design Interview (13 Minutes)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 500
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:46-05:00'
sources: []
---

**Question:** *Explain how you would design a real‑time recommendation system for an e‑commerce platform (93‑minute interview).*

**Situation / Task**  
I was asked to architect a system that delivers personalized product recommendations with < 200 ms latency while handling 10M daily active users and 5B events per month.

**Action**  
1. **Data ingestion** – Use Kinesis Data Streams for event capture, *Lambda* for lightweight enrichment, and write to DynamoDB streams for real‑time updates.  
2. **Feature store** – Store user embeddings in Amazon SageMaker Feature Store (SSD‑optimized) so they can be fetched in < 10 ms.  
3. **Model serving** – Deploy a pre‑trained XGBoost model via SageMaker Real‑Time Endpoint; enable autoscaling based on CPU utilisation to keep cost at ~$0.50 per 1000 requests.  
4. **Batch re‑training** – Schedule nightly SageMaker training jobs that ingest the last 24 h of events from S3, updating embeddings in Feature Store every hour.  
5. **Caching & CDN** – Use ElastiCache (Redis) for hot user profiles and CloudFront edge caching for static recommendation payloads.

**Result**  
- Latency: 180 ms average, < 250 ms 95th percentile.  
- Throughput: 12 k requests/sec during peak with 99.9% availability.  
- Cost: $4,200/month (≈30% cheaper than a monolithic Spark solution).  

**Leadership Principles Highlighted**  
*Customer Obsession* – Delivered sub‑200 ms responses to keep users engaged.  
*Ownership & Dive Deep* – Handled end‑to‑end pipeline, tuned each component for cost/latency trade‑offs.

**Bar‑raiser cues**  
- Demonstrated ownership by mapping every requirement to an AWS service.  
- Showed depth through latency calculations and autoscaling logic.  
- Quantified impact with real numbers (latency, cost).  
- Learned from a prior failure: earlier design used S3 for hot reads, causing 1‑second delays; switching to Feature Store solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
