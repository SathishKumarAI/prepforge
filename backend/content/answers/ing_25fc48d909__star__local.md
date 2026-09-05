---
qid: ing_25fc48d909__star__local
question: 'Explain: Benefits — Blocking vs Non-Blocking Queue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:50-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time recommendation engine that pulled user events from Kafka and fed them into a TensorFlow inference pipeline. The event stream was bursty; during peak hours the queue behind the inference workers would swell to 10,000 items, causing our latency to jump from 30 ms to over 200 ms.

**Task:**  
I had to reduce end‑to‑end latency while keeping throughput high and avoiding worker starvation. The goal was to keep inference latency under 50 ms for 95 % of requests during peak load.

**Action:**  
We replaced the old blocking `ArrayBlockingQueue` with a non‑blocking, lock‑free `ConcurrentLinkedQueue`. I wrapped it in a custom back‑pressure mechanism: when the queue length exceeded 5,000 items, we dropped the oldest events and logged a warning. We also introduced a small “token bucket” that throttled Kafka consumer pulls to match worker capacity. The inference workers ran on a fixed thread pool of 8 threads, each polling the queue with `poll()` in a tight loop, so they never blocked waiting for new data.

**Result:**  
Latency dropped from an average of 180 ms to 42 ms during peak hours, and throughput increased by ~30 %. The non‑blocking queue eliminated thread contention and allowed us to scale out workers without introducing deadlocks. I learned that careful back‑pressure combined with lock‑free data structures can dramatically improve real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
