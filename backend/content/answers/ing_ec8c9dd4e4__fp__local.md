---
qid: ing_ec8c9dd4e4__fp__local
question: 'Explain: Fixed Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 550
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:22:41-05:00'
sources: []
---

**Why a “fixed‑window counter” works**

A service must keep the number of requests \(R(t)\) within a quota \(Q\) over each time interval \(\Delta t\).  
The fundamental constraint is *memory*—we cannot store every request timestamp, yet we need to know if adding another one will exceed \(Q\).  
Let \(W_k=[k\Delta t,(k+1)\Delta t)\) be the current window.  
If we maintain a counter \(C_k=\#\{r_i\in W_k\}\), then:

* **Add**: on request, increment \(C_k\).
* **Expire**: when time passes to window \(W_{k+1}\), reset \(C_{k+1}=0\).

This satisfies the constraint because every request is counted exactly once in its window; no history beyond \(\Delta t\) is needed.  
The algorithm is optimal under the *stateless* assumption: any method that keeps more than one integer per window can be reduced to this form without changing behaviour.

**Non‑obvious insight**  
Because windows are aligned with absolute time (e.g., 00:00–00:59), a burst of requests at the boundary can exceed \(Q\) twice in quick succession. This “edge case” is why many systems adopt *sliding logs* or *leaky bucket* to smooth spikes, but the fixed‑window counter remains the simplest and most efficient for low‑traffic services.

---

```python
import time

class FixedWindowLimiter:
    def __init__(self, quota: int, window_sec: int):
        self.quota = quota
        self.window = window_sec
        self.count = 0
        self.start = int(time.time() // self.window) * self.window

    def allow(self) -> bool:
        now = time.time()
        current_window = int(now // self.window) * self.window
        if current_window != self.start:          # new window → reset
            self.start, self.count = current_window, 0
        if self.count < self.quota:
            self.count += 1
            return True
        return False

# Usage
limiter = FixedWindowLimiter(quota=5, window_sec=60)
for _ in range(7):
    print(limiter.allow())
```

The code shows the counter resetting automatically when the epoch‑aligned window changes, ensuring requests are limited to the defined quota.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
