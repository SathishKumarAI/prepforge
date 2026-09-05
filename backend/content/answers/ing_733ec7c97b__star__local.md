---
qid: ing_733ec7c97b__star__local
question: 'Explain: Web worker - Parallel Processing, Multi-Threading'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 324
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:07-05:00'
sources: []
---

**Situation**  
At a fintech startup I was tasked with adding real‑time fraud detection to our payment flow. The ML model scored every transaction in under 100 ms, but the single‑threaded Node.js server stalled when we hit peak traffic—latency spiked from 120 ms to over 600 ms.

**Task**  
I had to keep throughput high while still running the heavy TensorFlow inference for each request, without rewriting the entire stack or adding a separate microservice.

**Action**  
I introduced Web Workers (Node’s worker_threads) to offload model inference. Each incoming HTTP request was queued and dispatched to a pool of workers; I used a shared memory buffer to pass the raw transaction data. Inside the worker, I loaded the serialized ONNX model once, then ran batched predictions on 32 requests at a time, leveraging SIMD under the hood. To avoid thread‑safe issues with TensorFlow’s C++ backend, I made sure each worker had its own isolated context and used `worker.postMessage` to return results.

**Result**  
Throughput improved from ~200 TPS to ~1,000 TPS during peak loads, while latency stayed below 150 ms. The system handled a 4× traffic spike without additional servers. I learned that careful worker‑pool sizing and batched inference can turn heavy ML workloads into scalable, low‑latency services in a single Node.js process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
