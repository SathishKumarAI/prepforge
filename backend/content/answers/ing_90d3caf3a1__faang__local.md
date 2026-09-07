---
qid: ing_90d3caf3a1__faang__local
question: 'Explain: Sliding Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 505
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:10-05:00'
sources: []
---

**Clarify**  
We need a sliding‑window counter that limits requests per user (or IP) over a time window *T* (e.g., 1 min). Clarify:  
- Is the limit inclusive of the current request?  
- Are we counting all events or only successful ones?  
- Do we need exactness or an approximate solution for high throughput?

**Approach**  
Use a per‑key list/queue of timestamps, purging entries older than *T*. The count is `len(queue)`; if ≥ max, reject. To keep memory bounded, store only recent timestamps and use efficient data structures (e.g., `deque` in Python or ring buffer in Go).

**Depth**  
```python
from collections import deque
import time

class SlidingWindowLimiter:
    def __init__(self, limit: int, window_sec: float):
        self.limit = limit
        self.window = window_sec
        self.store = {}  # key -> deque[timestamps]

    def allow(self, key: str) -> bool:
        now = time.monotonic()
        q = self.store.setdefault(key, deque())
        # purge old timestamps
        while q and q[0] <= now - self.window:
            q.popleft()
        if len(q) >= self.limit:
            return False
        q.append(now)
        return True
```
**Complexity**:  
- Amortized O(1) per request (each timestamp is enqueued once, dequeued once).  
- Memory ≈ `limit * #active_keys`.  
Trade‑offs: exactness vs. space; for millions of keys, consider a probabilistic counter (Count‑Min Sketch + time buckets).

**Edge Cases**  
- Clock skew: use monotonic clock.  
- Burst at window boundary: queue purge ensures correct count.  
- Extremely high request rate → memory blowup; test with burst patterns.

**Optimize & Communicate**  
For scaling, shard by key hash and run each shard on its own thread/process to avoid contention. If latency must be < 1 ms, pre‑allocate a fixed-size ring buffer per key instead of a dynamic deque. Explain that the sliding window gives tighter limits than a leaky bucket while still being simple enough for real‑time enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
