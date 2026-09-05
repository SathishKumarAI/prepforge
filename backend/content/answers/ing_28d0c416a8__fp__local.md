---
qid: ing_28d0c416a8__fp__local
question: 'Explain: :star: Sliding Window algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 411
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:57-05:00'
sources: []
---

**Sliding‑window rate limiting** is a real‑time constraint on the number of events that may occur in a moving time interval.  
At its core it solves the *constrained resource allocation* problem: “Given an arrival stream, guarantee that at most k requests are accepted in any window of length T.”  

The algorithm keeps a FIFO queue of timestamps for the last k requests. When a new request arrives:

1. **Eviction** – Remove all timestamps older than *now – T*.  
2. **Decision** – If the queue size is < k, accept and enqueue; otherwise reject.

Why this works:  
- The queue always contains exactly the requests that lie in the current sliding window.  
- Because we evict expired entries before each decision, the invariant “queue length = number of accepted requests in [now‑T, now)” holds.  
- Thus the algorithm enforces the bound by construction.

This is a concrete instantiation of **online convex optimization**: the queue’s state evolves according to a simple update rule that preserves feasibility (the constraint set). The evict‑then‑accept step is a projection onto the feasible set in one dimension, guaranteeing no violation.

**Non‑obvious insight:**  
The algorithm implicitly performs *exponential smoothing* of request rates. Each accepted event contributes weight 1 for exactly T seconds and then decays to 0. The queue size is therefore the convolution of the arrival process with a rectangular kernel—exactly what many statistical estimators (e.g., moving‑average load) use. This reveals that sliding‑window rate limiting is not merely a guardrail but also an online estimator of recent traffic intensity, enabling adaptive back‑off strategies when coupled with predictive models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
