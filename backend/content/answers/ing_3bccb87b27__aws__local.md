---
qid: ing_3bccb87b27__aws__local
question: 'Explain: to call instead you say the event — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 414
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to replace a monolithic batch‑processing pipeline that ingested sensor data every hour and produced nightly reports. The business demanded real‑time insights for safety alerts—downtime could cost the company \$1 M per incident.

**Action (Design)**  
I built an event‑driven architecture using **Amazon Kinesis Data Streams** to ingest raw events, **AWS Lambda** for stateless processing, and **Amazon DynamoDB** as a durable state store. Each sensor emission became an *event* that triggered a Lambda function; the function updated aggregates in DynamoDB and published a “critical” event to **Amazon SNS** if thresholds were breached.  
To ensure *high availability*, I set Kinesis retention to 48 h, enabled shard auto‑scaling, and used Lambda’s retry mechanism with dead‑letter queues. For *cost efficiency*, the stream was provisioned at 1 MB/s burst and scaled down during low‑traffic periods, cutting $3k/month in data ingestion fees.

**Result**  
The new pipeline delivered alerts within **<2 seconds** of event arrival versus the previous **30‑minute** batch window. In a six‑month pilot we reduced safety incidents by **42%**, saving roughly **\$520k** annually. The system handled 10× the peak throughput without any additional cost.

**Reflection (Amazon Principles)**  
- *Customer Obsession*: I prioritized real‑time safety for field operators.  
- *Ownership & Dive Deep*: I scrutinized every component—shard sizing, retry logic—to guarantee reliability.  
- *Bias for Action & Deliver Results*: Rapid iteration from prototype to production saved the company half a million dollars and earned me recognition as a bar‑raiser in our architecture reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
