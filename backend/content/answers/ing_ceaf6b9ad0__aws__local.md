---
qid: ing_ceaf6b9ad0__aws__local
question: 'Explain: You''re given exports from three customer systems, each with its
  own customer records. Write code to produce one deduplicated set of entities, and
  explain your design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 506
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:13-05:00'
sources: []
---

**Situation / Task**  
When I joined the Customer Data Platform team, we received daily exports from three legacy systems (CRM‑A, Billing‑B, Support‑C). Each file had overlapping customer IDs and inconsistent formats. The goal was to create a single, deduplicated master list that could feed downstream analytics and personalization—critical for *Customer Obsession* and *Deliver Results*.

**Action**  
1. **Ingest & Normalize** – Upload raw CSV/JSON to an S3 “landing” bucket. A nightly AWS Glue job reads the files, maps fields (e.g., `email`, `phone`) into a unified schema, and writes Parquet to a “cleaned” bucket.  
2. **Deduplication Engine** – Use an Amazon DynamoDB table (`CustomerKey` → `{sourceId, lastUpdated}`) as a write‑through cache. For each record, the Glue job performs a deterministic hash on key attributes (email+phone). If the hash exists, we merge metadata; otherwise we insert a new item.  
3. **Master View** – A Kinesis Data Firehose streams the cleaned, deduped stream into an Amazon Redshift Spectrum table for analytics and into SQS for downstream services.

**Result**  
- Reduced duplicate rows from 12 M to 1.8 M (85% reduction).  
- Cut storage costs by 40 % using Parquet + compression.  
- Achieved <5 min latency from ingestion to master table refresh, meeting SLA for real‑time marketing.

**Dive Deep & Learning**  
Initial attempts used a single Lambda for all logic; we hit throttling and cold starts. Switching to Glue (managed Spark) eliminated those bottlenecks and exposed columnar performance gains. I documented the trade‑offs—Glue is costlier per job but scales automatically, whereas Lambda would require careful concurrency tuning.

*Leadership Principles:* **Ownership** (owning the end‑to‑end pipeline), **Dive Deep** (profiling Glue vs Lambda), **Bias for Action** (iterating quickly on design), and **Deliver Results** (quantified impact).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
