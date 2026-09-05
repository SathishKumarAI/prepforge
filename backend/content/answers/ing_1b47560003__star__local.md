---
qid: ing_1b47560003__star__local
question: 'Explain: Two Pointers Technique — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 312
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:03-05:00'
sources: []
---

**Situation:**  
During a senior data‑engineering interview at a fintech startup, I was asked to design a real‑time fraud detection pipeline that could flag suspicious transactions within 100 ms while handling a burst of 5k events per second.

**Task:**  
I needed to build an efficient streaming component that would compare each incoming transaction against a sliding window of the last 10 minutes of user activity, ensuring low latency and minimal memory usage.

**Action:**  
I chose a two‑pointer approach on a sorted deque of timestamps. For every new event I slid the left pointer forward until all entries were within the 10‑minute window, then used the right pointer to aggregate counts per merchant. I implemented this in Apache Flink using keyed state and keyed timers, storing only the pointers and count map in RocksDB. To avoid quadratic time, I updated the two pointers incrementally rather than rescanning the entire window.

**Result:**  
The system processed 5k events/second with an average latency of 72 ms, keeping the memory footprint under 200 MB per user stream. Post‑deployment metrics showed a 35% reduction in false positives compared to the baseline algorithm. I learned that carefully maintaining two pointers can turn an O(n²) problem into O(n), which is critical for real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
