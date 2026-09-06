---
qid: ing_a4dbc00f84__fp__local
question: 'Explain: Fixed Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 439
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:49-05:00'
sources: []
---

**Fixed‑Window Rate Limiting – a geometric view**

The goal is: *“no more than N requests in any period of length T.”*  
Think of time as the x‑axis and the number of requests as a step function that jumps at each request.  
If we slide a window of width T across this axis, we need to keep the integral (area) under the curve inside the window ≤ N.

A fixed window algorithm discretises this continuous constraint by partitioning time into non‑overlapping intervals \([kT,(k+1)T)\).  
For each interval we maintain a counter \(c_k\). When a request arrives, we identify its current bucket (by integer division of the timestamp), increment \(c_k\), and reject if \(c_k>N\).

Why this works: The counter is exactly the integral over that interval because requests are indivisible.  
Because intervals do not overlap, rejecting when \(c_k>N\) guarantees that *every* sub‑interval of length T contains at most N requests—any window fully contained in a bucket is safe, and any window straddling two buckets can contain at most \(c_k+c_{k+1}\le N+N=2N\), but the algorithm’s policy (resetting counters at bucket boundaries) ensures that no request falls into a partially‑filled preceding bucket. Thus the constraint holds.

**Deeper principle:** This is a *finite‑state approximation* of a continuous‑time Poisson process with rate limit λ = N/T, turning an integral constraint into a simple counter.  
The non‑obvious insight: **the fixed window’s “burstiness” stems from its discretisation; the algorithm permits up to N requests at bucket start and then blocks until the next bucket, creating artificial spikes that can be mitigated only by sliding or leaky‑bucket variants.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
