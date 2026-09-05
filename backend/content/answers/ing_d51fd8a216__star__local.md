---
qid: ing_d51fd8a216__star__local
question: 'Explain: Retention Period — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 333
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:17-05:00'
sources: []
---

**Situation** – At my previous role, we built a real‑time fraud detection pipeline for a fintech client. The data came in via Amazon Kinesis Data Streams and our analytics team needed to replay events from the last 48 hours during nightly model retraining.

**Task** – I had to ensure that the stream retained enough records so that every event could be reprocessed without missing any, while staying within AWS cost limits and meeting latency constraints for new data ingestion.

**Action** – I configured the Kinesis shard’s retention period from the default 24 hours to 72 hours using the `UpdateShardCount` API and set the stream’s `RetentionPeriodHours` property through CloudFormation. I also implemented a Lambda that monitored the stream’s `GetRecords` latency, throttling ingestion if back‑pressure exceeded 200 ms. To keep costs down, I enabled the new “On-Demand” mode for shards that were idle most of the time, and set up CloudWatch alarms to auto‑scale shards during peak bursts.

**Result** – The adjusted retention period allowed nightly batch jobs to replay all required events, improving model accuracy by 12 % over a two‑month window. Costs increased only 8 % due to on‑demand scaling, and ingestion latency stayed under the SLA of 300 ms. I learned how Kinesis’s retention setting balances data durability against cost and throughput, and that proactive monitoring is key to maintaining both reliability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
