---
qid: vq_83c20338db__aws__local
question: How to choose partitioning column in hive? and which column shouldn't use
  partition and why?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 394
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:02-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to redesign the nightly Hive ETL that ingested 200 GB of log data per day. The job stalled because we were scanning full tables after every run.

**Action**  
I applied **Customer Obsession** and **Dive Deep**:  
1. *Data profiling* – measured cardinality, selectivity, and update frequency for every candidate column.  
2. *Partitioning rule*: choose a column that is (a) highly selective (> 10 k distinct values), (b) used in most queries, and (c) immutable after write.  
3. Implemented partition on `event_date` (daily granularity).  It reduced the number of files read from 2000 to ~50 per job, cutting runtime from 90 min to **12 min** – a 86% performance lift.  
4. Avoided partitioning on low‑cardinality columns such as `user_status` or `app_version`; partitioning them would create thousands of tiny files (< 1 MB each), increasing the metastore load and causing *small file* problems in EMR.

**Result**  
- 86% reduction in ETL time, freeing cluster capacity for other workloads.  
- Cost savings of ~£1k/month on EMR by reducing unnecessary I/O.  
- The design is fully scalable: as data grows we add partitions automatically; availability remains high because partitions are stored on S3 (durable).  

**Bar‑raiser takeaway**  
Demonstrated **ownership** by turning a slow job into an optimized pipeline, deep dive into metrics for decision making, and quantified impact that directly benefits the customer (faster insights).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
