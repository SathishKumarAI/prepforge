---
qid: ing_7381ffdbc7__star__local
question: 'Alex Xu on X: "Why is Kafka fast? — Alex Xu on X: \"Why is Kafka fast?\n\nKafka
  achieves low latency message delivery through Sequential I/O and Zero Copy Principle.
  The same techniques are commonly used in many other messaging/streaming platforms.\"
  / X'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 283
output_tokens: 332
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:45-05:00'
sources: []
---

**Situation:**  
When we migrated our real‑time analytics pipeline from a legacy message broker to Apache Kafka, the data ingestion rate dropped from 120 k messages/second to just 30 k, which broke our SLA for live dashboards.

**Task:**  
I had to identify why Kafka was slower than expected and re‑tune it so that throughput matched or exceeded the legacy system while keeping latency below 10 ms per message.

**Action:**  
First, I profiled disk activity with `iostat` and discovered random seeks were dominating CPU time. Switching from a single SSD to an NVMe array and configuring Kafka’s log segments to 1 GB (instead of the default 100 MB) forced writes to be sequential, eliminating seek overhead. Next, I enabled the `socket.send.buffer.bytes` setting to match the page size and turned on `io.netty.unix.socket` to use zero‑copy via `sendfile`. Finally, I tuned the producer’s batch size to 64 kB and increased `linger.ms` to 5 ms so that more records were sent in one OS packet.

**Result:**  
Throughput jumped from 30 k to 140 k messages/second with average end‑to‑end latency dropping to 6 ms. I learned that Kafka’s speed hinges on minimizing random disk I/O and leveraging the kernel’s zero‑copy capabilities, which are simple but powerful optimizations when correctly applied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
