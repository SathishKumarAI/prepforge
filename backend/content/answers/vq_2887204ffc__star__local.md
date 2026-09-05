---
qid: vq_2887204ffc__star__local
question: what are the optimisations performed in ADF and ADB ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 415
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:37-05:00'
sources: []
---

**Situation:**  
In a recent migration of our on‑prem ETL to Azure, we had to move 5 TB of log data daily into Synapse Analytics for downstream BI. The initial pipeline in ADF was hitting the 8 hour SLA and our queries in ADX were running over 30 seconds due to suboptimal storage layout.

**Task:**  
I needed to cut the overall ingestion time by 50% and bring query latency below 5 seconds, while keeping costs under the existing budget.

**Action:**  
1. In ADF I switched from *Copy* to *Data Flow* with **Dynamic Partitioning** (partition count = 4×CPU) and enabled **Cache** for reusable lookups. I added a **Sink** level *Upsert* with *Row-Level Security* filters to avoid writing duplicates.  
2. Leveraged **Delta Lake** format in ADLS Gen2, enabling **time‑travel** and **schema evolution**. I tuned the **Parquet** block size to 256 MB for better compression.  
3. In ADX (Azure Data Explorer) I created a **Columnstore index** on the most queried columns and re‑partitioned tables using **Kusto's `repartition`** command, aligning partitions with ADF’s partition key.  
4. Implemented an automated *Monitoring* workflow in Azure Monitor to track pipeline latency and query runtimes, triggering alerts when thresholds were breached.

**Result:**  
Ingestion time dropped from 8 hours to 3 hours (62% improvement). Query latency fell below 4 seconds on average, a 86% reduction. The storage cost saved by Delta Lake’s compression was ~15%. I learned that aligning ADF partitioning with ADX’s partition strategy and using columnstore indices yields the biggest performance gains in a data‑centric pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
