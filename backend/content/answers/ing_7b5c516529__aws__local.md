---
qid: ing_7b5c516529__aws__local
question: 'Explain: General — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 496
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:14-05:00'
sources: []
---

**Situation / Task**  
When I joined the Data Platform team at a social‑media startup, we were tasked with migrating our real‑time messaging stack—originally built on a custom WhatsApp‑style architecture—to AWS so that it could scale to 1 billion daily active users (DAU) while keeping latency under 200 ms.  

**Action**  
* **Ownership & Dive Deep:** I led a cross‑functional squad, first mapping the monolithic WhatsApp core into micro‑services: `Auth`, `MessageRouter`, `Presence`, and `MediaStore`.  
* **Design & AWS Services:**  
  * **Amazon EC2 Auto Scaling + ECS Fargate** for stateless routing pods.  
  * **Elastic Load Balancing (ALB)** with HTTP/2 to multiplex user connections.  
  * **Amazon DynamoDB Global Tables** for low‑latency, multi‑region message metadata.  
  * **Amazon S3 + CloudFront** for media blobs; **AWS Lambda@Edge** for edge‑based transcoding.  
* **Scalability & Availability:** Implemented per‑user sharding (hashing user ID → partition) to keep DynamoDB write throughput < 5 kWCU/partition, automatically scaling via DynamoDB Auto Scaling. Added a 99.999% SLA with Multi‑AZ deployments and cross‑region read replicas for failover.  
* **Cost & Trade‑offs:** Replaced on‑prem Redis cache with Amazon ElastiCache for Redis; saved ~30 % on ops while retaining sub‑10 ms cache hit times.  

**Result**  
Within 6 months, we handled 1.2 billion DAU with an average end‑to‑end latency of **170 ms**, reduced infra cost by **$18 M/year** versus the legacy stack, and achieved a 99.999% uptime during peak events (e.g., global product launch).  

> *Bar‑raiser notes:* Demonstrated true ownership, deep dive into data models, quantified impact (latency, cost), and lessons learned—most notably that sharding + DynamoDB Global Tables is the sweet spot for global messaging at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
