---
qid: ing_eb3eae1805__aws__local
question: 'Explain: Interviewer — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 418
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:06-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*.  
> **Situation:** I was tasked with designing a real‑time comment system for a streaming platform that needed to support 10 M concurrent viewers and deliver sub‑200 ms latency.  
> **Task:** Build a scalable, highly available architecture that allows users to post, edit, delete, and retrieve comments while ensuring consistency and moderation.  
> **Action:**  
> * **Data model** – Partition by stream ID; store comment shards in DynamoDB with GSI for user‑by‑time queries.  
> * **Write path** – API Gateway → Lambda (idempotent) → Kinesis Data Streams → Firehose to DynamoDB. This decouples producers from the database and guarantees at‑least‑once delivery.  
> * **Read path** – Global Secondary Index on `created_at` + ElasticCache Redis for hot comments; fallback to DynamoDB if cache miss.  
> * **Moderation** – Lambda triggers a SageMaker endpoint that scores profanity/abuse; flagged comments go to an SQS DLQ and are hidden from users.  
> * **Scalability & cost** – Auto‑scaling Lambda, Kinesis shards (auto‑scale), DynamoDB on-demand; estimated $0.75 M/month at peak vs $0.45 M for legacy monolith.  
> * **Availability** – Multi‑AZ deployment; 99.999% SLA via DynamoDB global tables and CloudFront caching.  
> **Result:** Deployed in Q3, we handled 12 M concurrent users with <180 ms latency, dropped moderation errors by 92%, and cut ops cost by 30%.  
> **Learnings:** Early monitoring of Kinesis lag revealed a hidden bottleneck; adding an extra shard avoided future capacity issues. This iteration taught me to validate throughput assumptions against real traffic patterns before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
