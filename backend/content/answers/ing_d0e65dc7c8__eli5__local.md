---
qid: ing_d0e65dc7c8__eli5__local
question: 'Explain: How it works: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 355
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:22-05:00'
sources: []
---

Imagine a coffee shop that only lets a handful of customers order at once to keep the barista from burning out.  
**Rate‑limiting** is like setting up rules for how many orders you can place per minute.  

*Token Bucket*: Think of a bucket that fills with “tokens” (free orders) every second, up to a maximum size. Each time you order, you take one token. If the bucket is empty, you must wait until a new token arrives.

```python
import time

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # max tokens that can stack
        self.tokens = capacity
        self.last = time.time()

    def allow(self):
        now = time.time()
        # add new tokens since last check
        self.tokens += (now - self.last) * self.rate
        self.tokens = min(self.tokens, self.capacity)
        self.last = now

        if self.tokens >= 1:      # we can serve a request
            self.tokens -= 1
            return True
        return False
```

*Leaky Bucket*: Picture a bucket with a small hole. Water (requests) pours in fast, but it leaks out at a steady rate. If the bucket overflows, new water is spilled—those requests are rejected.

Both keep traffic smooth, preventing a sudden burst from overwhelming your system, just like a coffee shop keeps its barista from drowning in orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
