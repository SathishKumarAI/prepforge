---
qid: ing_90d3caf3a1__eli5__local
question: 'Explain: Sliding Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 314
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:33-05:00'
sources: []
---

Think of a sliding‑window counter like a *moving glass* that watches how many people walk past a doorway in the last minute.  
The glass is 60 seconds wide, but it keeps moving forward every second. Each time someone walks through, you drop a “tick” into the glass. When the glass slides past the left edge, any ticks older than 60 seconds fall out and are forgotten.  
In code we keep a list of timestamps for each request:

```python
import time

class RateLimiter:
    def __init__(self, limit=100, window=60):
        self.limit = limit          # max requests allowed
        self.window = window        # seconds in the sliding window
        self.timestamps = []        # all request times

    def allow(self):
        now = time.time()
        # remove timestamps older than the window
        self.timestamps = [t for t in self.timestamps if now - t < self.window]
        if len(self.timestamps) < self.limit:
            self.timestamps.append(now)
            return True             # request allowed
        return False                # rate limit exceeded
```

Every second, the list “slides” forward; old entries drop out automatically. That’s the sliding‑window counter in action: it counts requests only within the most recent time span, giving a smooth, real‑time throttle rather than abrupt blocks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
