---
qid: ing_ec8c9dd4e4__faang__local
question: 'Explain: Fixed Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 529
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:50:30-05:00'
sources: []
---

**Clarify**  
We need to explain how a *fixed‑window counter* rate limiter works and provide an implementation (e.g., in Go/Python). Assume the goal is to allow up to **N** requests per time window **T** for each key (user/IP). Clarify that the algorithm resets counts every T seconds, ignoring partial windows.

---

**Approach**  
1. Store a counter + timestamp for each key.  
2. On request:  
   * If current time > stored timestamp + T → reset count to 0 and update timestamp.  
   * Increment count; if count ≤ N → allow, else reject.  
3. Persist counters in an in‑memory store (Redis hash) or local map for demo.

---

**Depth**  
```python
import time
from collections import defaultdict

class FixedWindowLimiter:
    def __init__(self, limit: int, window: int):
        self.limit = limit          # N requests
        self.window = window        # T seconds
        self.store = defaultdict(lambda: [0, 0])   # key -> [count, start_ts]

    def allow(self, key: str) -> bool:
        now = time.time()
        count, ts = self.store[key]
        if now > ts + self.window:          # new window
            self.store[key] = [1, now]
            return True
        if count < self.limit:              # within limit
            self.store[key][0] += 1
            return True
        return False                         # rate‑limited
```
*Complexity*: O(1) per request; memory grows with distinct keys.  
*Trade‑off*: Simple but suffers from *burst* at window edges (e.g., two windows back‑to‑back).

---

**Edge Cases**  
- Clock skew: use monotonic clock or synchronize servers.  
- Key eviction: stale entries linger; add TTL cleanup.  
- Distributed deployment: need atomic increment (Redis INCR) to avoid race conditions.

---

**Optimize & Communicate**  
To smooth bursts, switch to a *sliding window* or *token bucket*. Explain that while the fixed window is easy and fast, it can allow N × 2 requests in a short span if windows align with traffic spikes. Convey trade‑offs clearly: simplicity vs. fairness. Use concise code snippets and complexity bullets so interviewers see both depth and communication skills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
