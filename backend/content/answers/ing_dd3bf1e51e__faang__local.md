---
qid: ing_dd3bf1e51e__faang__local
question: 'Build a rate limiter. Every ten minutes I''ll add a requirement: per-tenant
  limits, burst allowances, then a sliding window. How do you keep your code from
  collapsing?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 481
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:02-05:00'
sources: []
---

**Clarify**  
We’re building an API rate‑limiter that evolves over time: first a fixed per‑tenant cap, then burst allowances, finally a sliding window. We need to keep the implementation modular so new rules don’t break existing logic. Key assumptions: *high request volume*, *low latency requirement*, and *distributed deployment*.

**Approach**  
1. **Abstraction layer** – define an interface `RateLimiter` with methods `allow(tenant, key)`.  
2. **Strategy pattern** – implement each rule as a separate strategy (`FixedWindow`, `TokenBucket`, `SlidingLog`).  
3. **Decorator composition** – wrap strategies so they compose (e.g., `CompositeLimiter = FixedWindow -> TokenBucket -> SlidingLog`).  
4. **Dependency injection** – inject the composite into request handlers; tests can swap individual strategies.

**Depth**  
*FixedWindow*: use Redis INCR with EXPIRE (`EXPIREAT`) per tenant, O(1) time.  
*TokenBucket*: store token count and last‑refill timestamp in a hash; refill on each call, O(1).  
*SlidingLog*: maintain a sorted set of timestamps per key; evict older entries via ZREMRANGEBYSCORE. Complexity: O(log n) per request, but `n` bounded by window size.

Each strategy exposes `isAllowed()` and updates its state atomically in Redis (Lua scripts) to avoid race conditions.

**Edge Cases**  
- Clock drift between nodes → use NTP or Redis time (`TIME`).  
- Sudden traffic spike → ensure token bucket doesn’t under‑flow.  
- Window rollover while requests are inflight → atomic expiry ensures consistency.  
Test with high concurrency, simulated clock skew, and gradual rule upgrades.

**Optimize & Communicate**  
Future rules can be added by creating a new strategy and inserting it into the decorator chain; no code churn in existing logic. Benchmark each component separately; if sliding log becomes bottleneck, switch to a probabilistic counter (e.g., HyperLogLog). In interviews, I’d narrate this as “build for change: isolate behavior, compose cleanly, test edge cases, and measure.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
