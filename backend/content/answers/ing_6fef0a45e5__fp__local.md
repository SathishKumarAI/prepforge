---
qid: ing_6fef0a45e5__fp__local
question: 'Explain: Sliding Window Log — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 500
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:02:05-05:00'
sources: []
---

**Why a sliding‑window log is needed**

Rate limits guard services against abuse by bounding the number of requests per *interval*.  
A naïve fixed‑window counter (e.g., “≤ 100 in each hour”) suffers from *burst leakage*: a client can send 100 requests just before an hour rolls over, then immediately send another 100 right after. The algorithm must respect the *continuous* rate: no more than **R** requests per any contiguous time span of length **T**.

A sliding‑window log keeps the exact timestamps of every request that falls within the last **T** seconds. By discarding old entries and counting the remaining ones, we enforce

\[
|\{t_i : t - T < t_i \le t\}| \le R
\]

for every time \(t\). This is a direct discretization of the continuous inequality above; no approximation or rounding error can produce an illegal burst.

**Core insight:**  
The log’s size never exceeds **R**, so memory and lookup are bounded by the rate itself, not by the total traffic volume. That guarantees constant‑time enforcement regardless of how many users share the service.

**Python sketch**

```python
from collections import deque
import time

class SlidingWindowLimiter:
    def __init__(self, max_requests: int, window_seconds: float):
        self.max = max_requests
        self.window = window_seconds
        self.times = deque()          # timestamps of accepted requests

    def allow(self) -> bool:
        now = time.monotonic()
        # purge old entries
        while self.times and self.times[0] <= now - self.window:
            self.times.popleft()

        if len(self.times) < self.max:   # space for another request
            self.times.append(now)
            return True
        return False

# Example usage
limiter = SlidingWindowLimiter(5, 10)  # 5 req/10 s
for _ in range(7):
    print(limiter.allow(), time.time())
```

The deque stores at most **max** timestamps; `allow()` runs in \(O(1)\) amortized time. This design satisfies the continuous‑rate requirement while remaining lightweight and deterministic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
