---
qid: ing_0783053de3__aws__local
question: 'Explain: High Level Design — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 457
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:53-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* A SaaS client needed a real‑time notification service for 5 M daily users to push email/SMS/FCM alerts during peak traffic (10 k/sec).  
> *Task:* Design an elastic, fault‑tolerant system that guarantees ≤200 ms latency and 99.9% availability while keeping cost < $2k/month.  
> *Action:*  
> 1. **Event ingestion** – use **Amazon Kinesis Data Streams** (shard size 1 M records/sec) to buffer incoming events, auto‑scaling with CloudWatch alarms.  
> 2. **Processing** – Lambda functions triggered per shard record; each batch writes a “notification envelope” to **DynamoDB Global Tables** (partition key = user_id).  
> 3. **Dispatch** – SNS topics for email/SMS/FCM, backed by **AWS Pinpoint** for analytics.  Lambda polls DynamoDB Streams and publishes to the appropriate topic.  
> 4. **Reliability** – Dead‑letter queues on SQS keep failed messages; CloudWatch metrics trigger retries.  
> 5. **Cost control** – Use Lambda provisioned concurrency only during predicted peaks (via scheduled scaling), and Kinesis “On-Demand” mode otherwise.  
> *Result:* Deployed to production in 3 weeks; latency dropped from 1.2 s to <200 ms, 99.95% availability over 6 months, and total monthly spend $1,750 (≈30 % under budget).  

**Dive Deep & Bias for Action**

I wrote a **unit‑level test harness** that simulated 20 k events/sec, uncovered a DynamoDB write bottleneck, and added an auto‑scaling policy—preventing a potential outage. This proactive “fail‑fast” mindset is what bar‑raisers look for: ownership of every layer, deep metrics, and continuous learning from simulation failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
