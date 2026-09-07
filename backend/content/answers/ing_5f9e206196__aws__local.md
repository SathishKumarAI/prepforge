---
qid: ing_5f9e206196__aws__local
question: 'Explain: OLTP database - DynamoDB — Tech-Stacks-Live-Apps/Grab/OrderProcessing/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 391
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:16-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to migrate the order‑processing pipeline from a legacy MySQL OLTP system to a serverless architecture on AWS so we could scale during flash sales without provisioning capacity in advance.

**Action**  
I chose **Amazon DynamoDB** for its single‑digit millisecond latency and managed scaling.  
* **Data model:** Orders as a partition key (`OrderId`) with GSI on `CustomerId` to support fast customer lookups.  
* **Write path:** Use **DynamoDB Streams + Lambda** to trigger inventory updates, ensuring ACID‑like guarantees via conditional writes.  
* **Read path:** API Gateway + Lambda for CRUD, backed by DynamoDB caching in **ElastiCache Redis** for hot orders.  
* **Monitoring:** CloudWatch metrics and X-Ray traces; set up auto‑scaling policies based on 95th percentile write latency.

I also built a CI/CD pipeline with **AWS CodePipeline** that deploys to multiple regions, guaranteeing high availability and disaster recovery.

**Result**  
- Reduced average order‑processing time from **250 ms (MySQL)** to **48 ms (DynamoDB)**.  
- Cut operational costs by **35%** by eliminating on‑demand EC2 instances.  
- Achieved 99.999% uptime during a 24‑hour flash sale, handling peak traffic of **10k RPS** without throttling.

**Reflection**  
I learned that choosing the right key schema and leveraging DynamoDB Streams can replace complex transactional logic while keeping cost predictable.  

> **Leadership Principles:** *Customer Obsession* (fast, reliable orders), *Ownership* (full responsibility for migration and performance tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
