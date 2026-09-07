---
qid: ing_371f2f766b__aws__local
question: 'Explain: Manage asynchronous workflows — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:16-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession, Ownership.*  
> **Context (S):** At my previous firm we had to orchestrate millions of image‑processing jobs nightly. The legacy monolith caused 30 % SLA drift and cost $2M/year in idle EC2 capacity.  
> **Task (T):** Build a decoupled, event‑driven pipeline that could scale horizontally while guaranteeing at‑least‑once delivery and minimal latency.  
> **Action (A):**  
> * Adopted **Amazon SNS** as the publish layer for job creation events and **SQS FIFO** queues as the subscription buffer. Each image job was published to an SNS topic; every worker Lambda subscribed via SQS, ensuring durable queuing and deduplication.  
> * Implemented a **dedicated DLQ** (dead‑letter queue) per topic to capture failures after 5 retries, automatically triggering CloudWatch alarms.  
> * Leveraged **AWS Step Functions** for orchestrating downstream microservices (resize, watermark, thumbnail). This gave us visibility and rollback capabilities.  
> * Introduced a **cost‑optimisation rule**: SQS long polling + Lambda provisioned concurrency capped at 500, reducing EC2 usage from 24 h to 4 h per day.  
> **Result (R):** SLA improved from 70 % to 99.9 %, throughput rose from 5k to 120k jobs/day, and annual cost dropped $1.8M. The architecture now supports auto‑scaling without manual intervention, meeting our “ownership” commitment.  

**Bar‑raiser cues:**  
* Demonstrated ownership by redesigning the entire pipeline.  
* Dive deep into AWS services (SNS vs SQS FIFO vs DLQ).  
* Quantified impact with real metrics (SLA %, cost savings).  
* Learned from failure: initial monolith caused 30 % SLA drift; we pivoted to event‑driven, immutable queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
