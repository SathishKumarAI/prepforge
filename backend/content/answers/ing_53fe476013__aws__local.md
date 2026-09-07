---
qid: ing_53fe476013__aws__local
question: 'Explain: Do less with serverless — Elasticsearch: The Official Distributed
  Search & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 497
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:35:39-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building a real‑time log analytics pipeline for a SaaS product that logged ~200 GB/day. The goal was to reduce on‑prem infra costs and improve query latency for our ops team.

**Action (Technical Design)**  
I moved the entire stack to **serverless**:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingest | **Amazon Kinesis Data Firehose → S3** | Handles bursty traffic, auto‑scales, no server maintenance. |
| Processing | **AWS Lambda (Python 3.12)** | Parses JSON, enriches with geo‑IP, writes to **OpenSearch Service** (managed Elasticsearch). Lambda scales to the number of records; I set a 5 min timeout and used **reserved concurrency** to guarantee 200 req/s throughput. |
| Search / Analytics | **Amazon OpenSearch Service** | Native Kibana dashboards, auto‑scaling nodes via *Auto Scaling* policies, pay only for storage/compute used. |
| Cost Control | **S3 Intelligent-Tiering + Lifecycle** + **OpenSearch snapshot retention** | 30 % cheaper than on‑prem ES cluster; we eliminated 12 servers worth of EC2 spend. |

I added a **step‑function orchestration** to run nightly aggregations into an S3 data lake, then queried via Athena for ad‑hoc reports.

**Result**  
- Query latency dropped from ~8 s to <200 ms (95th percentile).  
- Total monthly cost fell from $5.4K to $2.1K (≈60% savings).  
- Ops team reduced incident response time by 35%.

**Reflection & Bar‑Raiser Notes**  
I owned the migration end‑to‑end, dove deep into Lambda concurrency and OpenSearch scaling limits, and quantified impact with clear metrics. The biggest failure was an initial mis‑estimate of S3 lifecycle transitions; I learned to model cold‑data access patterns before setting policies, which prevented a 15 % performance hit during a compliance audit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
