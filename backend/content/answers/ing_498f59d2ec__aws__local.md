---
qid: ing_498f59d2ec__aws__local
question: 'Explain: Common Patterns — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 459
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:49-05:00'
sources: []
---

**Situation / Task**  
While building a recommendation engine for an e‑commerce platform, we needed to decouple data ingestion from model training so that new product feeds could be added without downtime. I owned the solution and drove it from concept to production.

**Action**  
I designed a **Pub/Sub pattern** using **Amazon SNS** (topic publisher) → **Amazon SQS** (durable queue) → **AWS Lambda** (consumer). Each feed publishes JSON events to SNS; SQS buffers them, guaranteeing at‑least‑once delivery and decoupling producers from consumers. Lambda streams the batch into an **Amazon Kinesis Data Analytics** job that aggregates clickstreams in real time and writes results to **DynamoDB** for fast retrieval by downstream services.

*Why these choices?*  
- **Scalability:** SNS scales to millions of messages per second; SQS auto‑scales and can handle burst traffic. Lambda’s concurrency limits are adjustable, and Kinesis shards scale horizontally.  
- **Availability:** All services run in multiple AZs with built‑in fault tolerance; SQS provides dead‑letter queues for error handling.  
- **Cost:** Pay‑as‑you‑go model—SNS ~ $0.50/1M messages, SQS ~$0.40/1M receives, Lambda $0.20/million invocations, Kinesis $0.015 per shard‑hour.

**Result**  
After launch, ingest latency dropped from 8 s to <300 ms (95th percentile). Model refresh rate improved by 4×, enabling real‑time recommendations and a 12% lift in conversion.  

**Bar‑raiser cues I met:** ownership of end‑to‑end flow, deep dive into failure modes (DLQs), quantified impact, and lessons learned—automated retry logic reduced data loss from 0.3% to <0.01%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
