---
qid: ing_71003d13c4__faang__local
question: 'Explain: How It Works : — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 569
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:39-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how rate‑limiting works and give a code example. Assume the system is HTTP‑based, needs to enforce *X requests per Y seconds* for each client (IP or API key). We’ll ignore persistence across restarts and focus on in‑memory logic.

**Approach**  
1. Pick an algorithm: Token Bucket (smooth, allows bursts) vs Fixed Window (simpler but can spike).  
2. Show the core data structure (hash map of counters/timestamps).  
3. Implement request handling: check bucket, refill, accept or reject.  

**Depth**  
```python
import time
from collections import defaultdict

class TokenBucket:
    def __init__(self, rate, per):
        self.rate = rate          # tokens added each period
        self.per  = per           # seconds per period
        self.capacity = rate     # max bucket size
        self.buckets = defaultdict(lambda: [self.capacity, time.time()])

    def allow(self, key):
        tokens, last = self.buckets[key]
        now = time.time()
        elapsed = now - last
        refill = (elapsed / self.per) * self.rate
        if refill > 0:
            tokens = min(self.capacity, tokens + refill)
            last = now
        if tokens >= 1:
            tokens -= 1
            self.buckets[key] = [tokens, last]
            return True
        self.buckets[key] = [tokens, last]
        return False

# Usage in a request handler
bucket = TokenBucket(rate=5, per=60)   # 5 req/min
def handle(req):
    if not bucket.allow(req.client_ip):
        return "429 Too Many Requests"
    return "200 OK"
```
*Complexity*: O(1) per request; memory grows with distinct clients.  
*Trade‑offs*: Token Bucket smooths traffic but requires floating arithmetic; Fixed Window is simpler but can allow bursty spikes.

**Edge Cases**  
- Clock skew or NTP jumps → reset timestamps.  
- High cardinality keys → eviction policy (LRU).  
- Distributed deployment → need shared store (Redis) or consistent hashing.

**Optimize & Communicate**  
Explain that for production, we’d move the bucket state to Redis with atomic Lua scripts to avoid race conditions, and add a global rate limit per API key. Highlight that testing would involve simulating burst traffic and measuring latency impact. This structure demonstrates clear problem restatement, thoughtful algorithm choice, efficient implementation, edge‑case awareness, and practical deployment considerations—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
