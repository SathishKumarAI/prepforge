---
qid: ing_6fef0a45e5__faang__local
question: 'Explain: Sliding Window Log — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 592
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:03:21-05:00'
sources: []
---

**Sliding‑Window Rate Limiter (AI‑ops)**  
*FAANG‑style answer – 200 words*

---

### 1️⃣ Clarify
We want to limit an API’s calls to *N* requests per *T* seconds, but we must support bursts and avoid the “thundering herd” that a simple fixed window causes.  
Assumptions:  
- Requests arrive in real time (not batch).  
- The system can store timestamps or counters in Redis/DB.  
- We need sub‑second latency for each check.

### 2️⃣ Approach
1. **Store** the timestamp of every request in a sliding window list (or sorted set).  
2. On a new request, **purge** entries older than `now – T`.  
3. If the remaining count < N → allow; else reject.  

This gives an exact sliding‑window semantics while keeping memory proportional to the burst size.

### 3️⃣ Depth
```python
import time
from collections import deque

class SlidingWindowLimiter:
    def __init__(self, limit: int, window: float):
        self.limit = limit          # N requests
        self.window = window        # T seconds
        self.timestamps = deque()   # sorted by arrival

    def allow(self) -> bool:
        now = time.monotonic()
        # drop stale entries
        while self.timestamps and self.timestamps[0] <= now - self.window:
            self.timestamps.popleft()

        if len(self.timestamps) < self.limit:
            self.timestamps.append(now)
            return True
        return False
```
- **Complexity:** O(k) purge per call, where *k* ≤ N (worst‑case).  
- **Trade‑off:** Memory grows with burst size; in production use Redis sorted sets (`ZADD`, `ZREMRANGEBYSCORE`) for persistence.

### 4️⃣ Edge Cases
- Clock skew: use monotonic clock.  
- Extremely high bursts → O(N) per request may hit latency; batch purge or approximate counters help.  
- Distributed systems: ensure atomicity via Redis transactions or Lua scripts.

### 5️⃣ Optimize & Communicate
For heavy traffic, switch to a *leaky‑bucket* or *token bucket* approximation that gives O(1) checks while still respecting the average rate. Explain this trade‑off during the interview and present benchmarks (e.g., 100 k req/s with < 2 ms latency).  

By structuring the answer—clarifying, planning, detailing, testing, and optimizing—you demonstrate clear problem solving, deep technical knowledge, and communication skill expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
