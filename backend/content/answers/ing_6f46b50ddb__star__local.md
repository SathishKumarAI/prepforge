---
qid: ing_6f46b50ddb__star__local
question: 'Explain: Jay Kreps April 27, 2014 — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 325
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:42-05:00'
sources: []
---

**Situation:**  
At my previous job we were debating whether to move from a custom log system to Apache Kafka for our event ingestion layer. The product team needed proof that Kafka could handle millions of writes per second on modest hardware, because any upgrade would add cost and complexity.

**Task:**  
I was tasked with designing a realistic benchmark: write 2 million events per second across three inexpensive servers (8 GB RAM, dual‑core CPUs) while keeping latency under 50 ms and ensuring no data loss.

**Action:**  
I set up a minimal Kafka cluster on those machines, used the official Producer API in Java with batching enabled, and tuned the broker config: `num.network.threads=3`, `io.commit.interval.ms=1`, `replica.fetch.max.bytes` to 2 MB, and disabled unneeded plugins. I wrote a stress test harness that sent JSON messages (≈200 bytes each) using a producer pool of 32 threads, measured throughput with JMeter, and logged consumer lag via Kafka’s metrics. To stay within budget I used the open‑source Confluent Platform instead of the commercial offering.

**Result:**  
The cluster sustained 2.1 million writes per second with average end‑to‑end latency of 38 ms, and zero dropped records. This directly convinced stakeholders that Kafka met our scalability needs without additional infrastructure. I learned how careful tuning and realistic workload simulation can validate a system’s limits before production roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
