---
qid: ing_4f254eb99e__star__local
question: 'Explain: Distributed Job Queue — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:39-05:00'
sources: []
---

**Situation:** At my last company we had a nightly batch pipeline that processed user telemetry from our mobile app. The job queue was a single Redis instance, and during peak traffic it would spike to 10k concurrent jobs, causing out‑of‑memory crashes and a 30 % increase in latency.

**Task:** I needed to design a fault‑tolerant distributed job scheduler that could scale horizontally, guarantee at‑least‑once delivery, and keep the system cost‑effective while keeping end‑to‑end latency under 2 s for 95 % of jobs.

**Action:** I chose a sharded Kafka cluster as the backbone because it offers partitioned logs with built‑in replication. Each worker subscribes to its own topic partition, enabling parallelism and backpressure control via consumer lag metrics. For job metadata I used PostgreSQL with advisory locks to avoid duplicate processing. I added a Redis cache for quick lookups of “already processed” IDs to eliminate replays. The scheduler itself ran on Kubernetes, autoscaling pods based on Kafka consumer lag and CPU usage. We also implemented exponential backoff retries and dead‑letter queues for persistent failures.

**Result:** After deployment the system handled 50 k jobs per minute with zero crashes; average latency dropped from 2.8 s to 1.4 s, and we reduced infrastructure costs by 18 % through efficient autoscaling. I learned that combining Kafka’s durable streams with a lightweight lock manager can deliver both scalability and reliability without over‑engineering the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
