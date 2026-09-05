---
qid: ing_22a0d7db06__star__local
question: 'Explain: In-Progress Jobs — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 380
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:14-05:00'
sources: []
---

**Situation** – While leading the data‑engineering team at my last company, we had a nightly ETL pipeline that ran on Kubernetes. As our customer base grew from 50 to 500 k daily active users, the number of scheduled jobs exploded from ~200 to over 5,000. The existing cron‑based scheduler started missing deadlines and often left jobs in an “in‑progress” state for hours, causing downstream services to stall.

**Task** – I was tasked with designing a distributed job scheduler that could reliably track job state, retry failed tasks, balance load across worker nodes, and expose real‑time metrics to the operations dashboard—all within 90 days.

**Action** – I chose a microservice architecture: a lightweight REST API gateway for job submission, a Redis‑based queue (using BullMQ) for task distribution, and a PostgreSQL table for persistent state. Each worker pulled jobs from Redis, updated status in Postgres (`queued → running → completed/failed`), and emitted Prometheus metrics. I added an “in‑progress” watchdog that checked timestamps and automatically re‑queued orphaned tasks after 30 minutes of inactivity. For scaling, I leveraged Kubernetes Horizontal Pod Autoscaler on the worker service, using CPU and queue depth as metrics.

**Result** – The new scheduler reduced job lateness from 18% to <1%, cut average job latency by 35%, and eliminated the “in‑progress” hang issue. Real‑time dashboards now display per‑node throughput and failure rates with 5‑second granularity, giving ops instant visibility. I learned that coupling lightweight queues with persistent state and a clear watchdog policy is key to building resilient distributed schedulers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
