---
qid: ing_b6acc425a8__fp__local
question: 'Explain: API Rate Limiter — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 623
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:27-05:00'
sources: []
---

**Why we need a rate limiter**

At its core, an API gateway must enforce *fairness* and *stability*: each client should get a predictable share of the service, while the backend remains healthy under sudden traffic spikes.  
The problem reduces to **deciding, in real time, whether a request should be accepted or rejected** given only limited state (e.g., how many requests have been seen recently).  

---

### From first principles

1. **Resource constraint** – we can serve at most *R* requests per unit time.  
2. **Information bottleneck** – we cannot keep the full history of every request; we need a compact summary that preserves enough detail to make the decision.

This is an instance of *online constrained optimization*: choose “accept” or “reject” so that the cumulative accepted rate never exceeds *R*, while maximizing throughput and fairness.  

---

### Classic solutions

| Technique | Summary | Strength |
|-----------|---------|----------|
| **Token Bucket** | Tokens arrive at rate *R*; a request consumes one token if available. | Simple, supports bursts (bucket size). |
| **Leaky Bucket** | Requests are queued and processed at constant rate *R*. | Guarantees steady output. |
| **Sliding‑Window Counter** | Count requests in the last *W* seconds using a hash map of timestamps. | Accurate but memory‑heavy for high cardinality. |

All three can be seen as different discretizations of the same integral constraint:  
\[
\int_{t-W}^{t} \lambda(\tau)\,d\tau \le R
\]
where \(\lambda\) is the instantaneous request rate.

---

### Non‑obvious insight

**Rate limiting is essentially a *constrained sampling problem***.  
If you view each incoming request as a Bernoulli trial with acceptance probability \(p(t)=\frac{T_{\text{avail}}(t)}{R}\), where \(T_{\text{avail}}\) is the remaining token budget, then you’re performing **reservoir sampling under capacity constraints**. This perspective lets you apply variance‑reduction techniques (e.g., *probabilistic counting*) to reduce state while keeping the acceptance distribution unbiased—something most interviewees overlook.

---

### Design checklist

1. Choose granularity: per‑user, per‑IP, or global.  
2. Decide bucket size vs. window length based on burst tolerance.  
3. Store state in a fast key‑value store (Redis, Memcached).  
4. Exponential backoff for retries; expose rate‑limit headers (`X-RateLimit-*`).  

With this foundation, you can implement a robust, scalable API rate limiter that satisfies both fairness and performance requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
