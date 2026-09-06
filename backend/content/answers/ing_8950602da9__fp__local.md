---
qid: ing_8950602da9__fp__local
question: 'Explain: Pattern 4: Circuit Breaker — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 393
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:57:06-05:00'
sources: []
---

**Pattern 4 – Circuit Breaker (Availability)**  

At its core the circuit‑breaker solves a simple resource‑allocation problem: *a client should never wait forever for a downstream service that is already doomed to fail*.  
If every call simply blocks until the target returns, a single outage ripples through the system, exhausting threads, memory and eventually causing a cascade of failures. The breaker observes two quantities: the **failure rate** over a sliding window and the **latency distribution**. When the failure probability crosses a threshold *p* (e.g., 5 %) or the average latency exceeds a bound *L*, the circuit flips from “closed” to “open”. In open state, all requests are short‑circuited—often returning a cached fallback or a default response—so that resources are released immediately.  

Mathematically this is an instance of **stochastic control**: we treat the downstream service as a random variable whose distribution changes over time. By maintaining a *state machine* (closed → half‑open → open) and using exponential back‑off to probe recovery, the system performs online hypothesis testing—“is the service healthy?”—and avoids unnecessary load on a failing component.  

**Non‑obvious insight:** The breaker’s “half‑open” state is not merely a retry mechanism; it acts as a *probabilistic estimator* of the service’s health. A single successful call in half‑open resets the circuit, while a failure immediately reopens it. This dynamic balances **responsiveness** (quickly re‑engaging once the fault clears) with **safety** (avoiding premature load). Thus, the pattern is less about throttling and more about *probabilistic risk assessment* in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
