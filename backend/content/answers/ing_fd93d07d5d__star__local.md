---
qid: ing_fd93d07d5d__star__local
question: 'Explain: Other Points — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 380
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:53-05:00'
sources: []
---

**Situation**  
During the launch of a real‑time fraud detection service for a fintech client, our data ingestion layer was hitting a bottleneck. The streaming engine (Spark Structured Streaming) was ingesting up to 10k events per second from payment terminals, but latency kept creeping above 2 s because we were pulling batches directly from Kafka with small offsets.

**Task**  
I had to redesign the ingestion flow so that the streaming job could keep up with peak load while maintaining a sub‑500 ms latency window for downstream model scoring.

**Action**  
First, I switched to Kafka’s *exactly‑once* semantics by enabling idempotent producers and transactional writes from the source microservice. Then I reconfigured the consumer group: increased the number of partitions to 32, tuned `fetch.min.bytes` to 1 MB, and set `max.poll.records` to 10 000. In Spark, I used the new Structured Streaming Kafka connector with the `startingOffsets="latest"` option and introduced a watermark of 30 s to avoid state buildup. Finally, I added a small Kafka Streams layer that pre‑aggregated transaction totals per user in real time, pushing only the aggregated key/value pairs into the main Spark job.

**Result**  
Latency dropped from 2.1 s to 450 ms on average, and throughput rose from 10k to 25k events/s without error rate spikes. The model’s precision improved by 3% because it now had fresher data. I learned that careful partitioning, transactional guarantees, and a lightweight pre‑aggregation step can turn Kafka into a high‑performance backbone for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
