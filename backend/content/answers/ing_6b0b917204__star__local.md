---
qid: ing_6b0b917204__star__local
question: 'Explain: Cons — How to Implement Read Replica Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:19-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were training recommendation models on a growing user base. The nightly batch jobs that pre‑computed feature vectors hit the PostgreSQL master for every read, causing 30 % CPU saturation and a 4‑second query latency spike during peak hours.

**Task**  
I needed to offload read traffic so that model training could run uninterrupted while keeping real‑time inference fast. The goal was to implement a read replica pattern without breaking data consistency or introducing significant lag for downstream services.

**Action**  
I set up a PostgreSQL logical replication slot on the master and spun up an Aurora Read Replica in AWS. Using `pglogical` I streamed changes with a 1‑second lag window, then wrapped the replica behind a HAProxy load balancer that directed all SELECTs to it. For critical “hot” tables (user profiles), I added a Redis cache with a TTL of 5 minutes to absorb spikes. I also refactored our feature extraction pipeline to batch writes and schedule heavy reads during off‑peak windows, using `pg_repack` to keep the replica lean.

**Result**  
Read latency dropped from 4 s to under 200 ms on average, while master CPU usage fell by 35 %. Training jobs finished 20 % faster and we saw a 12 % lift in recommendation click‑through rates. I learned that balancing replication lag against cache freshness is key; too low a lag can negate the benefits, whereas an aggressive cache strategy keeps user experience smooth during replication delays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
