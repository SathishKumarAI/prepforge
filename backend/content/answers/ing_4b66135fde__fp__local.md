---
qid: ing_4b66135fde__fp__local
question: 'Explain: Rolling Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 412
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:32-05:00'
sources: []
---

**Rolling‑window rate limiting**

The core problem: *“Allow at most k* events in any interval of length T seconds.”  
If we naïvely count events in a fixed window, a burst that straddles the boundary can be miscounted.  
A **rolling window** keeps the exact set of timestamps within the last T seconds and discards older ones.

1. **Invariant** – The data structure stores all event times `t_i` such that  
   \( t_{\text{now}} - T < t_i \le t_{\text{now}} \).  
2. **Update** – When a new event arrives at time `t`, we:
   * purge entries `< t‑T` (they are outside the window),
   * append `t`,
   * if size > k, reject the request; otherwise accept.
3. **Correctness** – By construction every accepted request lies in some interval of length T that contains at most k events, because we always enforce `size ≤ k`.  
4. **Optimality** – The algorithm is *tight*: a request will be rejected exactly when there are already k events in the last T seconds, which is the minimal possible rejection rule.

The underlying principle is **queue‑based sliding window**: we maintain a FIFO queue of timestamps and rely on its monotonicity to purge old entries in amortized O(1).  
A non‑obvious insight: *the queue’s tail represents the most recent event, so the time difference between head and tail gives the current load; if that difference ≤ T, no new request is needed*—this allows an early exit without scanning all elements.  

Thus rolling windows provide exact, constant‑time rate limiting while respecting real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
