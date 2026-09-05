---
qid: vq_48d86a26c2__star__local
question: What is a Clustering Key?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 309
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:39-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the nightly ETL for our customer‑segmentation data mart that fed a marketing analytics platform. The table had over 12 million rows and queries on “last purchase date” were running at 45 seconds, far above SLA.

**Task** – I needed to reduce query latency below 5 seconds while keeping the ingestion pipeline within its 2‑hour window.

**Action** – I first profiled the access patterns: most reads filtered by `customer_id` and ordered by `purchase_date`. I decided to add a clustering key on `(customer_id, purchase_date DESC)` in Snowflake. To implement it I:
1. Created an empty table with the new clustering definition.
2. Used `INSERT INTO ... SELECT * FROM old_table` to rebuild data in the new order.
3. Scheduled a nightly maintenance job that automatically reclusters when fragmentation exceeded 10 %.
4. Monitored `TABLES.CLUSTERING_INFORMATION` to verify the key’s effectiveness.

**Result** – Post‑migration, query times dropped from 45 s to 2.8 s (≈93% improvement). The ingestion stayed under 1.7 hours, meeting our SLA. I learned that choosing a clustering key aligned with real read patterns can deliver massive performance gains without rewriting the entire pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
