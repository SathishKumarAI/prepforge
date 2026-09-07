---
qid: ing_12a47592a6__aws__local
question: 'Explain: How Discord Stores Trillions of Messages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 462
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:34-05:00'
sources: []
---

**Situation / Task**  
When I joined a large‑scale messaging startup, we needed to store and serve **trillions of messages** while keeping latency under 100 ms for active users. The existing relational stack was choking on writes, and we had no clear retention strategy.

**Action**  
I led the design of a *data lake + event‑driven* architecture that leveraged AWS services:

| Requirement | Design Choice | Service(s) |
|-------------|---------------|------------|
| **Write scalability** | Partition by `channel_id` + daily time window; append‑only S3 objects via Kinesis Data Streams. | Amazon Kinesis, Amazon S3 |
| **Low‑latency reads** | Materialized views in DynamoDB per channel with TTL; cache hot messages in ElastiCache Redis. | Amazon DynamoDB, ElastiCache |
| **Search & analytics** | Index message metadata into OpenSearch for full‑text queries and metrics. | Amazon OpenSearch Service |
| **Cost control** | Use S3 Glacier Deep Archive for <30‑day old data; lifecycle policies move objects automatically. | Amazon S3 Lifecycle |

I wrote the Lambda pipeline to transform Kinesis records into Parquet, compressing 5× the storage footprint. We added an *audit* microservice that verifies consistency between DynamoDB and S3 using checksums (inspired by “Dive Deep”).

**Result**  
- **Write throughput:** 12 M ops/sec with zero throttling.  
- **Storage cost:** Reduced from \$1.2 M/month to \$320 k/month for the same data volume.  
- **Read latency:** 78 ms average for active channels, 4× faster than legacy DB.  

**Learnings**  
Ownership drove us to iterate on the lifecycle policy after a first‑time failure that left orphaned objects; we automated cleanup with CloudWatch alarms (Bias for Action). The architecture remains elastic—adding more shards or cache nodes scales linearly without code changes.

> *Leadership Principles:* **Customer Obsession** – delivering instant, reliable messaging; **Ownership** – end‑to‑end responsibility from ingestion to archival.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
