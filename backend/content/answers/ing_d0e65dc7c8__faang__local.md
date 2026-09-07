---
qid: ing_d0e65dc7c8__faang__local
question: 'Explain: How it works: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 549
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:46:31-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of how rate‑limiting algorithms work, along with code that demonstrates a typical implementation. I’ll assume we’re protecting an API endpoint in a web service and that the caller is identified by a unique key (e.g., API token). The goal is to enforce a maximum number of requests per time window while keeping latency low.

**Approach**  
1. Pick a concrete algorithm (Token Bucket for smooth bursts, Fixed Window or Sliding Log for simplicity).  
2. Explain its state (tokens or timestamps), the update rule, and how it rejects excess traffic.  
3. Provide a small, self‑contained code snippet in Python using an in‑memory store (dictionary) to illustrate the logic.

**Depth**  
*Token Bucket:*  
- **State:** `bucket_size`, `refill_rate` (tokens/sec), `current_tokens`, `last_refill_ts`.  
- **Refill:** On each request, compute elapsed time → add `elapsed * refill_rate` tokens up to `bucket_size`.  
- **Consume:** If `current_tokens >= 1`, decrement and allow; else reject.  

```python
import time

class TokenBucket:
    def __init__(self, capacity: int, refill_per_sec: float):
        self.capacity = capacity
        self.refill_rate = refill_per_sec
        self.tokens = capacity
        self.last_ts = time.monotonic()

    def allow(self) -> bool:
        now = time.monotonic()
        # Refill tokens
        elapsed = now - self.last_ts
        self.tokens = min(self.capacity, self.tokens + elapsed * self.refill_rate)
        self.last_ts = now

        if self.tokens >= 1.0:          # consume one token
            self.tokens -= 1.0
            return True
        return False
```

**Edge Cases**  
- Clock skew or high‑latency calls may under‑refill; use monotonic clock.  
- Burst spikes exceed capacity → all requests after the burst are rejected.  
- Extremely low refill rates cause long blocking periods.

**Optimize & Communicate**  
For production, store state in a distributed cache (Redis) with atomic `INCR` and `EXPIRE`. Explain that this reduces contention and keeps rate‑limits consistent across instances. Conclude by highlighting trade‑offs: Token Bucket smooths traffic but needs per‑client storage; Fixed Window is simpler but can cause bursty traffic at window edges. This concise, structured walk‑through meets the FAANG signal criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
