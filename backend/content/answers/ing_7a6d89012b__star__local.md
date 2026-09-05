---
qid: ing_7a6d89012b__star__local
question: 'Explain: Results — Kafkabenchmarking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 414
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:38:51-05:00'
sources: []
---

**Situation** – In my last role I led a project to ingest real‑time sensor data into a Spark‑ML pipeline for predictive maintenance. The ingestion layer was built on Apache Kafka, but our initial throughput test showed only 2 k messages/second, far below the required 15 k/s to keep up with the production line’s 50 Hz sampling rate.

**Task** – I needed to benchmark Kafka performance, identify bottlenecks, and redesign the cluster so it could reliably handle the full data load without introducing latency that would break downstream ML inference.

**Action** – I set up a controlled test harness using *kafkabenchmarking* (Kafka’s built‑in benchmarking tool). First, I instrumented producers with `linger.ms=5` and increased batch sizes to 128 KB. I then ran a series of single‑broker, two‑broker, and four‑broker scenarios, varying replication factor from 1 to 3, and toggling compression (Snappy vs LZ4). I logged throughput, latency, and broker CPU/memory usage with Grafana dashboards. After each run, I analyzed the metrics: high disk I/O indicated a need for SSDs; network saturation suggested increasing `num.network.threads`. I also enabled Kafka’s *log compaction* on the topic to reduce write amplification.

**Result** – The optimized cluster achieved 18 k messages/second with an average end‑to‑end latency of 12 ms, comfortably above our target. The benchmark data guided us to use a four‑broker setup with LZ4 compression and `replication.factor=2`, cutting disk usage by 30% while maintaining durability. I documented the tuning process in a playbook that reduced future onboarding time for new data engineers by 40%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
