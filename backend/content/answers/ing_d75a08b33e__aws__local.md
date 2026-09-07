---
qid: ing_d75a08b33e__aws__local
question: 'Explain: Read requests — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 419
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:25-05:00'
sources: []
---

**Read Requests – Data Streams vs. Elastic Docs**

*Situation*: I led the migration of a real‑time analytics platform for a media company that handled ~10 M ad impressions per day. The existing solution used “elastic documents” (single, monolithic JSON blobs) stored in S3 and queried with Athena. Read latency was 2–3 s, unacceptable for the new live dashboard.

*Task*: Design a scalable read architecture that reduces latency to <200 ms while keeping costs under $5k/month.

*Action*:  
1. **Data Streams** – I introduced Kinesis Data Streams as the ingestion layer. Each record is a lightweight event (≈300 B) containing only fields needed for downstream analytics.  
2. **Materialized Views** – Using Lambda to write aggregated metrics into DynamoDB tables keyed by time window and user segment.  
3. **Elastic Docs** – Kept S3/Glue for archival, but limited read traffic to batch jobs (>1h).  

*Result*: Read latency dropped from 2 s to 150 ms (95th percentile), throughput scaled to 20 k RPS with no throttling. Cost fell to $3.8k/month due to reduced Athena scan volume and DynamoDB on‑demand pricing.

**Why it matters**

- **Customer Obsession**: Faster dashboards improved client satisfaction scores by 18%.  
- **Dive Deep & Ownership**: I performed a cost/latency trade‑off analysis, documented failure scenarios (e.g., Kinesis shard exhaustion), and built auto‑scaling for shards.  
- **Bar‑raiser expectations**: Demonstrated quantified impact, ownership of the migration, deep understanding of AWS services, and lessons learned from initial latency spikes that led to shard resizing logic.

*Key AWS Services*: Kinesis Data Streams, Lambda, DynamoDB, S3, Athena, CloudWatch (for monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
