---
qid: ing_98acdfec48__fp__local
question: 'Explain: Zero Copy — Why is Kafka Fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 374
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:30:33-05:00'
sources: []
---

**Zero‑copy in Kafka: the root of its speed**

Kafka’s goal is *throughput* with minimal latency. The most expensive part of a network round‑trip is moving data between kernel buffers and user space. A naïve design would read bytes from disk into a buffer, copy that buffer to user memory, then hand it to the socket stack, which copies again to the NIC’s DMA buffer—three costly copies.

Kafka sidesteps this by **mapping each log segment directly into the process address space** (`mmap`). When a consumer requests data, Kafka merely tells the OS “give me this page” and hands a pointer. The kernel then uses *page‑cache* pages as both the source for disk I/O and the destination for the socket send buffer via `sendfile()` or `splice()`. Thus **no user‑space copy occurs**; only one memory–to‑NIC transfer is needed.

This design rests on two principles:

1. **Cache locality:** Log segments are read sequentially, so pages stay hot in the OS cache, reducing disk seeks.
2. **Zero‑copy I/O primitives:** Modern kernels expose `sendfile()`/`splice()`, which internally perform DMA directly from page cache to NIC, avoiding user‑space involvement.

*Non‑obvious insight:* The “zero copy” trick is not just a performance hack; it enforces *producer‑consumer decoupling*. Because data lives in the kernel until the consumer reads it, producers can write to disk asynchronously without waiting for network ACKs. This separation lets Kafka maintain high throughput even under bursty workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
