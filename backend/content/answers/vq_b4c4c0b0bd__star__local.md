---
qid: vq_b4c4c0b0bd__star__local
question: Describe the importance of using compress-codec parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:40-05:00'
sources: []
---

**Situation:**  
While migrating our nightly ETL pipeline from on‑prem Hadoop to a managed Hive cluster, we noticed that the raw JSON logs were ballooning the daily storage cost from $1k to over $5k due to high volume and inefficient compression.

**Task:**  
I had to redesign the data ingestion step so that the new Parquet tables fit within our budget while keeping query latency under 2 seconds for ad‑hoc analysis.

**Action:**  
First, I benchmarked three codecs—Snappy, Gzip, and Zstd—on a representative 500 GB sample. Using Spark’s `write.option("compression", codec)` I measured write throughput, file size, and read performance on a subset of queries. Snappy gave the fastest writes but only a 30% size reduction; Gzip cut size by 60% but slowed reads to >5 s; Zstd struck a balance: 55% compression with <2.5 s query times. I then updated our Hive `CREATE TABLE` statements to use `STORED AS PARQUET TBLPROPERTIES ('parquet.compression'='zstd')`, added an automated nightly job to enforce the codec, and monitored storage usage via AWS CloudWatch.

**Result:**  
Storage costs dropped by 45% (≈$2.5k/month saved), while query latency improved by 20%. The team learned that codec selection is a trade‑off between I/O throughput and compression ratio, and that benchmarking on real data is essential before committing to production settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
