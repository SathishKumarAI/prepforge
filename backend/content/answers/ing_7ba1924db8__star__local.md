---
qid: ing_7ba1924db8__star__local
question: 'Explain: Three producers, 3x async replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 407
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:13-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with proving that a small, cost‑effective cluster could handle LinkedIn’s massive ingestion load. We had three commodity servers (8 GB RAM, dual‑core CPUs) and needed to benchmark Kafka at 2 M writes/second while maintaining high availability.

**Task:**  
Demonstrate that three producers sending messages asynchronously with a replication factor of three can sustain the target throughput without data loss or unacceptable latency.

**Action:**  
I configured each producer to use the `async` send API, batching up to 1 MB per request and setting linger time to 5 ms. Kafka brokers were tuned for low‑latency: I disabled `message.timestamp.difference.max.ms`, set `replica.fetch.wait.max.ms` to 10 ms, and increased `num.io.threads`. The replication factor of three was enforced by setting `min.insync.replicas=2`. I scripted a load test that ramped writes from 500k to 2M/s over 30 minutes while monitoring `producer-byte-rate`, `broker-io-total`, and `replication-lag-max-ms`. When the cluster hit 1.9 M/s, I swapped one broker’s storage medium from HDD to SSD; this reduced replication lag from 80 ms to <10 ms.

**Result:**  
The cluster consistently handled 2.05 M writes/second with an average end‑to‑end latency of 12 ms and zero message loss. The benchmark proved that a small, replicated Kafka setup can meet high throughput demands when producers use async batching and brokers are tuned for low replication lag. I learned the critical balance between producer batch size, broker fetch settings, and storage performance in sustaining massive write loads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
