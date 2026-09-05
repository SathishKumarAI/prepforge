---
qid: ing_dc1f046fdf__star__local
question: 'Explain: Distributed Job Scheduler — System Design Interview Cheat Sheet
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 338
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:13-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a fault‑tolerant job scheduler for our data‑pipeline platform that handled over 10,000 daily ETL jobs across three geo‑regions. The existing monolithic scheduler kept hitting timeouts and single points of failure.

**Task** – My goal was to design a distributed system that could schedule, monitor, and retry jobs with minimal latency while guaranteeing at most once execution per job instance.

**Action** – I started by sharding the job queue across a Redis Cluster using consistent hashing keyed on project ID. Each worker node ran an Akka cluster actor that pulled tasks from its shard’s queue and updated a central ZooKeeper‑based lease table to claim ownership. For reliability I added a gossip protocol so workers could detect failed peers within 2 s and re‑enqueue orphaned jobs. To avoid duplicate runs, each job had a unique hash stored in a Cassandra “execution log” with TTL; before execution the worker performed an atomic check‑and‑set on this table. Finally, I exposed a gRPC API for clients to submit jobs, which internally published to Kafka topics that triggered the scheduler.

**Result** – The new system reduced job latency from 4 s to 350 ms, increased throughput by 35%, and cut failed job rates from 3% to <0.1%. I learned how sharding, leader‑lease patterns, and idempotent design together eliminate single points of failure in large‑scale schedulers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
