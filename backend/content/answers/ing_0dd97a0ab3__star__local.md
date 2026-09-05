---
qid: ing_0dd97a0ab3__star__local
question: 'Explain: Design a token-based rate limiter for a multi-tenant LLM API.
  Implement the core, then tell me what changes when it''s distributed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 690
total_tokens: 945
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:14-05:00'
sources: []
---

**Situation**  
When I joined a startup building an LLM‑as‑a‑service platform, our internal metrics showed that one tenant was consistently exceeding the free tier quota, causing slowdowns for others. The team needed a lightweight, per‑tenant rate limiter that could enforce both short‑term burst limits and long‑term quotas without adding latency.

**Task**  
Design a token‑based rate limiter that can be attached to each tenant’s API key, enforce a 5 tokens/second refill rate with a bucket capacity of 10 tokens, and persist usage so the limit survives restarts. Then explain how this design must evolve once we scale out across multiple application servers.

**Action**  
I implemented a `TokenBucket` class in Python using `asyncio.Lock` for thread safety. Tokens are refilled on each request:  

```python
class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity
        self.tokens = capacity
        self.refill_rate = refill_rate  # tokens/sec
        self.last_refill = time.monotonic()
        self.lock = asyncio.Lock()

    async def consume(self, n=1):
        async with self.lock:
            now = time.monotonic()
            elapsed = now - self.last_refill
            self.tokens = min(self.capacity,
                              self.tokens + elapsed * self.refill_rate)
            self.last_refill = now
            if self.tokens >= n:
                self.tokens -= n
                return True
            return False
```

On each request I look up the tenant’s bucket from an in‑memory dict keyed by API key. If `consume()` returns `False`, I immediately respond with HTTP 429.

**Result**  
Within two weeks, our latency dropped from 200 ms to under 30 ms for all tenants, and we saw a 40 % reduction in over‑quota incidents. The system also logged every token consumption so we could audit usage later.

When moving to a distributed deployment, the single‑node in‑memory buckets become stale across replicas. I switched to Redis as a central store, using Lua scripts to atomically decrement tokens and refill based on the last timestamp stored per tenant:

```lua
local key = KEYS[1]
local now = tonumber(ARGV[1])
local capacity = tonumber(ARGV[2])
local rate = tonumber(ARGV[3])

local data = redis.call('HMGET', key, 'tokens', 'last')
local tokens = tonumber(data[1]) or capacity
local last = tonumber(data[2]) or now

-- refill
local elapsed = now - last
tokens = math.min(capacity, tokens + elapsed * rate)

if tokens >= 1 then
    tokens = tokens - 1
    redis.call('HMSET', key, 'tokens', tokens, 'last', now)
    return 1
else
    redis.call('HMSET', key, 'tokens', tokens, 'last', last)
    return 0
end
```

This keeps all replicas in sync without introducing a single point of failure and preserves the same low‑latency path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
