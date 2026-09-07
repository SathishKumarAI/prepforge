---
qid: ing_b57908bfcc__aws__local
question: 'Explain: When PySpark starts to feel slow — PySpark for Beginners: Building
  Intermediate-Level Skills'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:34-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science sprint for the retail analytics team. The nightly ETL ran on **PySpark** over 10 TB of clickstream logs. As the dataset grew, job runtimes ballooned from 30 min to >3 h, jeopardizing our daily report SLA.

**Action**  
1. **Ownership & Dive Deep** – I pulled the Spark UI and found skewed partitions and a single‑node executor bottleneck.  
2. Re‑partitioned data by user ID (`repartition(200)`), added broadcast joins for small dimension tables, and tuned `spark.sql.shuffle.partitions` to 500.  
3. Switched the cluster to **Amazon EMR Serverless** (Spark 3.1) with spot instances; leveraged **S3 Select** to pull only needed columns, reducing I/O by 60 %.  
4. Implemented a **spot‑on‑demand hybrid** strategy: spot for bulk transforms, on‑demand for critical stages, keeping cost under $0.15/GB processed.

**Result**  
- Runtime dropped from **3 h → 45 min** (≈ 6× faster).  
- Cost per job fell from **$120 → $28** (~ 77 % savings).  
- Report latency improved to < 2 h, enabling real‑time inventory decisions.

**Learnings**  
- Continuous profiling is essential; a single skew can kill performance.  
- Serverless EMR scales automatically, but careful partitioning still pays off.  

*Leadership Principles: Customer Obsession (delivering faster insights), Ownership (taking full responsibility for the pipeline), Dive Deep (profiling and tuning), Bias for Action (immediate refactor), Deliver Results (quantified speed & cost gains).*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
