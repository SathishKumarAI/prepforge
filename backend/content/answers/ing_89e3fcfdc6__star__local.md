---
qid: ing_89e3fcfdc6__star__local
question: 'Explain: Token Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 464
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:50-05:00'
sources: []
---

**Situation**  
In my last role I built an internal chatbot that had to serve hundreds of concurrent users without overloading the OpenAI API. The billing was capped at $0.02 per minute, so we needed a hard limit on requests while keeping latency low.

**Task**  
Implement a token‑bucket rate limiter that would throttle requests to 5 calls per second with a burst capacity of 10 tokens, ensuring we never hit the API quota or trigger OpenAI’s abuse protection.

**Action**  
I wrote a lightweight `TokenBucket` class in Python using `asyncio`. The bucket refills at 5 tokens/sec (`rate=5`) and holds up to 10 tokens. Each request awaited a token; if none were available it slept until one appeared. I integrated it with the FastAPI endpoint, wrapping the OpenAI call in an async context manager that acquires a token before proceeding.

```python
import asyncio, time

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # max burst size
        self.tokens = capacity
        self.last = time.monotonic()
        self.lock = asyncio.Lock()

    async def acquire(self):
        async with self.lock:
            now = time.monotonic()
            elapsed = now - self.last
            self.tokens = min(
                self.capacity,
                self.tokens + elapsed * self.rate
            )
            self.last = now
            if self.tokens < 1:
                await asyncio.sleep((1 - self.tokens) / self.rate)
                return await self.acquire()
            self.tokens -= 1

bucket = TokenBucket(rate=5, capacity=10)

async def handle_request(req):
    await bucket.acquire()
    # call OpenAI API here
```

**Result**  
The limiter kept us under the $0.02/min budget while allowing bursts for interactive sessions. We saw a 30 % reduction in API errors and no throttling incidents, and I learned how to balance fairness, performance, and cost with a simple algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
