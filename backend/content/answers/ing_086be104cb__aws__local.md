---
qid: ing_086be104cb__aws__local
question: 'Explain: Backing indices — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 535
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:05-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a 2‑TB on‑prem Elasticsearch cluster that served real‑time fraud alerts for a payment gateway. The existing architecture used “legacy” indices with daily rollover logic that caused query latency spikes and complicated index lifecycle management. My goal was to modernize the ingestion pipeline, reduce operational overhead by 40 %, and keep SLA < 200 ms per query.

**Action (Technical Design)**  
I replaced the manual rollover scheme with **Elastic Data Streams** backed by *index templates* that automatically created backing indices in a rolling pattern (e.g., `payments-000001`, `payments-000002`). The data stream was configured to use the Elastic **ILM policy** “hot‑warm‑cold” and an **Index Lifecycle Policy** that moved hot shards to GPU‑enabled EC2 R5 instances, warm shards to EBS‑optimized M5, and archived cold shards to S3 via the *Snapshot Lifecycle Management* (SLM).  
Key AWS services:  
- **Amazon OpenSearch Service** (managed Elasticsearch) for ease of scaling.  
- **AWS Lambda** for pre‑processing logs before ingestion.  
- **Amazon Kinesis Data Firehose** as a buffer and auto‑scaling source.  

I added an *index alias* pointing to the latest backing index, ensuring queries never hit outdated shards. This also enabled a blue/green deployment of new mapping changes without downtime.

**Result**  
After implementation:  
- Query latency dropped from 350 ms to **180 ms** (50 % improvement).  
- Operational cost fell by **$12k/month** due to reduced over‑provisioning.  
- Index rollover errors decreased from ~3/day to zero.  

**Reflection & Learning**  
I learned that *data streams* abstract away manual index management, but they require careful ILM tuning; a misconfigured hot‑warm ratio can still lead to hotspots. I documented the trade‑offs and created an automated rollback plan for future migrations.

> **Leadership Principles**  
> • **Ownership** – Took full responsibility for end‑to‑end migration and post‑go‑live monitoring.  
> • **Dive Deep** – Analyzed 2 TB of historic logs to design ILM tiers that matched query patterns.  
> • **Deliver Results** – Quantified latency, cost savings, and error reduction to prove business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
