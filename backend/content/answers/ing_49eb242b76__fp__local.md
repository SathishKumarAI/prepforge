---
qid: ing_49eb242b76__fp__local
question: 'Explain: Backend Pool — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 388
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:22-05:00'
sources: []
---

**Backend Pool – the heart of a scalable load‑balancing architecture**

The *problem* is to keep user requests flowing while each worker (the “backend”) can only serve so many concurrent ML inference jobs before its GPU or CPU stalls. A naïve round‑robin scheme would ignore that some models are heavier than others, leading to *resource starvation* and latency spikes.

**Why a pool?**  
Treat the set of healthy backends as a *reservoir* whose size is not fixed but adapts to load. Every request first queries an *availability metric* (e.g., current GPU queue length, temperature). The balancer picks the backend with the lowest projected response time – a classic **min‑weight scheduling** problem that guarantees optimality under convex latency functions.

**Deep principle:**  
This is an instance of *online stochastic optimization*. By maintaining per‑backend statistics and updating them via exponential moving averages, the system solves for the minimal expected completion time in real time, without needing to know future arrivals. The pool size itself becomes a decision variable: scale‑out when the variance of latencies exceeds a threshold; scale‑in otherwise.

**Non‑obvious insight:**  
The *back‑pressure* signal should be sent from backends to the balancer, not vice versa. If each worker advertises its current load, the balancer can preemptively redirect traffic before a queue builds up, turning reactive throttling into proactive scheduling—reducing tail latency by an order of magnitude.

Thus, a backend pool is not just a list; it’s a dynamic, feedback‑controlled resource manager that turns raw compute into predictable inference performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
