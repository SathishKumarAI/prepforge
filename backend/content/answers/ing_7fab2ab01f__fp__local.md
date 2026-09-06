---
qid: ing_7fab2ab01f__fp__local
question: 'Explain: Adaptive Timeouts — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 401
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:00-05:00'
sources: []
---

**Adaptive Timeouts: why they keep Uber’s cache humming**

When a request hits the distributed key‑value store, the latency is the sum of *network*, *disk* and *CPU* delays.  
If every client waited a fixed timeout (say 100 ms), the system would either waste CPU cycles on slow nodes or drop many useful reads when the network hiccups. Uber’s solution is to let each request carry an **adaptive deadline** that shrinks as the request traverses the system.

1. **Fundamental problem** – we want *high throughput* (40 M RPS) while keeping per‑read latency < 50 ms.  
2. **Why it must adapt** – node performance is non‑stationary; a single timeout can’t capture the heavy‑tailed distribution of service times.  
3. **Derivation** – each hop estimates its *current* mean and variance (from moving averages) and propagates a *remaining time budget*. If the remaining budget falls below a threshold, the request is aborted early, freeing resources for fresher reads.  
4. **Deeper principle** – this is an online stochastic optimization: we maximize expected reward \(R = \sum_i w_i \mathbf{1}\{\text{completion within deadline}\}\) by dynamically adjusting deadlines to match observed service times.  

*Non‑obvious insight*: the *remaining budget* is not a hard limit but a **probabilistic safety margin**; it’s tuned so that aborts occur in the tail of the latency distribution, thereby preserving throughput while keeping the 95th percentile latency in check. This subtle shift from rigid timeouts to probabilistically‑guided ones unlocks the cache’s ability to serve tens of millions of reads per second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
