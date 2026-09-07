---
qid: ing_4161169413__aws__local
question: 'Explain: Web Crawler Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 808
total_tokens: 1040
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:53:46-05:00'
sources: []
---

**Situation**  
I led a team to build a production‑grade web crawler for an e‑commerce search engine that indexed 12 M pages daily and served real‑time product ranking. The challenge was to store crawled HTML, metadata, and incremental changes at scale while keeping latency < 200 ms for downstream ML pipelines.

**Task**  
Design the storage layer that can ingest terabytes of data per day, support fast deduplication, and enable efficient retrieval for feature extraction.

**Action**  
1. **Requirements & Constraints**  
   - *Scalability*: 10‑fold traffic growth in 12 mo.  
   - *Availability*: 99.99 % SLA, read/write latency < 200 ms.  
   - *Cost*: Keep storage cost < $0.02/GB/mo.  
   - *Data Model*: Raw HTML + JSON metadata (URL, timestamp, crawl depth).

2. **Design**  
   | Layer | AWS Service | Rationale |
   |-------|-------------|-----------|
   | Ingestion buffer | Amazon Kinesis Data Streams | Handles bursty crawler output; auto‑scales to 100 k records/s. |
   | Deduplication & batching | Lambda + DynamoDB Global Tables | Keeps a per‑URL hash index (partition key = URL) for idempotency, globally replicated for multi‑AZ read latency < 10 ms. |
   | Persistent store | Amazon S3 Glacier Deep Archive + S3 Intelligent-Tiering | Raw HTML stored in object files (1 GB per partition). Glacier for long‑term cost savings; Intelligent‑Tiering auto‑moves hot objects to S3 Standard when accessed by ML jobs. |
   | Metadata catalog | AWS Glue Data Catalog + Athena | Enables schema‑on‑read queries for feature extraction without moving data. |
   | Feature cache | Amazon ElastiCache Redis (clustered) | Stores pre‑computed TF‑IDF vectors; TTL 24 h to keep memory footprint < 50 GB. |

3. **Scalability & Availability**  
   - Kinesis shards auto‑scale with CloudWatch alarms.  
   - DynamoDB global tables ensure no single point of failure.  
   - S3 offers virtually unlimited capacity and cross‑region replication (S3 Cross‑Region Replication) for disaster recovery.  

4. **Cost Trade‑offs**  
   - Using Glacier Deep Archive reduces storage to ~$0.00099/GB/mo vs Standard’s $0.023/GB/mo, saving ~ $70k/month for 10 TB of data.  
   - Lambda invocations are billed per GB‑s; batching reduces overhead.

5. **Monitoring & Alerts**  
   - CloudWatch metrics on Kinesis lag, DynamoDB throttles, S3 object counts.  
   - PagerDuty alerts if ingestion lag > 5 min or read latency > 200 ms.

**Result**  
The system ingested 12 M pages/day with < 0.1 % duplicate rate, reduced storage cost by **$65k/month**, and maintained < 190 ms average query latency for ML pipelines. The design scaled to 30 M pages/day after a 6‑month spike without any architectural changes.

---

### Leadership Principles Highlighted  
- **Ownership** – Took full responsibility for end‑to‑end data pipeline, from ingestion to feature cache.  
- **Dive Deep** – Analyzed latency budgets, cost per GB, and failure modes to justify each service choice.  

### What a Bar‑Raiser Listens For  
- Clear articulation of trade‑offs (cost vs performance).  
- Quantified impact (traffic, latency, savings).  
- Evidence of learning from early pilots: we moved from S3 Standard to Glacier after profiling access patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
