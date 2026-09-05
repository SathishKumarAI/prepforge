---
qid: vq_105bf5b851__star__local
question: what is the meaning of input split in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 337
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:15-05:00'
sources: []
---

**Situation:**  
When we migrated our nightly sales data pipeline from a legacy system to Hadoop, the daily ingestion volume jumped from 1 GB to over 20 GB, and our job start‑up times were ballooning because mappers were waiting on huge input splits.

**Task:**  
I had to re‑design the split strategy so that each mapper processed roughly 128 MB of data, reducing task launch overhead while keeping the number of reducers balanced for downstream aggregation.

**Action:**  
First I examined our custom `TextInputFormat` and noted it was using the default block size (64 MB) which produced too many tiny splits. I switched to `NLineInputFormat`, setting `linesPerSplit` to 500,000 so each split matched our record size (~256 bytes). Then I added a `FileInputFormat.setMaxInputSplitSize()` override to cap splits at 128 MB. Finally, I updated the job configuration to request more task slots and tuned speculative execution off for these short jobs.

**Result:**  
The number of mappers dropped from ~400 to ~160, cutting job start‑up time by 35%. The overall ETL cycle finished 20% faster, freeing up cluster resources for other workloads. I learned that tuning split size is a simple yet powerful lever for balancing parallelism against overhead in Hadoop jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
