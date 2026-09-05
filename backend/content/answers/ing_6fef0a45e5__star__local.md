---
qid: ing_6fef0a45e5__star__local
question: 'Explain: Sliding Window Log — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:41-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new API for real‑time analytics. Within the first week traffic spiked, and our servers started throttling requests, causing a 30 % drop in user satisfaction.

**Task:**  
I had to design a lightweight rate‑limiter that would cap each user to 100 requests per minute without adding latency or requiring external services.

**Action:**  
I implemented a sliding‑window algorithm using Redis sorted sets. For every request I pushed the current timestamp into a set keyed by `user:{id}:requests`. Then I removed entries older than 60 seconds and counted the remaining items:

```python
import time, redis
r = redis.Redis()

def allow(user_id):
    now = int(time.time()*1000)
    key = f"user:{user_id}:reqs"
    r.zadd(key, {now: now})
    r.zremrangebyscore(key, 0, now-60000)   # keep last minute
    return r.zcard(key) <= 100
```

This runs in O(log N) per request and uses Redis’s atomic operations to avoid race conditions.

**Result:**  
Within two days the average latency dropped by 15 ms, the error rate fell below 0.1 %, and we maintained a 99.9 % uptime during peak traffic. I learned that a properly tuned sliding window can be both simple to implement and highly effective for real‑time throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
