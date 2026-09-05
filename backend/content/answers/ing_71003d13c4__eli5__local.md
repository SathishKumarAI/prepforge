---
qid: ing_71003d13c4__eli5__local
question: 'Explain: How It Works : — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 335
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:42-05:00'
sources: []
---

Imagine a coffee shop that can only serve ten customers per minute because the barista needs time to brew each cup. If more people try to order at once, the shop queues them and lets only a few go through each second. That’s exactly what **rate limiting** does for computers: it caps how many requests (like orders) a user or app can make in a given period so servers stay healthy.

A simple algorithm is the **Token Bucket**:

```python
import time

class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity          # max tokens stored
        self.tokens   = capacity          # current tokens
        self.rate     = refill_rate       # tokens per second
        self.last_refill = time.time()

    def allow(self):
        now = time.time()
        elapsed = now - self.last_refill
        self.tokens = min(self.capacity,
                          self.tokens + elapsed * self.rate)
        self.last_refill = now

        if self.tokens >= 1:              # enough tokens to serve request?
            self.tokens -= 1
            return True                   # allow the request
        return False                      # rate‑limit hit
```

When a client calls `allow()`, the bucket gives them a “token” if one is available; otherwise it denies the request. Tokens refill over time, just like coffee cups become ready again after the barista finishes brewing. This keeps traffic smooth and servers from crashing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
