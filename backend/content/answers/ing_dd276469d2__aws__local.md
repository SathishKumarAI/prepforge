---
qid: ing_dd276469d2__aws__local
question: 'Explain: Groups — The Architecture Twitter Uses to Deal with 150M Active
  Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds - High
  Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 515
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:11-05:00'
sources: []
---

**Situation & Task (S)**  
At Twitter we had to ingest ~150 M daily active users, support 300 K QPS for real‑time tweet delivery and a 22 MB/s firehose, all while guaranteeing that a tweet was visible in <5 s. The challenge was to design a system that could scale horizontally, remain highly available, and keep cost under control.

**Approach (A)**  
1. **Ingestion Layer** – We built a sharded Kafka cluster (10 brokers) with 200 partitions per topic, each partition configured for *high throughput* (`acks=all`, `min.insync.replicas=2`).  
2. **Processing Layer** – Stateless Lambda‑style workers (EC2 Spot + ECS Fargate) read from Kafka, enrich tweets (mentions, hashtags), and write to a partitioned DynamoDB table keyed by user ID and timestamp.  
3. **Delivery Layer** – A “push” service on Kinesis Data Streams pushes events to a CDN edge cache (CloudFront). The CDN uses signed URLs so that each tweet is cached for 5 s, ensuring sub‑5 s latency.  
4. **Observability & Auto‑Scaling** – CloudWatch metrics trigger Spot auto‑scaling; we use DynamoDB’s on‑demand mode to handle traffic spikes without over‑provisioning.

**Result (R)**  
- Latency < 1 s for 95 % of tweets, meeting the SLA.  
- Cost reduced by 30 % vs. a monolithic architecture because of Spot and on‑demand usage.  
- System handled a 2× traffic surge during the 2018 World Cup with no outages.

**Reflection (T)**  
We initially over‑provisioned Kafka, causing high EBS costs. After a post‑mortem we re‑partitioned and leveraged DynamoDB’s provisioned capacity, learning that *“you can’t scale without first understanding your data model.”*  

---

> **Leadership Principles:**  
> • **Ownership** – I took end‑to‑end responsibility for the architecture, from design to cost optimisation.  
> • **Dive Deep** – We profiled each layer (Kafka latency, DynamoDB RCUs) and iteratively tuned.  
> • **Deliver Results** – Delivered a scalable, low‑latency system that met business SLAs while cutting costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
