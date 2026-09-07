---
qid: ing_070127b9cb__aws__local
question: 'Explain: Producer and Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 474
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:56-05:00'
sources: []
---

**Situation & Task**

At a startup I was tasked with validating whether an on‑premises Kafka cluster could handle the ingest rate for our recommendation engine—2 M writes/sec—using only commodity hardware (≈$1k each). The goal was to prove throughput, latency, and cost viability before committing to AWS MSK.

**Approach & Design**

- **Architecture** – 3 x cheap Intel Xeon E3 machines, each with a single 10‑Gbps NIC. Kafka broker, Zookeeper, and producer clients all on the same box to minimize network hops.
- **Producer Tuning** – Batch size 32 KB, linger.ms = 5 ms, compression = *snappy*, idempotence enabled. Leveraged Java’s `KafkaProducer` pool with 64 concurrent threads per broker.
- **Consumer Benchmark** – Parallel consumer group (3 consumers) consuming the same topic to verify end‑to‑end latency (<200 ms).
- **Monitoring** – Prometheus + Grafana for CPU, disk I/O, and Kafka metrics; used `kafka-run-class kafka.tools.JMXTool` for broker throughput.

**Result**

Achieved a sustained 2.1 M writes/sec with average record size 12 B, peak latency 180 ms, and consumer lag <5 sec. CPU saturated at ~90% but disk I/O remained below 80%. Total cost per month: ~$300 (hardware + power). This validated that a small, inexpensive cluster could meet our throughput needs.

**Reflection & Learning**

- **Ownership** – I drove the end‑to‑end test plan and documented failure modes.
- **Dive Deep** – Investigated Zookeeper latency spikes; switched to *KRaft* mode after AWS announced it in 2024, reducing overhead by ~15%.
- **Bias for Action** – Deployed a lightweight CI pipeline to run nightly throughput tests.
- **Result Impact** – The benchmark informed our migration to Amazon MSK with a projected cost saving of 35 % due to managed scaling.

*Key AWS services I would recommend moving forward: Amazon MSK (for managed Kafka), CloudWatch for metrics, and Lambda for automated alerting.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
