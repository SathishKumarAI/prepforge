---
qid: ing_92e5e30e75__fp__local
question: 'Explain: 20 Rate Limiting Algorithms — Rate Limiting Algorithms Explained
  with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 722
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:17:47-05:00'
sources: []
---

**Rate‑limiting is a control‑theoretic problem:**  
We have a *process* (an API endpoint) that consumes a finite resource (bandwidth, CPU). Each request arrives as an impulse; the process must keep its *output*—the number of accepted requests per unit time—within a set envelope. If we view the queue of pending requests as a **reservoir** and the service rate as the outflow, the goal is to keep the reservoir from overflowing or starving.  

This leads naturally to **queue‑based control laws**:

| Algorithm | Reservoir model | Control law | Why it works |
|-----------|-----------------|-------------|--------------|
| Token Bucket | Tokens accumulate at rate *R* up to capacity *C*. A request consumes a token. | `if tokens>=1: accept; tokens--` | Guarantees **peak burst** ≤ *C*, long‑term average ≤ *R*. |
| Leaky Bucket | Requests are queued; processed at fixed rate *R*. | `process_next_if_queue_not_empty()` | Produces a **smooth output stream** regardless of input spikes. |
| Fixed Window | Count requests in each interval *T*. | Reset counter every *T*. | Simple but suffers from boundary “burst” (two windows). |
| Sliding Log | Store timestamps of all accepted requests; drop those older than *T*. | `if len(log)<N: accept` | Exact sliding window, O(N) memory. |
| Sliding Window Counter | Maintain buckets for sub‑intervals; sum over last *T*. | Approximate log with fixed buckets. | O(1) time, bounded error. |

**Derivation from information theory:**  
The service rate *R* is the channel capacity. Each request carries a *symbol* of information. By enforcing a token budget equal to the channel’s capacity per unit time, we ensure that the average **entropy flow** does not exceed what the system can reliably deliver—otherwise noise (rejection) increases.

**Non‑obvious insight:**  
Most engineers treat rate limiting as “cut off after N requests”. The deeper point is that *the shape of the outflow* matters. A leaky bucket smooths traffic, reducing bursty load on downstream caches and queues. Token buckets allow bursts but keep the average bounded—useful for burst‑tolerant protocols like MQTT. Choosing the wrong control law can cause either under‑utilization (tokens wasted) or queue buildup (latency spikes).

```python
# Token Bucket in Python
class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # max bucket size
        self.tokens = capacity
        self.last = time.monotonic()

    def allow(self, n=1):
        now = time.monotonic()
        elapsed = now - self.last
        self.tokens = min(self.capacity,
                          self.tokens + elapsed * self.rate)
        self.last = now
        if self.tokens >= n:
            self.tokens -= n
            return True
        return False
```

By grounding rate limiting in queue‑theoretic control and information limits, we design algorithms that not only cap traffic but also shape it to match the system’s true capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
