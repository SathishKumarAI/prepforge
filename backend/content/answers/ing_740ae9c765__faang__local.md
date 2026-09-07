---
qid: ing_740ae9c765__faang__local
question: 'Explain: Time series databases — Timeseries Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 503
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:08-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *time‑series databases (TSDBs)*—databases optimized for ingesting, storing, and querying data that is indexed by time.  
Assumptions:  
1. The audience knows relational DB basics but not TSDB internals.  
2. We should cover why they exist, key features, typical workloads, and trade‑offs.

**Approach**  
1. Define what a TSDB is.  
2. Highlight core design pillars (write throughput, compression, retention).  
3. Discuss common use cases.  
4. Mention popular engines (InfluxDB, TimescaleDB, Prometheus, OpenTSDB).  
5. Summarize trade‑offs vs. relational stores.

**Depth**  
A TSDB is a column‑oriented store that groups data by *shards* of time intervals and applies aggressive compression (e.g., Gorilla or LZ4) to reduce size. Writes are append‑only; reads use range scans, often with downsampling or aggregation operators built into the query language. Many TSDBs support retention policies—automatic purging of old segments—to keep storage bounded. They expose SQL‑like dialects or REST/HTTP APIs and integrate with Grafana or PromQL for visualization.

Typical workloads: high‑velocity telemetry (IoT, monitoring), financial tick data, and sensor streams. The key benefit is sub‑millisecond read latency on millions of points per second, which relational engines struggle to match without sharding and caching.

**Edge Cases**  
- Out‑of‑order timestamps can break compression; TSDBs buffer a window or reject late data.  
- Extremely long retention periods may negate compression benefits—use tiered storage (S3/HDFS).  
- Joins across time series are expensive; design schemas to avoid cross‑series joins.

**Optimize & Communicate**  
When interviewing, emphasize that choosing a TSDB is a trade‑off: you gain write/read speed and efficient retention at the cost of complex schema design and limited transactional guarantees. Highlight how you’d evaluate metrics like WPS (writes per second), query latency, and compression ratio to pick an engine for a given use case. This structured narrative demonstrates deep understanding and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
