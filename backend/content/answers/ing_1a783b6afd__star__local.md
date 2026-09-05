---
qid: ing_1a783b6afd__star__local
question: 'Explain: Week 3-4: Data Structures (Stack, Linked Lists, Trees)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 378
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:24-05:00'
sources: []
---

**Situation:**  
During the second sprint of our fraud‑detection model rollout, we discovered that the real‑time transaction stream was stalling at peak hours. Profiling showed a memory leak in the feature‑engineering buffer that stored raw event logs.

**Task:**  
I had to redesign the buffering mechanism so it could handle 10 k events per second without exceeding our 512 MB RAM limit, while keeping latency under 50 ms for downstream model inference.

**Action:**  
First, I replaced the naïve list with a circular **stack** implemented in Cython, giving O(1) push/pop and deterministic memory usage. Next, to support quick look‑ups of user history, I built a lightweight **linked list** per account that stored only the last 100 events, avoiding full serialization overhead. Finally, for hierarchical feature aggregation (e.g., device → merchant → category), I introduced a shallow **binary tree** structure that cached partial sums; each node held an aggregated vector, allowing O(log n) updates and efficient parallel reduction during inference.

**Result:**  
The new buffer handled 12 k events/s with peak memory at 420 MB. End‑to‑end latency dropped from 90 ms to 35 ms, keeping the model’s throughput above SLA. I learned that choosing the right data structure—stack for FIFO stability, linked list for bounded history, and tree for hierarchical aggregation—can dramatically improve both performance and maintainability in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
