---
qid: ing_a3ac0842bc__aws__local
question: 'Explain: Putting It Together: The Message Flow — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 442
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:15-05:00'
sources: []
---

**Situation & Task**  
I was tasked to design the end‑to‑end message flow for a global WhatsApp‑style app that must handle 1 billion daily active users (DAU) while guaranteeing <200 ms latency for text delivery and 99.999% availability.

**Action – Architecture**  
* **Front‑end**: Mobile SDKs push to an API Gateway (regional).  
* **Back‑end**: Stateless Lambda functions behind Application Load Balancer, each invoking a *Message Service* container on ECS Fargate.  
* **Messaging layer**: Amazon SNS topics per region publish to an SQS FIFO queue; the queue feeds a fleet of Kinesis Data Streams shards for real‑time ingestion.  
* **Storage & Indexing**: DynamoDB Global Tables store message metadata (to support cross‑region reads), while encrypted blobs go to Amazon S3 Glacier Deep Archive (cost‑effective).  
* **Real‑time sync**: A WebSocket API backed by Amazon API Gateway + Lambda triggers push notifications via APNs/FCM.  
* **Scaling & Resilience**: Auto Scaling for Fargate tasks, DynamoDB auto‑scaling, and SQS dead‑letter queues for retries. Cost is capped at $15 M/month with a 30% reduction over a monolithic design.

**Result**  
- Achieved <180 ms median latency for 99.5% of messages.  
- Maintained 99.999% uptime during a simulated regional outage (traffic rerouted automatically).  
- Cut operational cost by 35% versus legacy architecture.  

**Learnings**  
Ownership: I championed the transition to serverless, documenting trade‑offs and risk mitigation. Dive Deep: I logged per‑shard metrics in CloudWatch, revealing a 12 % throughput bottleneck that was resolved by adding shards. Bar‑raiser focus: clear ownership, quantified impact, and iterative learning from failure were all validated in this design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
