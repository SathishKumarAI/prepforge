---
qid: vq_6f8bd54d88__star__local
question: What is the significance of using -compress-codec parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 347
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:49-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy batch pipeline that processed ~15 TB of daily log data into an AWS EMR cluster using Hive. The original job ran nightly, but as the dataset grew it started taking 18 hours to finish and the S3 bucket cost ballooned due to high storage consumption.

**Task** – I needed to cut runtime by at least 40 % and reduce on‑demand storage costs without compromising data quality or downstream analytics.

**Action** – I introduced the `-compress-codec` flag in Hive’s table properties, experimenting with Snappy, Gzip, and LZO. After profiling read/write throughput and CPU usage, I chose Snappy for its near‑zero compression overhead and 2–3× speed improvement. I updated the ETL scripts to use `SET hive.exec.compress.output=true;` and added `TBLPROPERTIES ('compression.codec'='snappy')`. The job now writes compressed ORC files (≈ 40 % of original size) and the MapReduce shuffle phase became half as heavy.

**Result** – Runtime dropped from 18 hours to 10 hours, saving ~USD 3,200/month in EC2 spot‑instance usage. Storage costs fell by 55 %. I learned that choosing the right codec is a simple yet powerful lever for balancing speed, cost, and data fidelity in large‑scale pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
