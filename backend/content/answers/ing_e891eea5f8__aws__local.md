---
qid: ing_e891eea5f8__aws__local
question: 'Explain: Web Crawlers — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 363
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:59-05:00'
sources: []
---

**Situation / Task** – At my previous role I led a crawler team that had to index *>10 M* new URLs daily for a news aggregator while keeping duplicate fetches below **0.5 %**.  
**Action** – I introduced an in‑memory Bloom filter backed by Redis‑cluster and persisted to **S3** every 30 min. Each crawler worker checks the filter before HTTP request; if a miss, it adds the URL and forwards it to an **AWS Lambda** that pushes the link to **Kinesis Data Streams** for downstream processing. The Bloom filter’s false‑positive rate was tuned to 1 % with 256 MB per shard, keeping memory usage < 10 % of total worker RAM.  
I used **Amazon DynamoDB** for canonical URL storage (high write throughput, auto‑scaling) and **EMR** for periodic deduplication runs that trimmed the filter’s size by ~30 %. The system achieved a **99.3 % duplicate‑free fetch rate**, reduced crawler bandwidth cost by **$12k/month**, and maintained 99.9 % availability with multi‑AZ deployment.  
**Result** – Customer Obsession: users saw fresher content; Ownership: I owned the end‑to‑end pipeline; Dive Deep: I tuned filter parameters and monitored false positives in real time. The design balanced cost, scalability, and reliability—key AWS principles for a production crawler.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
