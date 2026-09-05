---
qid: vq_271238e287__star__local
question: What is granularity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 339
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:21-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our data lake was ingesting clickstream events from over 50,000 users daily. The analytics team needed to run cohort analyses on user behavior, but the raw event tables were too coarse: each row represented an entire session with aggregated fields like total spend and page views.

**Task** – I had to redesign the ingestion pipeline so that downstream BI tools could slice data at the user‑action level (page view, button click, purchase) while keeping storage costs under budget.

**Action** – I introduced a multi‑level granularity schema:  
1. A **raw events table** with one row per action, timestamped and keyed by session ID.  
2. An **aggregated daily summary table** that pre‑computes counts, sums, and averages for each user.  
I used Apache Beam to stream events into BigQuery, partitioning the raw table by hour and clustering on user_id. For the aggregated view I scheduled a nightly Spark job that pivoted the raw data, applied window functions, and materialized results in a column‑arred format. This kept write latency low while enabling ad‑hoc drill‑downs.

**Result** – Query performance for cohort reports improved from 45 seconds to under 3 seconds on average, and storage usage dropped by 18% because the raw table was compressed and partitioned efficiently. I learned that defining clear granularity layers lets teams balance query flexibility with cost—essential when scaling data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
