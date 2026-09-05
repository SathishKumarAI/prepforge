---
qid: ing_e73d404cb2__star__local
question: 'Explain: Step 6 - Buffer Manager (Read-Only Queries)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:00-05:00'
sources: []
---

**Situation** – At my previous company we were deploying an online recommendation engine that served millions of read‑only inference requests per second. The model outputs were cached on disk and the inference service streamed them to users with sub‑millisecond latency, but our throughput plateaued at 4k QPS because each request had to load a fresh chunk from SSD.

**Task** – I was tasked with redesigning the data layer so that read‑only queries could hit an in‑memory buffer without sacrificing consistency or memory usage, and increase overall query throughput by at least 50%.

**Action** – I implemented a custom LRU buffer manager on top of `mmap` that pre‑loaded model shard files into a shared memory pool. Each thread obtained a read lock before accessing the buffer, ensuring no writes were happening concurrently. I added an eviction policy based on access frequency and size thresholds, and instrumented cache hit ratios with Prometheus metrics. The manager also exposed a small API for batch loading to amortize disk seeks.

**Result** – Cache hit ratio jumped from 15% to 92%, boosting QPS from 4k to 6.5k while keeping peak memory at 8 GB. I learned that careful locking and size‑aware eviction can turn a disk‑bound service into a high‑throughput, low‑latency system without sacrificing data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
