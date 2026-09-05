---
qid: ing_1232a6a4e5__fp__local
question: 'Explain: Rate limiters and load shedders — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 514
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:31-05:00'
sources: []
---

**Why a rate limiter is *necessary* in an API**

Every request consumes finite resources: CPU cycles, memory, database locks, external calls.  
If a client bursts with \(N\) requests per second while the service can sustain only \(R\ll N\), the queue length grows linearly, latency skyrockets, and eventually the system fails (OOM, DB time‑outs).  

**Deriving the limiter**

1. **Capacity constraint**: Let the service capacity be \(C\) requests/second.  
2. **Arrival process** \(\lambda(t)\): arbitrary, possibly bursty.  
3. **Goal**: Keep the *effective* arrival rate \(\hat{\lambda}\le C\).  

A token‑bucket or leaky‑bucket algorithm gives a mathematical guarantee:  
- Tokens are added at rate \(C\) and consumed one per request.  
- If tokens are exhausted, further requests must wait or be rejected.  

This is an *optimization* problem: maximize throughput subject to the inequality \(\hat{\lambda}\le C\). The token bucket implements a projection of the unconstrained arrival process onto the feasible set defined by capacity.

**Load shedders**

When the queue length exceeds a threshold \(Q_{\max}\), even a perfectly rate‑limited system may incur unacceptable latency. A *load shedder* drops or deflects requests probabilistically (e.g., 10 % of incoming traffic) to keep the queue below \(Q_{\max}\).  
Mathematically, this is a *constrained Markov decision process*: choose action (accept/delay/drop) to minimize expected latency while respecting a budget on dropped traffic.

**Non‑obvious insight**

A common mistake is to tune the bucket size only for peak bursts. In fact, **the bucket depth must be proportional to the *variance* of the arrival process**, not just its mean. High variance (e.g., flash crowds) requires larger buckets; otherwise, the limiter will throttle even when average load is below capacity, hurting throughput.

---

*Key takeaway*: Rate limiters enforce a hard capacity bound via token projection; load shedders keep queues bounded by probabilistically dropping excess traffic. Together they form an optimal control loop that balances availability, latency, and resource limits.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
