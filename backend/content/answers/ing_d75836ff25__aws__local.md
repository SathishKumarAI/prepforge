---
qid: ing_d75836ff25__aws__local
question: 'Explain: Time-Series & Metrics — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 472
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:25-05:00'
sources: []
---

**Situation (S)** – In my last role at a streaming‑media company we needed to ingest > 5 M events/sec from edge devices and surface real‑time health metrics to ops dashboards with < 1 s latency.  

**Task (T)** – Design a highly available, cost‑efficient time‑series store that could handle both hot read traffic (dashboards) and long‑term retention (> 2 years).  

**Action (A)**  
* **Schema** – Use HBase with rowkey `deviceId|timestamp` (lexicographically sorted by time), column families: *meta* (static device info), *metrics* (dynamic sensor values).  
* **Compaction & Bloom filters** – Enable block cache and bloom filters to reduce disk I/O for hot reads.  
* **Batch ingestion** – Write‑ahead log + HFile compaction via `HBase BulkLoad` to keep write throughput > 10k rows/s.  
* **Secondary index** – Deploy Apache Phoenix on top of HBase to run SQL‑style queries for ad‑hoc analytics.  
* **Autoscaling** – Couple HBase region servers with Amazon EMR’s autoscaling group; use CloudWatch metrics (CPU, disk) to trigger scale‑up/down every 5 min.  
* **Cost trade‑off** – Store hot data on SSD-backed EBS; archive cold partitions to S3 via HBase snapshots and Athena for queries.

**Result (R)** – Achieved < 800 ms read latency for 99.9% of dashboard requests, reduced storage cost by 35% compared with a pure RDS solution, and cut incident resolution time from 30 min to 5 min.  

*Leadership Principles:* **Ownership** (owning end‑to‑end data pipeline), **Dive Deep** (schema & compaction tuning).  
Bar‑raiser focus: depth of HBase internals, quantified latency & cost savings, and lessons learned when a region split caused a temporary spike in latency—prompted us to adjust split policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
