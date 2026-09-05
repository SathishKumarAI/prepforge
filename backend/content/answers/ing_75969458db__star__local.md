---
qid: ing_75969458db__star__local
question: 'Explain: Operational complexity — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:43-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the backend team for a video‑streaming startup that hit 1 M daily active users in just six months. Our single PostgreSQL instance was choking on read/write latency; query times spiked to 400 ms during peak hours, and we risked violating our SLA of <200 ms.

**Task** – I had to design a scalable data layer that could handle the surge while keeping cost in check. The goal was to partition the user table so that each shard would fit comfortably on an EC2 instance with 32 GB RAM, without breaking existing APIs or compromising consistency.

**Action** – I chose horizontal sharding based on `user_id % N` where N = number of shards (initially 4). Using AWS RDS for PostgreSQL, I created separate DB instances and employed a lightweight proxy layer (PgBouncer) to route queries by hash. I added a sharding middleware in Node.js that intercepted every request, calculated the shard key, and directed it to the correct instance. To maintain cross‑shard consistency for global metrics, I implemented an asynchronous event bus via Amazon SNS/SQS that aggregated counts into a central analytics DB.

**Result** – Latency dropped from 400 ms to <120 ms during peak loads, and read throughput increased by 3× without additional on‑prem hardware. The cost per request fell by 15%, and we avoided an expensive vertical scaling cycle. I learned that careful key design and a lightweight routing layer can make sharding both powerful and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
