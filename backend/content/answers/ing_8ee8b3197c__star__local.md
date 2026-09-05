---
qid: ing_8ee8b3197c__star__local
question: 'Explain: Learn Apache Kafka® & Apache Flink® — How to Choose the Number
  of Topics/Partitions in a Kafka Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 357
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:49-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with redesigning our real‑time telemetry pipeline for a fleet of IoT devices. The existing Kafka cluster had only one topic with a single partition, and by the end of Q3 we were seeing 40 % latency spikes during peak hours when processing over 200k events per second.

**Task:**  
I needed to determine an optimal number of topics and partitions that would keep throughput high while avoiding data skew and ensuring fault tolerance, all within our hardware limits.

**Action:**  
First I profiled the event keys (device ID) and observed a Zipfian distribution. I then calculated the ideal partition count using Confluent’s “1 kB per 10 ms” rule of thumb, which suggested ~200 partitions for our expected peak load. To avoid hot spots I split by device type into three separate topics: `vehicle`, `sensor`, and `alert`. For each topic I set a replication factor of 3 and used the Kafka Admin API to create partitions in increments, monitoring the broker CPU and network usage with Prometheus. I also implemented a lightweight load‑balancing policy that shuffled keys across partitions using a custom Partitioner.

**Result:**  
After deployment, end‑to‑end latency dropped from 350 ms to under 120 ms during peak traffic, throughput increased by 35%, and the cluster maintained high availability even when one broker failed. I learned that balancing key cardinality, partition count, and topic granularity is critical for scalable real‑time systems, and that incremental testing with metrics-driven validation prevents costly over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
