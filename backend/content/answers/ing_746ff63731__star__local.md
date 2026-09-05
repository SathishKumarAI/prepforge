---
qid: ing_746ff63731__star__local
question: 'Explain: Concurrency — Software Engineer Interview Learning Resources -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:12-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation engine that served millions of users per day. The latency target was under 120 ms, but our initial single‑threaded inference pipeline hit 350 ms during peak traffic.

**Task:**  
I had to redesign the inference layer to handle concurrent requests without sacrificing accuracy or increasing memory usage beyond the existing GPU cluster limits.

**Action:**  
First I profiled the code with *py-spy* and found that the bottleneck was synchronous CPU preprocessing before sending data to the GPU. I introduced a thread‑pool using Python’s `concurrent.futures.ThreadPoolExecutor` to parallelize preprocessing, while keeping GPU inference on its own async event loop powered by `asyncio`. To avoid GPU oversubscription, I implemented a token bucket limiter that throttled batch submissions to 8 per second, matching the GPU’s optimal batch size. I also swapped out the blocking file reads for asynchronous `aiofiles` to keep IO from stalling threads.

**Result:**  
The end‑to‑end latency dropped to 85 ms on average during traffic spikes, a 70% improvement. CPU utilization increased from 30% to 55%, but GPU usage stayed at ~80% as intended. I learned that careful separation of concerns—blocking IO in dedicated threads and non‑blocking inference on async loops—can dramatically improve concurrency while keeping resource budgets tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
