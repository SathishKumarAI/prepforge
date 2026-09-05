---
qid: ing_ecac74da47__star__local
question: 'Explain: Kinesis Client Library — Amazon Kinesis Data Streams Terminology
  and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 416
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:14-05:00'
sources: []
---

**Situation** – While redesigning the click‑stream processing for our e‑commerce platform, we had to ingest over 20 M events per day and keep latency below 300 ms. The team chose Amazon Kinesis Data Streams as the backbone.

**Task** – I was responsible for building a fault‑tolerant consumer that could read from multiple shards, maintain order within each shard, and automatically recover from failures without data loss.

**Action** – I used the Kinesis Client Library (KCL) in Java. First, I mapped our stream to 10 shards, each representing a logical partition of the incoming records. The KCL instantiated a **record processor** per shard; inside it, I called `getRecords` with an iterator type of `TRIM_HORIZON` for initial back‑fill and switched to `LATEST` once live traffic began. To guarantee at‑least‑once delivery, the processor wrote a **checkpoint** to DynamoDB after every 100 records or every 30 seconds, whichever came first. The KCL’s lease manager automatically handled shard ownership—shards were split or merged based on usage thresholds, and the library rebalanced consumers accordingly. I also enabled enhanced fan‑out to reduce latency for our high‑frequency events.

**Result** – The pipeline processed 22 M records daily with a mean end‑to‑end latency of 210 ms, staying well under the SLA. Checkpoint failures dropped from 3% to <0.1%, and we eliminated manual shard rebalancing. I learned that understanding KCL’s shard iterator types, checkpoint strategy, and lease coordination is crucial for building scalable, reliable streaming applications on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
