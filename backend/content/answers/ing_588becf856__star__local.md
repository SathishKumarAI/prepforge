---
qid: ing_588becf856__star__local
question: 'Explain: Futures and Promises Pattern — Top 6 Multithreading Design Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 343
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:39-05:00'
sources: []
---

**Situation** – While building a real‑time recommendation engine for an e‑commerce platform, the team needed to run heavy matrix factorization models and feature extraction pipelines concurrently without blocking the request flow. The latency target was under 200 ms per user query, yet our single‑threaded inference loop stalled while waiting on GPU computations.

**Task** – I had to redesign the inference pipeline so that model predictions could be launched asynchronously, allowing the main thread to keep serving incoming requests and aggregate results only when all sub‑tasks finished.

**Action** – I introduced a Futures & Promises pattern using Python’s `concurrent.futures` library. Each user request spawned separate futures: one for loading cached embeddings, another for running the GPU inference, and a third for post‑processing scores. I wrapped these in a custom `PromiseAggregator` that resolved when all child promises completed, then combined results into a single response JSON. To avoid thread starvation, I limited the worker pool to the number of available CPU cores plus one GPU queue, and used backpressure by queuing excess requests.

**Result** – Latency dropped from 450 ms to 120 ms on average, with a 35% reduction in CPU usage due to better parallelism. The pattern also simplified error handling: any future that raised an exception propagated up to the aggregator, allowing graceful degradation. I learned that Futures & Promises are not just about async IO; they’re powerful for orchestrating compute‑heavy ML workloads and keeping services responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
