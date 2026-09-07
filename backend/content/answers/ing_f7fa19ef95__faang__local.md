---
qid: ing_f7fa19ef95__faang__local
question: 'Explain: Leaky Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 599
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:16:45-05:00'
sources: []
---

**Leaky‑Bucket Rate Limiter – A FAANG‑style Explanation**

| Step | What I’ll Cover |
|------|-----------------|
| **Clarify** | We’re asked to explain the *leaky bucket* algorithm, a classic token‑bucket‑like rate limiter used in APIs. Assume: 1) requests arrive as a stream; 2) we need to enforce an average rate `R` (requests/sec) with a burst size `B`; 3) latency must be O(1). |
| **Approach** | 1️⃣ Maintain a counter of “water” (pending tokens). 2️⃣ On each request, *leak* the bucket at rate `R`. 3️⃣ If after leaking there’s space (`counter < B`), accept; otherwise reject. 4️⃣ Persist state across processes if needed. |
| **Depth** | ```python
import time

class LeakyBucket:
    def __init__(self, rate_per_sec: float, burst_size: int):
        self.rate = rate_per_sec
        self.capacity = burst_size
        self.water = 0.0           # fractional tokens
        self.last_ts = time.monotonic()

    def _leak(self):
        now = time.monotonic()
        elapsed = now - self.last_ts
        leaked = elapsed * self.rate
        self.water = max(0.0, self.water - leaked)
        self.last_ts = now

    def allow(self) -> bool:
        """Return True if request is allowed."""
        self._leak()
        if self.water + 1 <= self.capacity:
            self.water += 1          # consume a token
            return True
        return False
```  
- **Complexity**: O(1) per call, constant memory.  
- **Trade‑offs**: The bucket smooths spikes but can’t enforce hard per‑second limits; if burst size is small, it behaves like a fixed window limiter. |
| **Edge Cases** | • *Clock skew*: use monotonic clock. <br>• *High burst*: capacity too low → many rejections. <br>• *Distributed systems*: need shared state (Redis list) to avoid per‑node drift. |
| **Optimize & Communicate** | 1️⃣ For high traffic, replace float with integer ticks (`rate_per_ms`). 2️⃣ Batch requests: pre‑compute `leaked` once per batch. 3️⃣ Expose metrics (`current_water`, `rejections`) for observability. In a FAANG interview I’d narrate how each design choice satisfies SLAs and scales horizontally, tying back to real‑world API gateways (e.g., AWS API Gateway, CloudFront). |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
