---
qid: ing_e99b0ba31c__fp__local
question: 'Explain: Least connection method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 430
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:33-05:00'
sources: []
---

**Least‑Connection Load Balancing – From First Principles**

The *fundamental problem* is to allocate incoming requests to a pool of servers so that no server is overwhelmed while all remain productive.  
Let each request be an independent job of random size \(X\) (service time). A server’s workload at any instant is the sum of \(X\)’s for jobs currently in service. If we let \(C_i(t)\) denote the number of connections on server \(i\), a *least‑connection* rule assigns the next request to the server with minimal \(C_i(t)\).

Why this works:  
1. **Workload approximation** – In steady state, the expected remaining workload on server \(i\) is proportional to \(C_i(t)\). By always choosing the smallest \(C_i\), we bias future load toward servers whose cumulative service time is likely lower.  
2. **Queueing theory** – For M/G/1 queues with identical service distributions, the mean waiting time increases monotonically with the number of queued jobs. Minimizing \(C_i\) thus directly reduces expected response time.  
3. **Random‑walk analogy** – The assignment process is a random walk over server indices; biasing toward lower counts keeps the walk centered near the “balance point” where all queues are equal.

A non‑obvious insight: *Least‑connection implicitly performs an online variance reduction.* Because it always selects the currently lightest server, the distribution of loads across servers becomes tighter than with a purely random or round‑robin strategy. This tighter spread leads to lower tail latencies—critical for latency‑sensitive services—even though the algorithm itself is simple and stateless.

In short, least‑connection solves the load balancing problem by continuously steering traffic toward the lightest server, grounded in queueing theory and probability, yielding both low mean response times and reduced variability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
