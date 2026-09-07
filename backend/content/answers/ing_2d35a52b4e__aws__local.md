---
qid: ing_2d35a52b4e__aws__local
question: 'Explain: Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 645
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:14-05:00'
sources: []
---

**Situation / Task**  
I was tasked to reduce the inference latency of a recommendation model that served 10 M requests/day while keeping costs below $20K/month. The model lived on SageMaker and read feature vectors from DynamoDB.

**Action**  
* **Cache at edge:** Deployed CloudFront with Lambda@Edge to cache the top‑50k popular item embeddings for 24 h, cutting downstream calls by ~70%.  
* **In‑memory store:** Added an ElastiCache Redis cluster (multi‑AZ) to hold a 1 TB feature cache. Warm‑up scripts preloaded cold-start data during off‑peak hours.  
* **Tiered invalidation:** Implemented a write‑through policy that updates Redis on every DynamoDB write and uses SNS/Step Functions to purge stale keys asynchronously.  
* **Fallback & fall‑back:** If Redis miss, Lambda falls back to S3‑stored pre‑computed embeddings, ensuring 99.9 % availability.

**Result**  
Latency dropped from 350 ms to 70 ms (80 % reduction). Cost fell to $15K/month and the system handled a 5× traffic spike without degradation.  

---

### Leadership Principles Anchored
* **Customer Obsession:** Latency reduction directly improved user experience.  
* **Ownership / Deliver Results:** I owned end‑to‑end design, from data pipeline to cache invalidation, delivering measurable performance gains.

### Design Rationale (AWS Services)
| Service | Role | Scalability | Availability | Cost |
|---------|------|-------------|--------------|------|
| CloudFront + Lambda@Edge | Edge caching of hot items | Global edge nodes auto‑scale | Multi‑AZ with 99.9 % SLA | Pay per request |
| ElastiCache Redis | In‑memory feature store | Cluster shards, auto‑scaling | Multi‑AZ replication | Managed service cost |
| S3 + Lambda | Fallback & bulk storage | Unlimited | Highly durable | Low storage cost |
| SageMaker | Model inference | Auto‑scaled endpoints | 99.9 % SLA | Pay per hour |

### Bar‑raiser Checklist
* **Ownership:** Took full responsibility for all layers—caching, data flow, and monitoring.  
* **Dive Deep:** Analyzed cache hit ratios, latency percentiles, and cost per request to iterate design.  
* **Quantified Impact:** 80 % latency reduction, $5K monthly savings, +5× traffic resilience.  
* **Learning from Failure:** Initial naive Redis setup caused hot‑spotting; we refactored key distribution and added read replicas after observing the spike.

This solution demonstrates a scalable, cost‑effective caching strategy that aligns with Amazon’s leadership principles and delivers tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
