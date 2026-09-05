---
qid: ing_d1ea471e03__star__local
question: 'Explain: Databases — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 365
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:33-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a real‑time analytics platform for IoT sensor data. The ingestion layer had to accept millions of messages per second from edge devices and write them into a PostgreSQL cluster while keeping latency under 50 ms.

**Task**  
I was tasked with designing the transport protocol between edge nodes and our ingestion service so that we could guarantee durability, avoid packet loss, and still meet the strict latency SLA.

**Action**  
After reviewing options, I chose TCP for the core write path because it provides ordered delivery and built‑in retransmission. To reduce connection overhead I implemented a lightweight multiplexing layer: each edge node opened a single long‑lived TCP socket that carried multiple logical streams identified by a 2‑byte stream ID. For non‑critical heartbeats and telemetry that could tolerate occasional loss, I added a UDP fallback path with simple sequence numbers and application‑level ACKs to keep the system robust against transient network partitions. The ingestion service ran an async IO loop (using `asyncio` in Python) that listened on both sockets, demultiplexed streams, and wrote batches of rows into PostgreSQL using `COPY FROM STDIN` for bulk inserts.

**Result**  
The new design cut average write latency from 120 ms to 32 ms and increased throughput from 1.2 M to 3.5 M messages per second while maintaining <0.01% data loss. I learned that mixing TCP’s reliability with a lightweight UDP layer can give you the best of both worlds when designing high‑throughput, low‑latency database ingestion systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
