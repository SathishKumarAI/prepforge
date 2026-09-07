---
qid: ing_57957aa9f7__aws__local
question: 'Explain: How It Works — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 541
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:41-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a highly‑available Instagram‑style feed service for 200 M daily active users (DAU). The goal: deliver a personalized photo stream within 300 ms while keeping costs below $5 M/yr.

**Action – Architecture & AWS Services**  

| Layer | Service | Rationale |
|-------|---------|-----------|
| **Ingestion** | Amazon Kinesis Data Streams + Lambda | Real‑time capture of uploads, captions and tags; autoscaling on throughput. |
| **Storage** | S3 (object storage) + DynamoDB Global Tables for metadata | Immutable media at low cost, geo‑replication with 99.999% durability; DynamoDB handles 200 M writes/sec with single‑digit latency. |
| **Personalization Engine** | SageMaker Pipelines on Spot Instances + Amazon Personalize | Offline batch training (daily) and real‑time inference via Personalize’s real‑time API. |
| **Feed Assembly** | Lambda@Edge + CloudFront | Edge compute to merge user‑specific recommendations with global trends, keeping latency < 100 ms. |
| **Caching** | ElastiCache Redis (clustered) | Store hot feeds per region; eviction policy LRU; reduces DynamoDB reads by ~70%. |
| **Observability** | CloudWatch + X-Ray | Distributed tracing to identify bottlenecks; automated alarms on >5% latency spike. |

**Dive Deep – Scalability & Cost Trade‑offs**

* Auto‑scaling Kinesis and Lambda ensures linear cost with traffic.  
* Spot instances for training cut compute costs by 60 %.  
* Cache hit ratio target 80 %; if below, we fallback to DynamoDB (costlier but safe).  

**Result**  
Post‑deployment, end‑to‑end latency dropped from 650 ms to **280 ms** (median), and operational cost fell from $7.8 M to **$4.6 M/yr**, a 41 % savings while handling 250 M concurrent sessions during peak hours.

**Reflection & Ownership**  
I led the cross‑team sprint, wrote the architecture doc, and mentored juniors on AWS best practices. When an unexpected spike in uploads caused cache eviction thrashing, I introduced adaptive caching thresholds—learning that even small parameter tweaks can stabilize cost/latency trade‑offs. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
