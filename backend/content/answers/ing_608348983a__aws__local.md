---
qid: ing_608348983a__aws__local
question: 'Explain: Publisher — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:01-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a monolithic data pipeline that ingested millions of events per day from IoT devices. The team’s goal was to decouple producers and consumers so that new analytics services could be added without downtime. I owned the redesign of our “Publisher‑Pub/Sub” layer.

**Action – Design & AWS Services**  
I proposed an event‑driven architecture using **Amazon Kinesis Data Streams** for high‑throughput ingestion, backed by **Kinesis Data Firehose** to load data into S3 and Redshift. To provide durable message delivery I added a small **SNS topic** that publishes a “publish” notification; each consumer subscribes via an **SQS queue** (FIFO) so ordering is preserved when needed. For scaling, the Kinesis shards auto‑scale with CloudWatch alarms on `GetRecords.IteratorAgeMilliseconds`. Availability was ensured by deploying the stream in a **Multi‑AZ VPC** and enabling **Kinesis Data Streams’ enhanced fan‑out** for low latency to critical services.

**Result**  
After deployment we saw a 4× reduction in end‑to‑end processing time (from 15 min to 3.75 min) and a 99.9% message delivery success rate. The new system also cut operational cost by 22% through auto‑scaling and reduced manual batch jobs.

**Reflection & Bar‑raiser cues**  
I demonstrated **Ownership** by leading the migration end‑to‑end, **Dive Deep** by tuning shard counts with real metrics, and **Bias for Action** by iterating on the design within two sprints. The biggest learning was that over‑provisioning shards initially caused higher costs; we fixed this by implementing a dynamic scaling policy. This showcases measurable impact, depth of understanding, and continuous improvement—exactly what bar raisers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
