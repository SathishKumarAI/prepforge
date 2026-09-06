---
qid: ing_89e3fcfdc6__fp__local
question: 'Explain: Token Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 566
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:25-05:00'
sources: []
---

**Token Bucket as a Conservation Law**

Imagine every request is a *particle* that must be absorbed by a reservoir before it can pass.  
The reservoir’s capacity \(C\) (the bucket size) and refill rate \(\lambda\) (tokens per second) define a **conservation law**:

\[
N(t)=\min\!\bigl(C,\; N(0)+\lambda t-\text{consumed}\bigr).
\]

A request consumes one token. If the reservoir is empty, the request must wait or be dropped—exactly what rate limiting enforces.  
Why this law? Because any policy that permits a burst larger than \(C\) would violate the **max‑rate constraint**: over an interval \([t_1,t_2]\), the average consumption cannot exceed \(\lambda(t_2-t_1)\). Token bucket guarantees it by construction.

---

### Deep connection

The bucket is a *finite‑memory* sliding window of past traffic.  
Mathematically, it implements a **low‑pass filter** on request intensity: high‑frequency bursts are attenuated until tokens accumulate. This links to information theory—token bucket limits the channel’s *mutual information* by capping instantaneous entropy.

---

### One non‑obvious insight

A common mistake is treating `C` as “maximum burst size.”  
In fact, **\(C\) equals the maximum number of requests that can be *simultaneously* in flight**, not merely a transient spike. Thus, if your downstream system tolerates only \(k\) concurrent connections, set \(C=k\). This subtlety keeps resources from saturating under heavy bursts.

---

#### Minimal Python sketch

```python
import time

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens/second
        self.capacity = capacity  # max bucket size
        self.tokens = capacity
        self.last = time.monotonic()

    def allow(self, n=1):
        now = time.monotonic()
        # refill proportional to elapsed time
        self.tokens = min(
            self.capacity,
            self.tokens + (now - self.last) * self.rate
        )
        self.last = now
        if self.tokens >= n:
            self.tokens -= n
            return True
        return False
```

This code embodies the conservation law: tokens are a finite resource that replenishes at a fixed rate, ensuring any admissible request sequence respects the desired average throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
