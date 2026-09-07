---
qid: ing_dab6b4bbd8__aws__local
question: 'Explain: Software Architectures — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 529
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:52-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to build a *real‑time fraud detection platform* for an online marketplace that handled 3 M orders/day. The requirement was to ingest clickstreams, run ML inference on each event, and trigger alerts with sub‑second latency while keeping costs under $200K/month.

**Action – Architecture & Design**  
1. **Data ingestion** – Kinesis Data Streams (shard count 8) for raw events; Lambda decouples ingestion from downstream processing.  
2. **Feature store** – DynamoDB with TTL for per‑user state, cached in ElastiCache Redis to keep lookups < 5 ms.  
3. **Model inference** – SageMaker endpoint behind an Application Load Balancer, auto‑scaling based on CloudWatch metrics (CPU > 70% → add capacity).  
4. **Alerting & persistence** – SNS for real‑time notifications; data stored in Redshift Spectrum (S3 + Athena) for audit and retraining.  

*Scalability*: Kinesis scales horizontally with shards, Lambda auto‑scales, SageMaker endpoints can be autoscaled to 1000 RPS.  
*Availability*: Multi‑AZ VPC, ALB health checks, DynamoDB global tables for disaster recovery.  
*Cost trade‑offs*: Reserved instances for Lambda and Redshift Spectrum; spot instances for training jobs; Lambda provisioned concurrency only during peak hours.

**Result**  
- Latency dropped from 350 ms to **< 120 ms** (95th percentile).  
- False positives reduced by **42%**, saving the business ~$1.2M/year.  
- Monthly cost stayed at **$185K**—below target.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Built a system that directly protects merchants from fraud, improving trust.  
- *Ownership & Dive Deep*: Took full responsibility for end‑to‑end performance, iterated on shard count and caching strategy until metrics hit SLA.  

**What a Bar‑Raiser Looks For**  
- Clear ownership of the problem scope.  
- Deep dive into trade‑offs (e.g., choosing Kinesis over Kafka).  
- Quantified impact with real numbers.  
- Demonstrated learning loop: after the first month we re‑tuned shard count and moved to spot instances, reducing cost by 12% without compromising SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
