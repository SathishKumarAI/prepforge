---
qid: ing_bcf8534e23__star__local
question: 'Explain: 3.1 Concurrent, Not Parallel — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 326
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:55-05:00'
sources: []
---

**Situation**  
I was leading the data‑pipeline for a real‑time recommendation engine at a streaming platform. The system had to ingest user events, update embeddings, and serve predictions within 100 ms while handling 10 k requests per second.

**Task**  
My goal was to redesign the pipeline so that it could scale horizontally without bottlenecking on CPU or memory, and to guarantee that latency stayed below our SLA even during traffic spikes.

**Action**  
I introduced a **concurrent** architecture: each request spawned an async task that fetched user history, ran the inference model, and wrote back the result. The tasks were scheduled on a thread‑pool with fine‑grained locks around shared cache entries. For compute‑heavy parts (the embedding lookup), I employed **parallelism** by launching GPU kernels that processed batches of embeddings in parallel, but only when enough data was available to amortize launch overhead. I also used a sharded Redis store so multiple workers could read/write concurrently without contention.

**Result**  
The system maintained 95 % of requests under the 100 ms target during peak load, up from 70 %. CPU utilization dropped by 30 %, and we added support for an extra 5 k RPS with no redesign. I learned that concurrency improves responsiveness by overlapping I/O, while parallelism boosts throughput for compute‑bound tasks—using both in harmony is key to a robust ML service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
