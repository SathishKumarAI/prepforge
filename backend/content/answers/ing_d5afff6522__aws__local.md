---
qid: ing_d5afff6522__aws__local
question: Why Sharding? — A Crash Course on Database Sharding
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 503
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:44-05:00'
sources: []
---

**Why sharding matters for ML‑heavy workloads**

> *Situation:* In 2023 my team at an e‑commerce platform built a recommendation engine that served millions of users per day. The raw clickstream table grew to **400 GB/day**, and a single MySQL instance began throttling reads, causing the model pipeline latency to spike from 200 ms to 1.2 s.

> *Task:* I had to design a distributed storage layer that could keep up with ingest rates, support real‑time analytics for model training, and still let us query by user ID without sharding headaches.

> *Action:*  
> 1. **Dive Deep** into the access patterns: ~80 % of reads were “user‑centric” (profile + recent clicks), while 20 % were global trend queries.  
> 2. Adopted **Amazon Aurora Serverless v2** for the transactional layer and switched to **Amazon DynamoDB** for hot user slices, using a composite key `(UserID, Timestamp)` with GSI on `EventType`.  
> 3. Implemented **horizontal sharding** across three DynamoDB partitions: `US_EAST_1`, `EU_WEST_2`, and `AP_SOUTHEAST_1`, each handling ~33 % of traffic.  
> 4. Added a **Kafka Connect** pipeline to stream changes into an S3 data lake for batch ML training, then used **Amazon SageMaker Processing** to aggregate per‑user features nightly.

> *Result:*  
> - Query latency dropped from 1.2 s to **<250 ms** (a 80 % reduction).  
> - Throughput scaled to **10×** the previous peak without new hardware.  
> - Operational cost fell by **18 %** due to serverless pay‑as‑you‑go and reduced RDS footprint.

> *Lesson:* Sharding isn’t just a scalability trick; it’s an architectural decision that aligns with **Customer Obsession** (fast, reliable recommendations) and **Ownership** (responsible scaling without over‑provisioning). When I first tried a single‑node MySQL, the failure cost us 3 hours of downtime—an experience that sharpened my focus on robust partitioning from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
