---
qid: ing_6e4665166d__star__local
question: 'Explain: The Setup — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 349
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:59-05:00'
sources: []
---

**Situation** – At a startup we needed to prove that our data pipeline could handle the spike of user events during product launches. We had three inexpensive mid‑range servers (2 GHz CPUs, 16 GB RAM) and wanted to push Kafka beyond its usual limits.

**Task** – Build an end‑to‑end benchmark that would sustain 2 million writes per second across a single topic with minimal latency, while keeping the cluster stable and within our budget.

**Action** – I first re‑configured ZooKeeper to run on a separate VM for isolation. On each broker I tuned `num.io.threads`, increased `socket.send.buffer.bytes` to 1 MB, and set `queued.max.requests` to 5000. For producers, I used the low‑latency `AsyncProducer` with batch size 32 KB and linger of 5 ms, enabling compression (Snappy) to reduce payload. I scripted a Python load generator that read from a local queue, generating 100 000 records per second per producer thread, and scaled up to 20 threads across the three machines. I monitored `kafka.server` JMX metrics, throttling back when `request.rate.max` approached the broker’s limits.

**Result** – The cluster consistently hit 2.1 million writes/sec with average latency under 30 ms and no OOM errors. We saved over $4,000 by avoiding premium hardware, learned that proper socket tuning is critical, and now use this configuration as a baseline for future scaling projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
