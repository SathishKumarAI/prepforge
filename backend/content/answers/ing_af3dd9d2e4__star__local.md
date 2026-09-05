---
qid: ing_af3dd9d2e4__star__local
question: 'Explain: 3.3 Neither Concurrent Nor Parallel — Concurrency vs Parallelism
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 337
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:39-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a real‑time data ingestion pipeline for a fintech app that needed to process thousands of trade events per second while also generating analytics dashboards in near real time.

**Task:** The challenge was to design the back‑end so it could handle incoming streams concurrently without dropping messages, yet still leverage multi‑core CPUs to achieve low latency.

**Action:** I first implemented an asynchronous event loop using Python’s `asyncio` and `aiohttp` to listen for WebSocket feeds. This gave us true concurrency: multiple I/O operations (network reads, database writes) could run in parallel on the same thread without blocking. However, when we hit CPU‑bound processing—parsing JSON, computing risk metrics—I switched to a `multiprocessing.Pool`. Each worker handled a batch of events in parallel across cores, while the asyncio loop queued work and collected results via an async queue. I added backpressure controls (asyncio.Semaphore) to prevent the pool from being overwhelmed.

**Result:** The pipeline sustained 12 k events/s with <50 ms latency under peak load. Throughput improved by 35% compared to a single‑threaded design, and we eliminated event loss during traffic spikes. I learned that concurrency is about overlapping I/O tasks, whereas parallelism is about distributing CPU work—both are complementary, not mutually exclusive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
