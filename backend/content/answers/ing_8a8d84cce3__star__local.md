---
qid: ing_8a8d84cce3__star__local
question: 'Explain: Capacity Mode — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 308
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:33-05:00'
sources: []
---

**Situation** – In a retail analytics project I was tasked with ingesting up to 10 GB of click‑stream data per hour from multiple mobile apps into Amazon Kinesis Data Streams for real‑time recommendation scoring. The existing stream used the default On‑Demand capacity mode, but latency spikes and throttling were hurting our downstream Lambda functions.

**Task** – I had to redesign the stream’s throughput model so it could sustain peak traffic without costly overprovisioning, while keeping cost predictable.

**Action** – I switched the stream to Provisioned Capacity Mode, allocating 200 shards (5 MiB/sec each) based on a detailed burst analysis of historical traffic. I implemented shard scaling logic using CloudWatch metrics and an AWS Lambda auto‑scaling target that increased shards by 10% during predicted peaks. I also enabled Enhanced Fan-Out to give each consumer its own read throughput, eliminating read contention.

**Result** – Throughput throttles dropped from 12 % to <1 %, latency fell below 200 ms for 99.5 % of records, and overall monthly cost decreased by ~18 % compared to the On‑Demand baseline. I learned that carefully tuning shard count and consumer isolation is key to balancing performance and spend in Kinesis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
