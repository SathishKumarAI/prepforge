---
qid: ing_e26451eb79__aws__local
question: 'Explain: Stage 6: Sharding (10M+ users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 521
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:18-05:00'
sources: []
---

**Situation (S)** – I led the launch of a real‑time recommendation engine for a global e‑commerce platform that grew to **10 M+ active users**. Our existing monolithic model served only 200k users before latency hit 1 s and cost surged.

**Task (T)** – Design a sharding strategy that keeps inference < 100 ms, scales linearly, and stays under a $2 M/yr budget while keeping the team accountable for data integrity.

**Action (A)**  
* **Shard by user ID hash** → each shard hosts 1 M users.  
* Store feature vectors in **Amazon DynamoDB Global Tables** (multi‑region) for *low‑latency reads* and use **S3 + Athena** for heavy batch training data.  
* Deploy **AWS SageMaker endpoint** per shard, auto‑scaling via **Lambda** that routes requests based on the hash.  
* Use **API Gateway + Lambda@Edge** to cache hot predictions in CloudFront (TTL = 30 s).  
* Implement **DynamoDB Streams → Kinesis Data Firehose → S3** for incremental retraining, keeping model drift < 2%.  

**Result (R)** – After rollout:  
- Inference latency dropped from 1.2 s to **< 70 ms** (95th percentile).  
- Cost fell from $4 M/yr to **$1.8 M/yr** (35% savings).  
- Traffic handled 10× more users with no outages; Uptime 99.99%.

**Leadership Principles** – *Customer Obsession* (fast, reliable recommendations), *Ownership* (owning end‑to‑end pipeline), *Dive Deep* (analyzing shard distribution and cost per shard), *Bias for Action* (iterative deployment).  

**Bar‑raiser notes** – Looked for clear ownership, data‑driven impact, deep technical dive into AWS services, trade‑off analysis, and lessons from the 200k‑user failure that prompted the sharding design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
