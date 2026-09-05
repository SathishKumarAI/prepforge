---
qid: ing_6c7bd1cd0c__star__local
question: 'Explain: Cons: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 400
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:54-05:00'
sources: []
---

**Situation:**  
During a sprint to integrate an external recommendation API into our e‑commerce platform, we hit a snag—our traffic spiked during flash sales and the API throttled us at 60 requests per minute, causing cart abandonment.

**Task:**  
I had to design and implement a rate‑limiting solution that respected the provider’s limits while keeping latency low for users.

**Action:**  
I chose a token bucket algorithm. In Python I used `asyncio` and Redis as the shared state store:

```python
import asyncio, aioredis

BUCKET = "api_bucket"
CAPACITY = 60
REFILL_RATE = 1  # token per second

async def acquire_token(redis):
    async with redis.pipeline() as pipe:
        while True:
            try:
                await pipe.watch(BUCKET)
                tokens = int(await pipe.get(BUCKET) or CAPACITY)
                if tokens > 0:
                    await pipe.multi()
                    await pipe.decr(BUCKET)
                    await pipe.execute()
                    return
                else:
                    await pipe.unwatch()
                    await asyncio.sleep(1/REFILL_RATE)
            except aioredis.WatchError:
                continue

async def call_api():
    redis = await aioredis.create_redis_pool('redis://localhost')
    await acquire_token(redis)
    # make request...
```

I also added a fallback queue for excess requests, capped at 30 s delay.

**Result:**  
Within two weeks the cart‑abandonment rate dropped from 12% to 4%. API calls hit the limit only 0.8% of the time, and we saw a 15% lift in conversion during high‑traffic periods. I learned that choosing the right algorithm and backing it with a fast, shared store can turn a hard external constraint into a transparent performance win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
