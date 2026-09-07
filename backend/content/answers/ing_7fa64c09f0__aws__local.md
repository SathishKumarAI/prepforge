---
qid: ing_7fa64c09f0__aws__local
question: 'Explain: Message — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 376
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:50-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a feature to ingest real‑time telemetry from IoT devices into an ML pipeline that predicts equipment failure. The raw stream exceeded 10 M messages/sec and our existing polling approach caused >2 min lag, hurting model freshness.

**Action**  
I designed a **Kafka‑on‑AWS** solution using Amazon MSK for durable, low‑latency queuing, backed by an auto‑scaling Kinesis Data Firehose that shards to S3 for batch training.  
* *Ownership*: I owned the end‑to‑end flow from device → queue → analytics.  
* *Dive Deep*: I profiled throughput and discovered 70 % of traffic was bursty; added a “pre‑buffer” Lambda layer to normalize rates.  
* *Bias for Action*: Deployed in two regions within 48 h, using CloudWatch alarms for lag >200 ms.  
* *Invent & Simplify*: Replaced manual S3 ingestion scripts with a serverless Glue job that auto‑parses Parquet and feeds Amazon SageMaker training jobs.

**Result**  
Latency dropped from 2 min to <300 ms (95th percentile). Model accuracy improved by 12 % because of fresher data, and costs fell 35 % thanks to spot instance usage for Glue.  

*Bar‑raiser focus*: I demonstrated clear ownership, deep technical insight into Kafka/Kinesis trade‑offs, quantified performance gains, and documented lessons learned when the initial batch job failed due to schema drift (fixed by adding a validation Lambda).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
