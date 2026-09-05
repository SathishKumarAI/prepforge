---
qid: ing_edb797083f__star__local
question: 'Explain: Read more — Filestorages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 381
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:15-05:00'
sources: []
---

**Situation**  
In my last role I was building a recommendation system for an e‑commerce platform that needed to process 200 GB of user interaction logs daily. The data lived in multiple CSVs spread across on‑prem servers and a public S3 bucket, but our training pipeline only accepted Parquet files from a single HDFS cluster.

**Task**  
I had to design a scalable file storage strategy that would unify the disparate sources, reduce ingestion time by 50 %, and lower storage costs while keeping data integrity for downstream ML jobs.

**Action**  
First, I evaluated several options: moving everything to S3 Glacier (cost‑effective but slow), using Azure Blob with lifecycle policies, or building an on‑prem object store with Ceph. I chose a hybrid approach: keep hot logs in AWS S3 and archive older data to an on‑prem Ceph cluster via an automated nightly sync script written in Python. The script used boto3 to pull new files from S3, converted them to Parquet using PyArrow, and uploaded them to Ceph with RADOS Gateway. I also implemented checksum verification (MD5) at each step and leveraged AWS Transfer Acceleration for faster uploads.

**Result**  
The ingestion pipeline’s runtime dropped from 4 hrs to just under 2 hrs daily— a 50 % improvement. Storage costs fell by 30 % because we moved infrequently accessed data to Ceph, while S3 retained the hot tier. I learned that combining cloud and on‑prem object storage can yield both performance and cost benefits when properly orchestrated with automated validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
