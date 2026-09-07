---
qid: ing_723c82fd43__aws__local
question: 'Explain: OLAP database - Amazon MySQL RDS — Tech-Stacks-Live-Apps/Grab/OrderProcessing
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 384
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:36-05:00'
sources: []
---

**Situation** – At Grab’s order‑processing platform we had to run real‑time analytics on millions of orders per day while keeping latency < 200 ms for the UI dashboards.  
**Task** – Build an OLAP layer that could ingest transactional data from our MySQL RDS cluster, aggregate it at a fine granularity, and serve ad‑hoc queries with sub‑second response.

**Action** –  
1. **Data ingestion**: Set up an *Amazon Kinesis Data Streams* pipeline to capture order events in real time; use *AWS Lambda* (Python) to transform the JSON payload into Parquet files.  
2. **Storage & compute**: Persist the Parquet files in *S3*, then load them into a *Redshift Spectrum* schema for fast columnar querying.  
3. **Schema design** – Implement a star‑schema with fact table `orders_fact` and dimension tables (`dim_customer`, `dim_product`). Partition by week to keep scan sizes small.  
4. **Performance tuning** – Use Redshift’s concurrency scaling, VACUUM+ANALYZE nightly, and materialized views for the most common aggregates.  
5. **Cost control** – Spot instances + RA3 nodes; enable *Redshift on-demand* for bursts.

**Result** – Query latency dropped from 1 s to < 200 ms (80 % reduction), cost fell by 35 %, and dashboards served live data with a 99.9 % SLA.  
**Learning** – Early on we underestimated the need for columnar storage; switching to Parquet + Redshift Spectrum was a game‑changer—demonstrating *Dive Deep* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
