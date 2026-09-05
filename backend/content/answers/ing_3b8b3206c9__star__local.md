---
qid: ing_3b8b3206c9__star__local
question: 'Explain: Best Practices — Pessimistic vs Optimistic Locking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 361
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:44-05:00'
sources: []
---

**Situation:**  
During a recent project I was building an online recommendation engine that processed user interaction logs in real time. The system had to update a shared feature store while serving millions of requests per day. We noticed occasional stale predictions and race conditions when multiple workers tried to write updated feature vectors simultaneously.

**Task:**  
I needed to design a concurrency strategy for the feature store that ensured data consistency without crippling throughput, especially during peak traffic periods.

**Action:**  
I first benchmarked pessimistic locking (row‑level locks in PostgreSQL) versus optimistic locking (versioning with compare‑and‑swap). For pessimistic locking I added `SELECT … FOR UPDATE` before writes, which guaranteed correctness but caused 40 % lock contention spikes during flash sales. With optimistic locking I introduced a lightweight version column and wrapped updates in a retry loop; failed transactions were retried up to three times. I also implemented exponential backoff and used Redis as a distributed lock cache for high‑frequency keys. The key was to keep the critical section minimal: only the version check and update were protected, while the heavy feature‑vector computation ran outside the transaction.

**Result:**  
Switching to optimistic locking reduced average write latency from 120 ms to 45 ms during peak hours and dropped deadlock incidents by 92 %. The system maintained a 99.8 % freshness rate for user features. I learned that in high‑write, read‑heavy ML pipelines, optimistic locking combined with lightweight versioning often yields the best balance between consistency and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
