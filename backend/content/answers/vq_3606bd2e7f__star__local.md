---
qid: vq_3606bd2e7f__star__local
question: What is an Indexed View?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 309
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:54-05:00'
sources: []
---

**Situation:** In a recent data warehouse project for our retail client, the sales team was pulling monthly revenue reports from a large fact table that had over 15 million rows. Every query took 8–10 minutes, and the reporting window closed at midnight, leaving analysts scrambling.

**Task:** I needed to reduce the query latency on the revenue aggregation to under two minutes without adding extra storage or compromising data freshness.

**Action:** I introduced an indexed view (materialized view) in SQL Server. First, I identified the most frequent aggregation—total sales per store and month—and created a view that pre‑aggregated those columns. Then I added a unique clustered index on `(StoreID, SaleMonth)` to enforce materialization. I tuned the view’s refresh policy to `ON DEMAND` during off‑peak hours, ensuring it stayed up‑to‑date with minimal impact on OLTP traffic. Finally, I rewrote the reporting queries to reference the indexed view instead of scanning the raw fact table.

**Result:** Query times dropped from 8–10 minutes to under 90 seconds, a 90% performance boost. Storage overhead was only ~5 MB for the index, and refresh latency remained below one minute. I learned that when you have predictable aggregation patterns, an indexed view can be a lightweight, high‑performance alternative to full materialized tables—especially in environments where write throughput must stay fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
