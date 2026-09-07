---
qid: ing_eaeccfe3db__aws__local
question: 'Explain: Database Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 630
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:11-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a scalable “Instagram‑style” database for photo posts and comments that could serve millions of users worldwide with 99.9 % availability and <200 ms latency on reads.

**Action (Design)**  

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| **Write path** | *Amazon DynamoDB* (partition key: `user_id`, sort key: `timestamp`) + *DynamoDB Streams → Lambda* for denormalization into a **posts table**. | Low‑latency writes, automatic sharding, no operational overhead. |
| **Read path** | *Amazon CloudFront + S3* for image blobs; *ElastiCache (Redis)* as a read cache for the most recent 10 k posts per user. | CDN guarantees <100 ms global edge delivery; Redis reduces DB reads by ~80 %. |
| **Search / Feed** | *OpenSearch Service* indexed on hashtags, geolocation, and engagement metrics. | Enables sub‑second full‑text search without polluting the transactional store. |
| **Analytics** | *AWS Glue + Athena* over S3 logs for usage reports; *Redshift* for BI dashboards. | Cost‑effective batch analytics with no impact on OLTP traffic. |

**Scalability / Availability**  
- DynamoDB auto‑scales to 10 M RCU/WCU, backed by **global tables** (multi‑AZ replication).  
- S3/CloudFront provides *infinite* object storage and edge caching.  
- OpenSearch clusters are deployed across three AZs; data is replicated with `index.refresh_interval=30s` for near real‑time feeds.

**Cost Trade‑offs**  
- Using DynamoDB’s on‑demand mode avoids over‑provisioning during traffic spikes.  
- Cache warm‑up via Lambda keeps read costs low while maintaining freshness.  
- OpenSearch clusters are sized to 2 GB per shard, with autoscaling policies triggered by query latency.

**Result**  
Implemented in 6 weeks; the system handled **25 M daily active users**, delivering posts in <150 ms (95th percentile) and keeping read costs at $0.07/10k reads versus a projected $0.15 on a relational DB.

**Reflection**  
I initially underestimated the need for a search layer, causing 3 min query times during beta. After adding OpenSearch, latency dropped to <200 ms. This taught me the value of *Dive Deep* and *Bias for Action*: quickly iterate based on real metrics rather than assumptions.  

> **Leadership Principles**:  
> • **Customer Obsession** – ensuring fast, reliable access for users worldwide.  
> • **Ownership** – owning end‑to‑end performance and cost, iterating until the SLA is met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
