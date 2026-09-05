---
qid: ing_0dd97a0ab3__fp__local
question: 'Explain: Design a token-based rate limiter for a multi-tenant LLM API.
  Implement the core, then tell me what changes when it''s distributed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 689
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:08-05:00'
sources: []
---

**Why a token‑bucket?**  
An LLM call consumes *k* tokens of the model’s budget. The API must enforce a per‑tenant cap *R* (tokens/second) while allowing bursts up to *B*. A token bucket is the minimal structure that guarantees this: it holds at most *B* tokens, refills at rate *R*, and permits consumption only if enough tokens exist.  

**Derivation from first principles**  
Let `T(t)` be the token count at time *t*.  
- Refill: `dT/dt = R` whenever `T < B`.  
- Consumption: when a request of size *k* arrives, we require `T ≥ k`; then `T ← T – k`.  

This satisfies the invariant `0 ≤ T(t) ≤ B`. Any sequence of requests that respects this invariant automatically obeys the average rate constraint because over any interval Δt, at most `R·Δt + (B - T_start)` tokens can be spent; since `T_start ≤ B`, the long‑term average cannot exceed *R*.  

**Core implementation (Python)**

```python
import time
from collections import defaultdict
from threading import Lock

class TokenBucket:
    def __init__(self, rate: float, burst: int):
        self.rate   = rate          # tokens per second
        self.burst  = burst         # max bucket size
        self.tokens = burst
        self.last   = time.monotonic()
        self.lock   = Lock()

    def consume(self, amount: int) -> bool:
        with self.lock:
            now = time.monotonic()
            elapsed = now - self.last
            self.tokens = min(
                self.burst,
                self.tokens + elapsed * self.rate
            )
            self.last = now
            if self.tokens >= amount:
                self.tokens -= amount
                return True
            return False

class TenantLimiter:
    def __init__(self):
        self.buckets = defaultdict(lambda: TokenBucket(rate=10, burst=20))
    def allow(self, tenant_id: str, tokens_needed: int) -> bool:
        bucket = self.buckets[tenant_id]
        return bucket.consume(tokens_needed)
```

**Distributed adaptation**

| Issue | Distributed tweak |
|-------|-------------------|
| **State locality** | Store each bucket’s `(tokens, last)` in a shared KV (e.g., Redis). |
| **Atomicity** | Use Lua scripts or compare‑and‑swap to avoid race conditions on concurrent requests. |
| **Clock skew** | Prefer logical clocks or `Redis`'s server time for `last`. |
| **Scalability** | Partition tenants across shards; each shard runs the same logic locally, reducing cross‑node traffic. |
| **Fault tolerance** | Persist buckets; on node restart, rehydrate from KV and recompute `tokens` using elapsed time since stored `last`. |

Thus, the core algorithm remains identical; only its persistence, atomicity, and clock handling shift to accommodate a distributed environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
