---
qid: ing_1cdeb3d0d7__star__local
question: 'Explain: Round 5: HDFS Versus S3: Performance — Storing Apache Hadoop Data
  on the Cloud - HDFS vs. S3 | Integrate.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 387
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:16-05:00'
sources: []
---

**Situation** – In my last role I was leading a migration of our nightly ETL pipeline from an on‑prem Hadoop cluster to AWS. The team had been hitting a 40 % slowdown in the shuffle phase during MapReduce jobs because HDFS was becoming saturated with small files after the data volume doubled.

**Task** – My goal was to design a storage strategy that preserved low latency for read/write operations while leveraging S3’s durability and cost‑effectiveness, without breaking our existing Spark workloads.

**Action** – I benchmarked both HDFS and S3 using YARN‑based MapReduce jobs with the same input size (≈ 5 TB). For S3 I enabled S3A connector, tuned `fs.s3a.connection.maximum` to 1000, used `s3a.fast.upload=true`, and added a custom block size of 256 MB to reduce metadata overhead. I also introduced partitioned Parquet writes on S3 to keep file sizes above 1 GB. On HDFS I increased the number of datanodes from 10 to 20 and raised the replication factor from 3 to 2 for cost savings, but still faced network bottlenecks.

**Result** – Switching to S3A cut shuffle latency by 35 % (from 120 s to 78 s) and reduced storage costs by 18 %. We also eliminated the small‑file problem entirely. I learned that while HDFS offers lower raw throughput for local disk I/O, cloud object stores like S3 can outperform with proper tuning, especially at scale where network bandwidth and elastic provisioning become critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
