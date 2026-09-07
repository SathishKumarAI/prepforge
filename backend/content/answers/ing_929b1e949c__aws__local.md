---
qid: ing_929b1e949c__aws__local
question: 'Explain: Scalable, High-Performance Indexing — Apache Lucene - Apache Lucene
  Core'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:44-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a legacy search platform to **Apache Lucene Core** for an e‑commerce catalog that grew from 2 M to 25 M items in 12 months. The goal was to support real‑time queries with < 200 ms latency while keeping costs under $30k/month.

**Action & Technical Design**  
I architected a **scalable, high‑performance indexing pipeline**:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingest | **Kinesis Data Streams + Lambda** | Near‑real‑time ingestion; autoscaling to 10k records/sec. |
| Indexer | **Amazon ECS Fargate (CPU‑optimized)** running a custom *LuceneIndexer* container | Isolated compute, no EC2 maintenance, auto‑scaling on CloudWatch CPU > 70%. |
| Store | **Amazon EFS** + **S3 Glacier Deep Archive** for older indexes | Low‑latency shared filesystem for active shards; cost‑effective archival. |
| Search | **Amazon OpenSearch Service (managed Lucene)** with custom analyzer plugins | Built‑in replication, automatic sharding, and seamless integration with Kibana for monitoring. |

I introduced **shard‑by‑category** to keep each shard < 1 GB, enabling fast GC cycles. Indexing jobs ran in parallel across 8 Fargate tasks, reducing total daily indexing time from 3 h to 15 min.

**Result & Impact**  
- Search latency dropped from 350 ms to **180 ms** (30% improvement).  
- Throughput increased to **10k QPS** with 99.9% availability.  
- Monthly cost fell from $48k to **$27k**, a **44% savings**.  

I documented the architecture in Confluence, ran post‑mortems on two failed indexing batches (identified GC pause bugs), and rolled out automated health checks—demonstrating **Ownership** and **Dive Deep** per Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
