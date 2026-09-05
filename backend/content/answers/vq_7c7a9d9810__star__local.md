---
qid: vq_7c7a9d9810__star__local
question: What are HDFS and Yarn?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 358
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:22-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating our nightly batch pipeline from a legacy relational store to Hadoop so we could scale the data lake for the new product analytics team. The existing ETL ran on a single machine and hit memory limits when processing 10 GB of raw logs each night.

**Task** – My goal was to set up a distributed file system that could reliably hold terabytes of log files, then orchestrate parallel map‑reduce jobs using YARN so the pipeline would finish in under two hours instead of eight.

**Action** – I first installed HDFS on a 10‑node cluster, configured replication at 3 and tuned block size to 256 MB for our write‑heavy workload. Then I wrapped each ETL stage in a MapReduce job managed by YARN’s ResourceManager: the map phase parsed logs into Parquet, reducers aggregated daily counts, and YARN allocated containers based on CPU/memory profiles we defined in yarn-site.xml. To avoid data skew, I added a combiner and used speculative execution to kill slow tasks. Throughout, I monitored progress with the Web UI and adjusted queue priorities.

**Result** – The new pipeline processed 12 GB of logs per night in 1.5 hours—an 80% time reduction—and we now store 3× more data without extra hardware. I learned that careful HDFS configuration plus YARN resource tuning can turn a single‑node bottleneck into a scalable, fault‑tolerant system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
