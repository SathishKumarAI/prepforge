---
qid: ing_6fef0a45e5__eli5__local
question: 'Explain: Sliding Window Log — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 324
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:32-05:00'
sources: []
---

**Sliding‑Window Log – a traffic light for your API**

Imagine a busy café where customers can order only a few drinks in any given minute. The café keeps a *log* of every order time and checks the log each new request: “How many orders were placed in the last 60 seconds?” If it’s below the limit, serve; otherwise, say sorry.

In code you keep an array (the log) of timestamps for accepted requests. When a new request comes:

1. Remove any timestamps older than `windowSize` seconds from now.
2. If the remaining count is less than `maxRequests`, accept and push the current time onto the log.
3. Otherwise, reject.

```python
import time

class SlidingWindowLog:
    def __init__(self, max_requests, window_seconds):
        self.max = max_requests
        self.window = window_seconds
        self.log = []

    def allow(self):
        now = time.time()
        # drop old entries
        while self.log and self.log[0] <= now - self.window:
            self.log.pop(0)
        if len(self.log) < self.max:          # we’re under the limit
            self.log.append(now)
            return True                       # allow request
        return False                          # rate‑limited
```

Just like the café’s log, this algorithm guarantees that no more than `max_requests` happen in any sliding window of time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
