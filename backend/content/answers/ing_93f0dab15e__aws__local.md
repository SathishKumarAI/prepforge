---
qid: ing_93f0dab15e__aws__local
question: 'Explain: Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:29-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
When I joined a video‑streaming start‑up, the product team asked me to architect a **live comment system** that would surface real‑time feedback while keeping latency below 200 ms for millions of concurrent viewers.

**Action (Dive Deep + Bias for Action)**  
I broke the problem into three layers:  
1. **Ingress** – API Gateway + Lambda to validate and enqueue comments in an Amazon SQS FIFO queue.  
2. **Processing** – A step‑functions state machine triggers a Kinesis Data Stream that shards 10 M events/s; each shard feeds a Lambda that enriches the comment (user reputation, profanity filter) and writes to DynamoDB with a *partition key* of `videoId#timestamp`.  
3. **Delivery** – A WebSocket API Gateway pushes enriched comments to subscribed clients.  

To guarantee high availability I used **AWS Global Accelerator** to route traffic to the nearest edge location, and leveraged DynamoDB’s on‑demand capacity for bursty loads. Cost was controlled by using *Reserved Instances* for Lambda concurrency and *SQS long polling* to reduce empty receives.

**Result (Deliver Results)**  
Within 4 weeks we saw:  
- **99.9 %** of comments delivered within the target latency.  
- A **30 % drop** in client‑side buffering compared to the legacy poll‑based system.  
- Operational cost stayed under **$1,200/month**, a **25 %** savings versus a monolithic architecture.

**Reflection (Bar‑raiser)**  
I learned that sharding Kinesis by `videoId` was essential; a single shard would have throttled at 100 k events/s, causing a cascading failure. I documented this trade‑off and built automated alerts for shard utilization, ensuring the system scales linearly as viewership grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
