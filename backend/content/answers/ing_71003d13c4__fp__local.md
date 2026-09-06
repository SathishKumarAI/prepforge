---
qid: ing_71003d13c4__fp__local
question: 'Explain: How It Works : — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 609
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:04:55-05:00'
sources: []
---

**Why rate‑limiting matters**

A server is a finite resource; if one client can flood it, latency for all users rises.  
Mathematically we must enforce an *arrival process* \( \lambda(t) \) that never exceeds a capacity \( C \).  
The problem reduces to maintaining a **queue length** that never grows beyond what the service rate can drain.

---

### Token Bucket (the classic)

1. **State:** `tokens` – how many requests we may serve now.  
2. **Replenish rule:** every `interval` seconds, add `rate * interval` tokens up to a maximum of `capacity`.  
3. **Consume rule:** when a request arrives, decrement `tokens`; if negative → reject.

```python
import time, threading

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # max bucket size
        self.tokens = capacity
        self.last = time.monotonic()
        self.lock = threading.Lock()

    def allow(self):
        with self.lock:
            now = time.monotonic()
            elapsed = now - self.last
            self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)
            self.last = now
            if self.tokens >= 1:
                self.tokens -= 1
                return True
            return False
```

**Non‑obvious insight:**  
The bucket’s *state* is a **discrete approximation of an integral over the arrival rate**.  
If you view `tokens` as the area under the “available capacity” curve, the algorithm guarantees that the *cumulative* number of requests never exceeds the cumulative *service* capacity, regardless of burstiness.

---

### Sliding‑Window Counter

Instead of tokens, keep timestamps of recent requests and drop those older than `window`.  
This is a **continuous‑time kernel** (a rectangular window) and yields stricter guarantees: no “phantom” tokens accumulate during idle periods.  

```python
from collections import deque

class SlidingWindow:
    def __init__(self, limit, window):
        self.limit = limit          # max requests
        self.window = window        # seconds
        self.times = deque()
        self.lock = threading.Lock()

    def allow(self):
        with self.lock:
            now = time.monotonic()
            while self.times and self.times[0] <= now - self.window:
                self.times.popleft()
            if len(self.times) < self.limit:
                self.times.append(now)
                return True
            return False
```

Both schemes stem from the same principle: **constrain the integral of request rate below a capacity curve**, ensuring stability and fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
