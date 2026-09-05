---
qid: vq_d02de878ac__star__local
question: Database models ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 342
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:29-05:00'
sources: []
---

**Situation** – At my last company we were launching a new analytics dashboard for the retail chain. The existing monolithic MySQL schema had grown to over 15 tables with deep joins; query latency hit 3 s on peak traffic, breaking our SLA of <500 ms.  

**Task** – Redesign the data layer so that the dashboard could deliver real‑time metrics (sales, inventory levels, customer footfall) while keeping costs under the $50k/month budget and preserving transactional integrity for order processing.  

**Action** – I mapped out a hybrid model: kept the core OLTP tables in PostgreSQL (ACID guarantees), then created a separate analytical schema in Amazon Redshift. Using AWS Glue I built an incremental ETL pipeline that pulled daily aggregates from Postgres into Redshift, applying partitioning on `order_date` and compression encodings to cut storage by 60 %. I also added a materialized view for the most‑queried KPI (daily revenue) to avoid recomputing joins. For real‑time updates I deployed an event‑driven Lambda that pushed order events into Kinesis, then to Redshift in near‑real time via COPY.  

**Result** – Query latency dropped from 3 s to under 200 ms for the dashboard reports, and storage costs fell by 45 %. The hybrid approach let us keep transactional safety while providing lightning‑fast analytics, and I learned how to balance normalization with denormalization for performance trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
