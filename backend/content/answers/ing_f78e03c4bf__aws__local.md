---
qid: ing_f78e03c4bf__aws__local
question: 'Explain: Search engine — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 530
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:28-05:00'
sources: []
---

**Situation** – I led a cross‑functional team at a fintech startup to build a web‑crawler that feeds our recommendation engine. We needed 1 M pages per day, 99.9 % uptime, and sub‑hour latency for incremental updates.  
**Task** – Design an elastic, cost‑effective crawler that respects robots.txt, throttles sites, and stores crawl metadata for downstream ML pipelines.  
**Action** – I architected a micro‑service stack on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Scheduler & URL frontier | **Amazon SQS + Lambda** | Serverless scaling; auto‑spins up to 10 k parallel workers, cost ≈$0.20 M per month. |
| Fetcher | **AWS Fargate (ECS)** with containerized headless browsers | Guarantees isolation, memory limits, and easy rollback. |
| Robots.txt & politeness | Redis‑backed cache in **Amazon ElastiCache** | 95 % hit rate; reduces repeated HTTP requests by ~30 %. |
| Storage | **S3 + Glacier Deep Archive** for raw HTML; **DynamoDB** for metadata (URL, last‑modified, status). | S3 durability (11 9s) and low read latency; DynamoDB auto‑scales to 200k writes/sec. |
| ML ingestion | **AWS Glue + Athena** → **Redshift Spectrum** | Enables instant querying without data movement. |

I added a *rate‑limit monitor* that triggers an SNS alert if any domain exceeds 5 req/s, ensuring compliance and preventing throttling.

**Result** – The crawler processed 1.2 M pages/day within the first week, with 99.95 % success rate. Storage costs dropped 40 % after switching to Glacier for infrequently accessed archives. Our recommendation engine’s precision improved by 12 % due to richer content signals.  

**Leadership Principles** – *Customer Obsession* (delivering fresh data for better user experience) and *Ownership* (owning the entire end‑to‑end pipeline). I learned that aggressive caching reduces cost but must be balanced against freshness; hence we introduced a TTL policy that auto‑invalidates stale URLs after 48 h.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
