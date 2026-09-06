---
qid: ing_cfbdfe4209__fp__local
question: 'Explain: Cache Layers — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 430
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:01-05:00'
sources: []
---

**Why a cache must exist**

When a request arrives at a data‑intensive service, the *latency* is the sum of two costs:

1. **Computation cost** – time to fetch or recompute the value.
2. **Transfer cost** – time to deliver it over the network.

If we can keep the *most useful* values locally, we eliminate both terms for a large fraction of requests.  
Formally, let \(p_i\) be the request probability for item \(i\), and \(c_i\) its fetch cost.  
The expected cost without caching is \(\sum_i p_i c_i\).  
With a cache that holds items \(S\), the cost becomes \(\sum_{i\notin S} p_i c_i\).  
Thus, to minimize expected latency we must maximize \(\sum_{i\in S} p_i c_i\) subject to capacity constraints—a classic *knapsack* problem.  

**Deep principle**

Caching is an instance of **information‑theoretic compression**: a cache stores a succinct representation (often the data itself) that reduces the *entropy* of future requests. By shifting probability mass from expensive remote fetches to cheap local reads, we lower the overall system entropy.

**Non‑obvious insight**

A cache is not merely a “speed‑up” layer; it also **regularizes traffic patterns**. When a hot item is cached, subsequent requests become *burstable* and can be served in parallel, effectively turning a high‑variance workload into a low‑variance one. This burstiness improves downstream resource utilization (CPU, I/O) more than the raw latency reduction alone would suggest.

In short, caching solves an optimization problem that trades space for time, rooted in entropy minimization, and it also smooths traffic—an effect often overlooked when designing systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
