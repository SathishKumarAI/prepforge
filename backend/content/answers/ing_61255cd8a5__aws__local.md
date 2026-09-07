---
qid: ing_61255cd8a5__aws__local
question: 'Explain: Data access pattern — Choose the Right Database for Metric Collection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 469
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:08-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to ingest >10 M metric events per day from IoT devices and provide real‑time dashboards for product health. The challenge was selecting a storage layer that could handle high write throughput, support time‑series queries, and keep costs under $2 k/month.

**Action**  
1. **Dive Deep into Patterns** – Analyzed write latency (≤5 ms) vs. query latency (<200 ms).  
2. **Design Decision** – Chose Amazon Timestream for time‑series ingestion; it auto‑scales, compresses data, and eliminates the need for a separate cold‑store. For ad‑hoc analytics, we streamed snapshots to S3 + Athena.  
3. **AWS Services & Trade‑offs**  
   * **Timestream** – 1 TB/month storage, $0.30/GB write, $0.05/GB query; high availability (multi‑AZ) and pay‑per‑use.  
   * **S3 + Athena** – cost‑effective for long‑term retention ($0.023/GB).  
4. **Operationalization** – Implemented Lambda to archive expired data from Timestream to S3, reducing storage costs by 35%.

**Result**  
- 99.9 % of writes met SLA, query latency dropped from 1.2 s (RDS) to 120 ms.  
- Monthly cost fell from $7 k to <$2 k.  
- Dashboard users reported a 40 % faster incident response time.

**Leadership Principles Highlighted**  
* **Customer Obsession** – Delivered instant insights for field engineers.  
* **Ownership & Bias for Action** – Took end‑to‑end responsibility and iterated quickly.  

Bar‑raiser cues: depth of pattern analysis, quantifiable cost/latency trade‑offs, learning from the initial RDS prototype that failed to meet SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
