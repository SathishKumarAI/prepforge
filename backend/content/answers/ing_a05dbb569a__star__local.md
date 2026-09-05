---
qid: ing_a05dbb569a__star__local
question: How Does Concurrency Works? — Concurrency vs Parallelism - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 389
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:19-05:00'
sources: []
---

**Situation** – While leading a research project on real‑time fraud detection for a fintech client, we had to process 10 k transaction streams per second and run an ensemble of five lightweight ML models (logistic regression, decision trees, SVM, kNN, neural net) on each record. The latency requirement was <50 ms per batch.

**Task** – Reduce inference time while keeping CPU utilization high, without over‑engineering the pipeline or compromising model accuracy.

**Action** – I designed a hybrid concurrency/parallelism strategy:  
1. Use **Python’s `asyncio`** to queue incoming transactions and dispatch them to worker pools.  
2. For CPU‑bound model inference, employ **multiprocessing.Pool** with as many processes as physical cores (12 on our server). Each process loads the five models once and handles a batch of 200 records in parallel.  
3. Implement a lightweight **threaded I/O layer** to stream results back to the API gateway asynchronously, preventing blocking.  
4. Profile the pipeline with `cProfile` and `multiprocessing.util.get_logger()` to identify bottlenecks; swap the kNN (slowest) for an approximate nearest neighbor library (`FAISS`) to shave 12 ms per batch.

**Result** – The end‑to‑end latency dropped from 180 ms to 42 ms, achieving a 75 % reduction while maintaining 99.2 % detection accuracy. I learned that true concurrency in ML is about orchestrating data flow (async) and parallelizing compute (multiprocessing), not just launching threads—each tool serves a distinct role in the overall performance budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
