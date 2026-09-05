---
qid: ing_ce746c7bfd__star__local
question: 'Explain: Logstash Which Produce Logs to Kafka ¶ — ELK Stack + Kafka End
  to End Practice \u2014 Log Consolidation with ELK Stack 1.2 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 383
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:52-05:00'
sources: []
---

**Situation** – At my previous company we had a distributed micro‑services platform that generated over 50 GB of log data daily across 120 containers. The monitoring team was struggling to ingest these logs into our ELK stack because the volume caused Kafka brokers to throttle and Elasticsearch index lagged, leading to stale dashboards during incident investigations.

**Task** – I needed to build a scalable pipeline that reliably streamed container logs from Logstash into Kafka, then consumed them back for real‑time indexing in Elasticsearch while preserving latency below 200 ms per log event and ensuring no data loss under peak load.

**Action** – I configured Logstash with the Docker input plugin to tail `/var/log/containers/*.log`, added a Grok filter to parse JSON logs into structured fields, and used the Kafka output plugin with `acks=all` and `compression.type=gzip`. To avoid back‑pressure, I set `queue.type=persisted` and tuned `pipeline.workers` to 4. On the consumer side, I deployed a Logstash instance that read from Kafka using the Kafka input plugin, applied a `mutate` filter for field normalization, and used the Elasticsearch output with bulk size 5000 and flush interval 5 s. Monitoring was set up in Kibana to track throughput and lag.

**Result** – The new pipeline handled 70 GB/day without broker throttling, reduced log ingestion latency from ~1 s to <200 ms, and improved alert accuracy by 35%. I learned the importance of tuning Kafka producer settings for durability and Logstash’s queue persistence for fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
