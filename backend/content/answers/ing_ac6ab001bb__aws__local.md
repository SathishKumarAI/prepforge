---
qid: ing_ac6ab001bb__aws__local
question: 'Explain: Routing algorithm — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 520
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:58-05:00'
sources: []
---

**Situation (S)**  
I was leading a data‑engineering team for a SaaS analytics platform that had to serve *1 M active users* with real‑time model inference. The existing routing layer was single‑threaded and bottlenecked at the database, causing 250 ms latency spikes during peak traffic.

**Task (T)**  
Redesign the routing algorithm using *vertical* (sharding by user ID) vs *horizontal* (partitioning by feature set) partitioning so that inference requests hit a single node with sub‑50 ms latency and 99.9 % availability, while keeping cost below $5K/month.

**Action (A)**  
1. **Vertical Partitioning:** Migrated the user metadata to **DynamoDB Global Tables**—one table per region—to localize read traffic.  
2. **Horizontal Partitioning:** Moved feature vectors into an **S3 data lake** partitioned by *model version* and *feature type*.  
3. Built a lightweight **Lambda@Edge** front‑end that uses the user’s UUID to lookup the correct DynamoDB shard, then streams the required features from S3 via **Amazon SageMaker Runtime** for inference.  
4. Employed **AWS Step Functions** to orchestrate fallback logic: if the primary partition is down, automatically redirect to a secondary region.  
5. Implemented **CloudWatch metrics + Kinesis Data Streams** to monitor latency and error rates in real time.

**Result (R)**  
- Reduced average inference latency from 250 ms to **42 ms** (84% improvement).  
- Achieved **99.97 % uptime** over a 6‑month period.  
- Cut operational cost by **30 %** ($3.5K/month) through serverless compute and auto‑scaling.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered faster, more reliable insights to users.  
- *Ownership & Dive Deep*: Designed a fault‑tolerant routing layer that balances performance with cost.  

Bar‑raiser notes: clear ownership, quantified impact (latency, uptime, cost), deep dive into partitioning trade‑offs, and evidence of learning from the initial bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
