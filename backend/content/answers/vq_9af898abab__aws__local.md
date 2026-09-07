---
qid: vq_9af898abab__aws__local
question: what are the challenges faced in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 400
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When I led the migration of our nightly ETL pipeline from a legacy Hadoop stack to **AWS Glue + Apache Spark**, we were hitting 4‑hour runtimes on a 10 TB dataset, causing stale analytics for downstream product teams.

**Action (Dive Deep / Bias for Action)**  
1. Profiled jobs with *Spark UI* and *Glue Metrics* → identified skewed partitions and excessive shuffle.  
2. Repartitioned by the most cardinal key (`user_id`) to 200 partitions; added **broadcast joins** where partner tables < 100 MB.  
3. Enabled **Dynamic Partition Pruning** in Hive metastore, reducing scan size by 70%.  
4. Leveraged **Amazon EMR Serverless** for on‑demand compute, auto‑scaling from 8 to 32 vCPUs based on workload peaks.  
5. Introduced *Glue Job Bookmarks* to avoid reprocessing already ingested data.

**Result (Deliver Results)**  
- Runtime dropped from **4 h → 45 min** (≈ 90% faster).  
- Cost per run fell from $120 → $35, saving ~$10K/month.  
- Data freshness improved to 1‑hour windows, directly boosting product metrics (conversion rate ↑3%).

**Reflection (Invent & Simplify / Bar‑raiser)**  
I documented the tuning process in a knowledge base and conducted a post‑mortem workshop; we captured “what if” scenarios for future teams. The key takeaway: deep profiling + targeted AWS services can turn a brittle Spark job into a scalable, cost‑efficient pipeline that delivers real customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
