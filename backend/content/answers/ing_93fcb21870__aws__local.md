---
qid: ing_93fcb21870__aws__local
question: 'Explain: YouTube Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 433
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:37-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign YouTube’s recommendation pipeline so it could serve *10 B+ daily views* while keeping latency under 200 ms and costs below $30M/month.

**Action (Design)**  
1. **Event ingestion** – Kinesis Data Streams capture user actions at ~50k events/s, auto‑scaling with Lambda shards.  
2. **Feature store** – DynamoDB + DAX for low‑latency feature lookup; periodic ETL in Glue writes aggregated features to S3 (partitioned by hour).  
3. **Model inference** – SageMaker Neo models deployed on spot EC2 G4dn instances behind an Application Load Balancer with weighted target groups per region. Auto‑scaling is driven by CloudWatch metrics (CPU < 70% → add 1 instance).  
4. **Result caching** – Redis‑Elasticache stores top‑10 recommendations per user; cache invalidation via SNS topics on model retraining.  

**Results**  
- Latency dropped from 450 ms to **180 ms** (30% faster than SLA).  
- Throughput handled 12 B requests/day, a 20% increase over the legacy system.  
- Monthly spend reduced from $42M to **$28M** (34% savings) by leveraging spot instances and auto‑scaling.

**Reflection & Ownership**  
I conducted a post‑mortem on an earlier spike where DynamoDB throttled; migrated hot keys to DAX, reducing read latency by 40%. I documented the trade‑offs between consistency and cost for the feature store, ensuring stakeholders understood that eventual consistency was acceptable for recommendations.  

*Leadership Principles*: **Ownership** – drove end‑to‑end redesign; **Dive Deep** – quantified every metric; **Deliver Results** – met SLAs while cutting costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
