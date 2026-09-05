---
qid: ing_b1c934a844__star__local
question: 'Explain: Shard — Amazon Kinesis Data Streams Terminology and concepts -
  Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 319
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:09-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time fraud detection pipeline for credit card transactions. The incoming stream hit 12 k records per second, and our analytics engine could only ingest 5 k records/sec before latency spiked.

**Task:**  
I had to scale the ingestion layer so that the processing lag stayed under one second while keeping costs in check.

**Action:**  
We started by examining Kinesis shards. Each shard supports up to 1 MB/s or 1000 putRecords/second, whichever limit is hit first. I calculated we needed at least 12 shards (12 k / 1 k) and added an extra buffer for burst traffic, settling on 14 shards. Then I re‑architected the producer to use a hash key based on the transaction ID, ensuring even distribution across shards. On the consumer side, I deployed 7 parallel Kinesis Data Analytics workers, each reading from two shards, and enabled enhanced fan‑out so consumers didn’t share read throughput.

**Result:**  
After deployment, ingestion latency dropped from 4 s to under 0.8 s during peak hours. Throughput met the 12 k/sec requirement with a 15% margin, and cost increased only by 18% compared to our previous single‑shard setup. I learned that understanding shard limits and smart key design is critical for scaling Kinesis without overprovisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
