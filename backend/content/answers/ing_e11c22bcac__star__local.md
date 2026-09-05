---
qid: ing_e11c22bcac__star__local
question: 'Explain: Job Execution Table — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 353
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:53-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had an on‑prem data lake that ingested market feeds every minute. Our analytics team ran nightly batch jobs to generate risk reports; the existing cron‑based scheduler crashed under load and couldn’t guarantee SLA of 5 minutes for report delivery.

**Task** – I was tasked with designing a distributed job scheduler that could run hundreds of interdependent ETL pipelines, provide fault tolerance, and expose a REST API for dynamic job creation while keeping latency below 30 ms for status queries.

**Action** – I chose a leader‑election based architecture using ZooKeeper to coordinate workers. Jobs were stored in a sharded PostgreSQL table with a `job_execution` schema that logged start/end timestamps, state, and retry count. Workers pulled jobs via a Kafka queue; each worker executed the job inside a Docker container, reported back to the table, and updated metrics in Prometheus. I added a “dead‑letter” topic for failed jobs and an exponential backoff retry policy. For SLA guarantees, I introduced a priority queue that preempted low‑priority jobs when high‑priority ones arrived.

**Result** – The new scheduler reduced report delivery time from 12 minutes to under 4 minutes, achieved 99.9% uptime during peak load, and cut operational overhead by 40 %. I learned the importance of separating job metadata from execution state and how observability (Prometheus+Grafana) drives rapid incident response in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
