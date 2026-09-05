---
qid: ing_3583d58411__star__local
question: 'Explain: And an example of a pretty standard — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 359
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:13-05:00'
sources: []
---

**Situation** – While leading a data‑engineering sprint for a fintech startup, we had to ingest real‑time transaction streams and store them for downstream fraud‑detection ML models. The volume was ~500 k records per minute, with high write throughput and the need for flexible schema.

**Task** – Choose an AWS NoSQL database that could handle the load, provide low latency reads for model inference, and allow rapid iteration on data fields without downtime.

**Action** – I compared DynamoDB, DocumentDB (MongoDB‑compatible), and Amazon Neptune. I benchmarked write throughput and cost per GB using the AWS SDK with synthetic payloads mimicking our schema changes. DynamoDB offered auto‑scaling and 1 ms single‑digit read latency but charged per provisioned capacity; DocumentDB gave us MongoDB drivers and easier migrations but had higher I/O costs at scale; Neptune was out of scope for graph analytics. I settled on DynamoDB, adding a global secondary index for the “merchant_id” field to support ad‑hoc queries by ML engineers. I also implemented DynamoDB Streams to trigger Lambda functions that push batches into an S3 data lake for offline training.

**Result** – The system handled 600 k writes/min with <5 ms latency, and our fraud model’s inference time dropped from 200 ms to 80 ms due to faster lookup. Costs were 25% lower than a DocumentDB baseline, and schema changes required no downtime. I learned that profiling realistic workloads early can decisively narrow the NoSQL options in AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
