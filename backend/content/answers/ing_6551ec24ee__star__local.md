---
qid: ing_6551ec24ee__star__local
question: 'Explain: Sequential I/O — Why is Kafka Fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 353
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:21-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time analytics platform that ingested millions of events per second from IoT devices. The legacy message broker was choking on the write load; latency spiked to over 300 ms and backpressure started dropping packets.

**Task:**  
I needed to replace the bottleneck with a system that could sustain >10 M messages/s while keeping end‑to‑end latency under 50 ms, without rewriting the entire ingestion pipeline.

**Action:**  
I evaluated Kafka and decided to deploy it as a log‑based broker. We configured it for *sequential I/O*: producers wrote to a single append‑only file per topic partition, and consumers read sequentially from disk or memory. By enabling zero‑copy `sendfile()` in the kernel, we avoided data copies between user space and disk buffers. We also tuned page cache size to 80 % of RAM and used SSDs with high seek times mitigated by the sequential pattern. The partitioning scheme (32 partitions per topic) let us parallelize writes across cores, keeping each thread’s I/O strictly append‑only.

**Result:**  
Kafka handled 12 M events/s with an average latency of 28 ms and a 99th percentile below 45 ms. Throughput increased by 4× over the old broker, and we eliminated packet loss entirely. The key takeaway: sequential writes/reads minimize random disk seeks and kernel copy overhead, turning I/O into a linear pipeline that scales linearly with hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
