---
qid: ing_65827c7c51__star__local
question: 'Explain: Requirements Gathering — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:56-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a new batch‑processing engine to run nightly fraud‑detection models across millions of transactions. The existing cron system couldn’t guarantee SLA compliance or scale with peak loads.

**Task:**  
I had to design a distributed job scheduler that could handle thousands of jobs per minute, enforce priority queues, provide fault tolerance, and expose metrics for monitoring.

**Action:**  
I started by gathering requirements from data scientists, ops, and security teams: 99.9% uptime, max latency <2 s under load, and isolation between model versions. I chose a master–worker architecture with a central Redis‑based job queue (using sorted sets for priority) and workers implemented in Go for low overhead. To ensure idempotency, each job carried a deterministic hash; a Bloom filter prevented duplicates. For fault tolerance, we used etcd to store worker heartbeats and performed leader election via Raft. Metrics were pushed to Prometheus, and alerts triggered when queue depth exceeded thresholds. I also added an API gateway in front of the scheduler for dynamic scaling based on CPU usage.

**Result:**  
The new scheduler handled 12 k jobs per minute during peak fraud‑season spikes with a mean latency of 1.8 s, exceeding our SLA by 30%. Uptime hit 99.97% over six months. I learned that early stakeholder alignment and choosing the right distributed primitives (Redis queues + etcd Raft) can dramatically reduce operational complexity while meeting stringent performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
