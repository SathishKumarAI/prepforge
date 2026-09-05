---
qid: ing_8dcaea9272__star__local
question: 'Explain: Built-in Stream Processing — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 373
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:26-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our real‑time fraud detection pipeline was lagging. The team used plain Kafka topics to ingest transaction events, but downstream services were pulling batches from those topics and processing them asynchronously, causing up to 8 seconds of latency before alerts reached the risk engine.

**Task:**  
I had to reduce that latency below 1 second while keeping throughput high (≈50k messages/second) and ensuring fault tolerance across our 3‑node cluster.

**Action:**  
I leveraged Kafka’s built‑in stream processing via KSQL. First, I defined a `CREATE STREAM` over the raw events topic, parsing JSON and enriching each record with a customer profile lookup from an external key‑value store. Then I wrote a continuous query that applied a sliding window of 5 seconds to aggregate transaction amounts per account and flagged any exceeding $10k as suspicious. The query automatically produced results into a new `fraud_alerts` topic, which the risk engine consumes in real time. I tuned partition count to 32, enabled compaction on the alerts stream, and set the KSQL server’s `max.poll.interval.ms` to 500 ms to avoid rebalancing delays.

**Result:**  
Latency dropped from ~8 seconds to under 800 milliseconds; the alert throughput stayed above 50k messages/second with zero data loss during peak bursts. The team now receives fraud alerts in near real time, improving our detection rate by 35%. I learned how Kafka’s streaming API can replace custom micro‑services for low‑latency pipelines and the importance of partitioning strategy for scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
