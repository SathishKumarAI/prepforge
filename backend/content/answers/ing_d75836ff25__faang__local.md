---
qid: ing_d75836ff25__faang__local
question: 'Explain: Time-Series & Metrics — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 486
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:10-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of how time‑series data and metrics are stored/queried in **Apache HBase**, an open‑source NoSQL column family database built on Hadoop.  
Assumptions:  
* The schema is already partitioned by row key.  
* Data points arrive at high velocity (e.g., IoT telemetry).  
* Query patterns involve range scans over time windows.

**Approach**  
1. Treat each metric as a *row*.  
2. Use a composite row‑key: `<metric_id>#<timestamp>`.  
3. Store the value in a dedicated column family (e.g., `cf`).  

**Depth**  
*Row key design*: Lexicographic ordering of timestamps guarantees that scans for `[t1, t2]` return contiguous rows, enabling efficient range queries without full table scans.  
*Storage layout*: HBase’s internal *HFiles* are sorted by row key; a **Bloom filter** per region reduces disk I/O for non‑matching keys.  
*Compression & encoding*: Enable `Snappy/Deflate` and `PREFIX_DECODED` to shrink storage, especially for high‑cardinality time stamps.  
*Read/write throughput*: HBase can ingest millions of updates/sec; the write path is a memstore flush to disk.  
*Querying*: Use `Get`, `Scan`, or Apache Phoenix SQL (`SELECT * FROM metrics WHERE ts BETWEEN ? AND ?`).  

**Edge cases**  
*Clock skew*: Ensure timestamps are monotonic per node or use logical clocks.  
*Hot spots*: Very frequent keys cause region splits; pre‑split by time buckets to distribute load.  
*Retention*: Implement TTL (time‑to‑live) on column families for automatic compaction.

**Optimize & communicate**  
- *Compaction strategy*: Choose **major/minor compactions** based on write volume to keep read latency low.  
- *Region server tuning*: Adjust `hfile.block.cache.size` and `hbase.regionserver.maxlogs` for workload.  
Explain that this design balances high ingestion, efficient range scans, and minimal storage overhead—exactly the trade‑offs interviewers look for in a production ML telemetry pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
