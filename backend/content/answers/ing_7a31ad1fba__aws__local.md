---
qid: ing_7a31ad1fba__aws__local
question: 'Explain: Making sense of these patterns — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 463
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:37-05:00'
sources: []
---

**Answer (Amazon Style)**  

When I say *event‑driven* for a ML pipeline, I mean building the system so that each stage reacts to an incoming event rather than polling or running on a fixed schedule.  
- **Situation**: In my last role we had a real‑time fraud detection model that needed to score every transaction within 100 ms. The previous batch‑processing approach caused stale scores and missed $5M in prevented fraud per quarter.  
- **Task**: Redesign the pipeline to be event‑driven, reduce latency, and maintain cost efficiency.  
- **Action**: I orchestrated a serverless architecture using **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** for feature extraction and model inference (using SageMaker Runtime), and **Amazon DynamoDB** for stateful lookups. The Lambda function emits an event to **Amazon SNS** that triggers an alert workflow in **Step Functions** if fraud probability > 0.8. I added a CloudWatch alarm on the Kinesis lag metric; when lag exceeded 50 ms, an auto‑scaling rule increased shard count by 25%.  
- **Result**: End‑to‑end latency dropped to 75 ms (30% faster), fraud prevention revenue rose from $5M to $7.2M quarterly (+44%), and operational cost fell by 18% due to the pay‑as‑you‑go model of Lambda/Kinesis.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering instant, accurate fraud scores directly protects customers’ money.  
- **Ownership**: Took full responsibility for end‑to‑end latency and cost metrics.  

**Bar‑raiser Takeaway**  
A bar‑raiser will listen for: clear ownership of the problem, deep dive into AWS services (Kinesis vs SQS, Lambda concurrency limits), quantifiable impact (latency & revenue), and reflection on a failure point—here the batch lag that prompted the switch to event‑driven design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
