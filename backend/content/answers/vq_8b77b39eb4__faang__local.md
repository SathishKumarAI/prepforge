---
qid: vq_8b77b39eb4__faang__local
question: Q3). How do you handle the frequency of data in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 503
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:26-05:00'
sources: []
---

**Clarify**

You’re asking how Azure Data Factory (ADF) manages data ingestion frequency—i.e., how often pipelines run, trigger schedules, and handle incremental loads.  
Assumptions I’d confirm:  

1. We need deterministic refreshes (daily, hourly, real‑time).  
2. Source supports change‑data capture (CDC) or time stamps.  
3. Data volumes are moderate to large but not streaming‑only.

**Approach**

1. Define a *trigger* strategy (schedule, tumbling window, event‑based).  
2. Use *incremental copy* with watermark columns or CDC.  
3. Leverage ADF’s *pipeline orchestration*: linked services → datasets → activities → triggers.  

**Depth**

- **Schedule Triggers**: `Cron` expressions for hourly/daily runs; `tumbling window` to guarantee no overlap and exact windows.  
- **Event‑Based Triggers**: Blob/ADLS event grid or Azure Event Hubs to fire pipelines on file arrival.  
- **Incremental Copy Activity**:  
  - Use `Copy` with `Source` filter (`LastModified > @pipeline().parameters.lastRunTime`).  
  - Store the last watermark in a control table (Azure SQL/Databricks).  
  - On each run, read watermark, copy new rows, then update watermark.  
- **Data Lake Partitioning**: Write to partitioned Parquet/Delta tables keyed by date/time for fast downstream queries.

Complexity: O(n) per run but bounded by incremental set; memory O(1). Trade‑off between freshness and cost—more frequent runs increase compute cost.

**Edge Cases**

- Skipped windows (pipeline failure): tumbling window auto‑retries.  
- Late data: use *slack* in watermark logic or a reprocessing job.  
- Schema drift: schema mapping with dynamic content, fallback to sink overwrite.

**Optimize & Communicate**

Explain that by decoupling trigger frequency from copy size—using incremental copies—we keep pipeline latency low while maintaining cost efficiency. I’d present the architecture diagram, show sample `Cron` and watermark logic, and quantify expected runtimes versus cost savings. This demonstrates structured thinking, depth in ADF capabilities, and clear communication—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
