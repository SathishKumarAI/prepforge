---
qid: ing_070127b9cb__star__local
question: 'Explain: Producer and Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 419
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:04-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time analytics pipeline that needed to ingest clickstream data at scale. Our existing Kafka cluster was running on three low‑cost EC2 instances (t3.medium), and the engineering team wanted to prove we could hit 2 M writes per second before scaling up hardware.

**Task:**  
Design and run a benchmark that demonstrated sustained throughput of ≥2 M events/second across producers, brokers, and consumers, while keeping CPU usage under 70% on each node.

**Action:**  
I first tuned the broker configuration: increased `num.io.threads` to 8, set `socket.send.buffer.bytes` to 1 MB, and disabled unneeded plugins. On the producer side I used the official Java client with a single thread pool of 16 threads, enabled batching (`batch.size=32k`, `linger.ms=5`) and compression (Snappy). For consumers I ran 8 parallel consumer instances consuming from a dedicated topic to avoid back‑pressure. I scripted the test using JMeter to generate synthetic JSON events (~200 bytes) and monitored metrics via Prometheus/Grafana. After an initial warm‑up period, I ramped up producers until CPU hit ~65%, then stabilized at 2.1 M writes/s.

**Result:**  
The cluster sustained 2.1 M writes per second for over 30 minutes with no data loss or lag spikes. CPU remained below 70% on all nodes, and the average end‑to‑end latency stayed under 120 ms. This proof of concept convinced leadership to proceed with a larger cluster, saving ~$3k/month in infrastructure costs while meeting our real‑time ingestion targets. I learned how fine‑grained broker tuning and producer batching can unlock high throughput on modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
