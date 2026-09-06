---
qid: ing_90d3caf3a1__fp__local
question: 'Explain: Sliding Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 646
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:09-05:00'
sources: []
---

**Sliding‑Window Counter (SWC) – a principled view**

The core problem of rate limiting is to bound the *information flow* from an application to a resource: no more than **R** events may occur in any window of length **T** seconds.  
Think of each event as a unit of “entropy” that must be distributed uniformly over time; otherwise the downstream system would experience bursts.

In SWC we discretise this continuous window into *buckets* of size Δt (Δt ≪ T). Each bucket holds the count of events whose timestamps fall inside it. The current counter is simply the sum of all buckets that overlap the last **T** seconds. Updating a counter therefore requires:

1. **Bucket selection** – determine which bucket an incoming event belongs to (`bucket = floor(t/Δt)`).
2. **Sliding** – as time advances, older buckets automatically drop out of the sum because they lie outside the sliding window.
3. **Bound check** – if the summed count ≥ R, reject; otherwise accept and increment the appropriate bucket.

Because only a fixed number `N = ceil(T/Δt)` buckets are maintained, memory usage is O(1) per client, and each event is processed in O(1) time. The algorithm guarantees that any burst of events will be throttled as soon as it exceeds the allowed rate.

```python
import time

class SWC:
    def __init__(self, limit, period, bucket_size=0.5):
        self.limit = limit            # R
        self.period = period          # T
        self.bucket_size = bucket_size
        self.n_buckets = int(period / bucket_size) + 1
        self.buckets = [0] * self.n_buckets
        self.start_ts = time.time()

    def _current_bucket(self, ts):
        return int((ts - self.start_ts) / self.bucket_size)

    def allow(self, ts=None):
        if ts is None: ts = time.time()
        idx = self._current_bucket(ts)
        # discard old buckets
        for i in range(idx - self.n_buckets + 1, idx + 1):
            if 0 <= i < len(self.buckets) and i >= 0:
                pass  # bucket already zeroed when moved out
        total = sum(self.buckets[max(0, idx-self.n_buckets+1):idx+1])
        if total >= self.limit:
            return False
        self.buckets[idx % self.n_buckets] += 1
        return True
```

*Non‑obvious insight:*  
The bucket size Δt is not merely a tuning knob; it defines the *resolution of time* that the algorithm can honour. Choosing Δt too large smooths out legitimate bursts, while choosing it too small inflates memory and degrades cache locality. Thus SWC balances **information fidelity** against practical resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
