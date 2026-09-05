---
qid: ing_723c82fd43__star__local
question: 'Explain: OLAP database - Amazon MySQL RDS — Tech-Stacks-Live-Apps/Grab/OrderProcessing
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 489
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:41-05:00'
sources: []
---

**Situation:** At Grab’s order‑processing microservice, we hit a bottleneck: business analytics queries (daily sales, top‑seller heatmaps) were pulling from the same transactional MySQL RDS instance that handled live orders, causing 30 % latency spikes during peak hours.

**Task:** I needed to build an OLAP layer on Amazon MySQL RDS that could answer complex aggregation queries in under a second without impacting transaction throughput, while keeping cost and operational overhead low.

**Action:**  
1. Created a separate read‑replica cluster on RDS and enabled **partitioning by date** (range partitions) to isolate hot data.  
2. Developed an incremental ETL job with AWS Glue that extracted the last 24 hours of order events, transformed them into denormalized fact tables (orders, revenue, volume), and loaded them into the replica using MySQL’s `LOAD DATA INFILE` for bulk writes.  
3. Added **column‑store indexes** on high‑cardinality columns (product_id, merchant_id) to accelerate group‑by queries.  
4. Implemented a scheduled refresh every 5 minutes and exposed the OLAP tables via an Athena federated query endpoint for BI tools.

**Result:** Query latency dropped from ~12 s to <0.8 s on average; real‑time dashboards refreshed in minutes instead of hours, freeing the primary instance to process orders with 15 % higher throughput. I learned that careful partitioning and lightweight ETL can turn a transactional RDS into an efficient OLAP engine without migrating to a separate data warehouse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
