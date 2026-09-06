---
qid: ing_d0e65dc7c8__fp__local
question: 'Explain: How it works: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 595
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:50-05:00'
sources: []
---

### From the Problem to a Solution

When an API is called repeatedly by many clients, we want **bounded resource usage** (CPU, bandwidth, database locks) while still allowing honest traffic.  
Mathematically we need a *policy* that maps a stream of timestamps \(t_i\) into a binary decision “allow” or “reject” such that:

1. **Throughput constraint** – at most \(R\) requests per window \(W\).  
2. **Fairness / burst tolerance** – short bursts are permitted up to a token budget \(B\).

This is exactly the *sliding‑window* (or leaky bucket) optimization: keep an invariant that the integral of the request rate over any interval \([x,x+W]\) does not exceed \(R\).  

### Algorithms

| Algorithm | Data structure | Decision rule |
|-----------|----------------|---------------|
| **Fixed window** | Counter per epoch | `allow if counter < R` |
| **Sliding window log** | Sorted list of timestamps | Count how many in last \(W\) |
| **Token bucket** | Token count, last refill time | Refill tokens, allow if token > 0 |

The token‑bucket is the most efficient because it amortizes work: only one arithmetic operation per request.

### Non‑obvious Insight

Most people treat rate limits as *hard caps*, but a token bucket actually implements an **optimal control** policy.  
If you think of tokens as *credit* and requests as *debit*, the bucket is a simple form of *drift‑control*: the system’s state (token count) drifts toward \(B\) when idle, guaranteeing that any burst up to \(B\) can be served while maintaining long‑term average \(R/W\).

### Example: Python Token Bucket

```python
import time

class TokenBucket:
    def __init__(self, rate, window, capacity=None):
        self.rate = rate                # tokens per second
        self.capacity = capacity or rate * window  # max burst
        self.tokens = self.capacity
        self.last = time.monotonic()

    def allow(self) -> bool:
        now = time.monotonic()
        # Refill proportional to elapsed time
        self.tokens += (now - self.last) * self.rate
        if self.tokens > self.capacity:  # clamp
            self.tokens = self.capacity
        self.last = now

        if self.tokens >= 1.0:
            self.tokens -= 1.0          # consume a token
            return True
        return False
```

The algorithm is *O(1)* per request, uses constant memory, and satisfies the throughput constraint by construction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
