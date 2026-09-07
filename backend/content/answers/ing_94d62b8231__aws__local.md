---
qid: ing_94d62b8231__aws__local
question: 'Explain: Geospatial engine — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 518
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:26-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to replace a legacy on‑prem geospatial search platform that could not scale beyond 2 M documents and returned latency > 500 ms for complex spatial queries. The business required sub‑100 ms responses, 99.9 % availability, and the ability to ingest ~10 k new geo‑records per second from IoT devices.

**Action (Technical)**  
I evaluated AWS services that match Elasticsearch’s “distributed search & analytics” promise:

| Requirement | AWS Service | Why it fits |
|-------------|------------|--------------|
| Full‑text + Geo‑spatial indexing | **Amazon OpenSearch Service** (managed Elasticsearch) | Native geo‑distance, bounding box, and poly‑shape queries; auto‑sharding and replica management. |
| Real‑time ingestion | **Kinesis Data Streams → Lambda → OpenSearch** | Low‑latency pipeline, serverless scaling, cost per GB processed. |
| High availability & durability | Multi‑AZ, cross‑region snapshots | Meets 99.9 % SLA, disaster recovery within minutes. |
| Cost control | Spot Instances for data nodes + S3 storage for cold logs | 30 % cheaper than on‑prem clusters of same size. |

I designed a **three‑tier architecture**:  
1. Kinesis shards ingest IoT telemetry → Lambda transforms into bulk OpenSearch index requests.  
2. OpenSearch domain with 3 master‑eligible, 5 data nodes (AZ spread) and 2 replicas per shard.  
3. CloudWatch + GuardDuty for monitoring & alerting.

**Result**  
- Query latency dropped from **> 500 ms to < 80 ms** on average.  
- Throughput increased to **12 k records/sec** with zero downtime during a 24‑hour migration.  
- Operational cost decreased by **$18K/year** versus the previous on‑prem solution.

**Reflection (Bar‑raiser notes)**  
I took ownership of the end‑to‑end pipeline, dove deep into shard allocation and query optimization, quantified every metric, and learned that caching at the Lambda layer reduced bulk request size by 25 %. This aligns with Amazon’s *Customer Obsession* (delivering low latency) and *Ownership* (full responsibility for performance and cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
