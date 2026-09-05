---
qid: ing_689d6d1dfd__star__local
question: 'Explain: Blocking vs Non-Blocking Algorithms — Blocking vs Non-Blocking
  Queue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 349
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:28-05:00'
sources: []
---

**Situation** – In a real‑time recommendation system for an e‑commerce platform, we had to process user click streams and update model weights on the fly. The ingest pipeline was built with Kafka producers pushing events into a shared queue that fed our inference workers.

**Task** – I needed to reduce end‑to‑end latency from 200 ms to under 80 ms while keeping throughput above 10k events per second, without sacrificing data consistency or causing worker starvation.

**Action** – First, I benchmarked the existing blocking `ArrayBlockingQueue` implementation: workers would block on `take()` whenever the queue was empty, causing idle CPU time and jitter. I refactored to a non‑blocking `ConcurrentLinkedQueue` combined with a lightweight semaphore that signals availability. Workers poll with a short timeout; if no item is present they perform a light health check instead of blocking. I also introduced a small bounded buffer in each worker to batch updates, reducing lock contention. Finally, I added a fallback backpressure mechanism: if the queue grows beyond 5k items, producers are throttled via a token bucket.

**Result** – Latency dropped from 200 ms to 65 ms (a 68% improvement) and throughput stayed at 12k events/s. The system also handled peak traffic spikes without worker starvation. I learned that choosing the right queue type—blocking for simple, low‑throughput tasks versus non‑blocking with backpressure for high‑volume real‑time pipelines—is critical to balancing latency, resource usage, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
