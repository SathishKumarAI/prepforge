---
qid: ing_cff8dac8c6__star__local
question: 'Explain: Job Schedules — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 378
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:07-05:00'
sources: []
---

**Situation** – In my last role at FinTechX, we had a micro‑service pipeline that executed nightly risk calculations across 1200 data shards. The existing cron‑based scheduler failed under load: jobs would collide, some shards missed their windows, and the SLA for report delivery slipped from 2 h to 4 h during peak trading days.

**Task** – I was tasked with building a fault‑tolerant distributed job scheduler that could guarantee exactly‑once execution per shard, respect priority queues, and scale horizontally while keeping latency under 200 ms for scheduling decisions.

**Action** – I chose a leader‑election pattern using ZooKeeper to elect a master node that maintained a central job registry in Redis. Each worker subscribed to a sharded Pub/Sub channel (Redis Streams) so the master could push “start” messages with a deterministic token. To avoid duplicates, workers performed an atomic `SETNX` on a shard‑specific key before pulling data; if the key existed, they backed off. I added a retry policy with exponential backoff and integrated Prometheus alerts for job failures. For scaling, I deployed the master as a Kubernetes StatefulSet and replicated workers across nodes, using service discovery to keep the channel list dynamic.

**Result** – After deployment, we cut job latency by 70 % (from 600 ms to 180 ms), reduced missed shards from 12 % to <0.1 %, and restored the SLA to 90 % of jobs finished within 2 h. I learned that coupling a lightweight coordination service with stream‑based messaging can deliver both reliability and speed in distributed scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
