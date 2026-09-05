---
qid: ing_ec8c9dd4e4__eli5__local
question: 'Explain: Fixed Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 352
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:01-05:00'
sources: []
---

Imagine a parking lot that only lets a car in if there’s room, but the lot is reset every hour.  
**Fixed‑Window Counter** works like that:  
* A “window” (say 60 seconds) starts at time 0 and ends at 60.  
* The system keeps one counter for that window – how many requests have come in so far.  
* When a new request arrives, the counter is checked. If it’s below the limit (e.g., 100), the request passes and the counter goes up by one; if it’s already at 100, the request is rejected until the next hour when the counter resets to zero.

```python
from time import time

class FixedWindow:
    def __init__(self, limit=100, period=60):
        self.limit = limit          # max requests per window
        self.period = period        # window size in seconds
        self.counter = 0            # requests seen this window
        self.start   = int(time())  # window start time

    def allow(self):
        now = int(time())
        if now - self.start >= self.period:      # new window?
            self.start, self.counter = now, 0     # reset counter
        if self.counter < self.limit:
            self.counter += 1                     # accept request
            return True
        return False                               # rate‑limited
```

The lot analogy shows the key idea: a fixed time slice, one shared counter, and a simple “reset” that keeps traffic under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
