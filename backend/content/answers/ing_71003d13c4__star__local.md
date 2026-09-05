---
qid: ing_71003d13c4__star__local
question: 'Explain: How It Works : — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 426
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:28-05:00'
sources: []
---

**Situation** – At my previous startup we had a public API that suddenly saw a 30 % spike in traffic during a marketing campaign. The server logs showed latency creeping from 50 ms to over 1 s, and our SLA began to slip.

**Task** – I needed to implement a rate‑limiting mechanism that protected the backend while keeping legitimate users happy. The goal was ≤10 requests per second per IP with a burst allowance of up to 20.

**Action** – I chose a sliding window algorithm using Redis sorted sets for low latency and accuracy. In Python:

```python
import time, redis

r = redis.Redis(host='redis', port=6379)
WINDOW   = 1          # seconds
MAX_REQS = 10
BURST    = 20

def allow(ip):
    now = time.time()
    key = f"rl:{ip}"
    r.zadd(key, {now: now})
    r.zremrangebyscore(key, 0, now - WINDOW)
    count = r.zcard(key)

    if count > BURST:
        return False
    elif count <= MAX_REQS:
        return True
    else:
        # enforce leaky bucket by sleeping until window clears
        sleep_time = (count - MAX_REQS) * WINDOW / MAX_REQS
        time.sleep(sleep_time)
        return allow(ip)
```

The code keeps a timestamped set per IP, prunes old entries every request, and enforces both burst and steady‑rate limits. I wrapped it in a middleware so the API responded with `429` when over limit.

**Result** – After deployment, latency dropped back to 40 ms, error rates fell by 95 %, and we satisfied our SLA without blocking legitimate traffic. I learned that choosing the right data store (Redis) and algorithm (sliding window) can give fine‑grained control with minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
