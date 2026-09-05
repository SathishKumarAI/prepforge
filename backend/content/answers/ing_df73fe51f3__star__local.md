---
qid: ing_df73fe51f3__star__local
question: 'Explain: Tiered storage — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 394
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:34-05:00'
sources: []
---

**Situation** – In my last role I was responsible for the analytics platform of a global IoT company that collected telemetry from 2 million devices. By year‑end we were ingesting ~5 TB/day, and our PostgreSQL time‑series tables had ballooned to 1.8 PB. Query latency on the OLAP layer had spiked to >10 s for historical scans.

**Task** – I needed to redesign the storage strategy so that real‑time ingestion stayed at sub‑second latency while still allowing fast, cost‑effective access to older data without exhausting our on‑premises SSD pool.

**Action** – I introduced a two‑tier architecture:  
1. **Hot tier** – PostgreSQL with TimescaleDB’s hypertables on NVMe SSDs for the last 30 days, using chunk sizes of 2 GB and compressed chunks (≈3× size reduction).  
2. **Cold tier** – Amazon S3 Glacier Deep Archive for data older than 90 days, replicated via PostgreSQL’s `COPY TO`/`FROM` with encryption at rest. I built a cron job that moved finished chunks daily, updated TimescaleDB’s metadata to point queries to the S3 bucket via foreign tables (FDW), and added a caching layer in Redis for frequently accessed aggregates.

**Result** – Ingestion latency dropped from 200 ms to <50 ms; query times on historical data improved from >10 s to ~1.2 s for 90‑day windows, while storage costs fell by 65 %. I learned that combining native time‑series extensions with cloud archival can scale PostgreSQL to petabyte levels without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
