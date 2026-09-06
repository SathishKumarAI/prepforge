---
qid: ing_78055043c2__fp__local
question: 'Explain: Build a rate limiter for an API gateway: per-key token bucket
  first, then extend it to multiple gateway instances.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 517
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:06-05:00'
sources: []
---

**Why a rate limiter is needed**

An API gateway must guarantee that downstream services are not overwhelmed by bursts of requests from a single client or a malicious actor.  
The fundamental problem is to enforce *throughput constraints* (e.g., 10 req/s) while allowing temporary surges that reflect legitimate traffic patterns.

**Token‑bucket for a single key**

Treat the gateway as a finite‑capacity reservoir:

1. **Tokens arrive at rate λ** (the allowed average).  
2. **A request consumes one token**; if none remain, it is rejected or delayed.  

Formally, let *T(t)* be tokens at time *t*.  
`dT/dt = λ – r(t)` where *r(t)* ∈ {0,1} indicates a request.  
The invariant `0 ≤ T(t) ≤ C` (bucket capacity) guarantees that the long‑term average rate never exceeds λ while permitting bursts up to C tokens.

**Extending to multiple instances**

When several gateways share the same key, we need *global* consistency. The key insight is that token flow is a **conservative, additive quantity**: the total number of tokens in all buckets equals what would be produced if they were merged into one virtual bucket.  

Implementation steps:

1. **Centralized state store** (e.g., Redis or a consensus log) holds the global token count *T_g*.  
2. Each gateway instance pulls a *lease* of size *L* tokens and decrements its local counter.  
3. On expiration or when the local counter reaches zero, it releases unused tokens back to *T_g*.  

Mathematically, `Σ_i T_i(t) + U(t) = T_g(t)` where *U* are unleased tokens. This preserves the invariant across instances and avoids “double‑counting” bursts.

**Non‑obvious insight**

The token bucket can be viewed as a **discrete‑time fluid queue** whose *capacity* is the maximum backlog of requests that can be tolerated before violating SLAs. By treating capacity as a *reservoir of credit*, we decouple instantaneous rate from long‑term policy, enabling graceful degradation rather than abrupt throttling. This perspective also explains why token buckets outperform leaky‑bucket in bursty workloads: they allow temporary over‑delivery while still enforcing the average constraint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
