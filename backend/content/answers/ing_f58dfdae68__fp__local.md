---
qid: ing_f58dfdae68__fp__local
question: 'Explain: Pros: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 791
total_tokens: 962
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:41:41-05:00'
sources: []
---

### Why a *rate limiter* is essential for AI services

When an AI model (e.g., a large‑language‑model API) processes requests, every inference consumes compute, memory and sometimes paid cloud resources. If traffic spikes, the provider can be throttled, the queue can grow unbounded, or billing can explode.  
A rate limiter guarantees **predictable resource consumption** by enforcing a *policy*—“no more than *k* requests per unit time.” It also protects downstream systems (databases, GPUs) from being overwhelmed and gives operators a clear SLA.

---

### Fundamental principle: *constrained optimization over a sliding window*

We want to maximize throughput while keeping the **average rate** ≤ *k*.  
Mathematically:

\[
\frac{1}{T}\int_{t-T}^{t} r(\tau)\,d\tau \le k
\]

where \(r(t)\) is the instantaneous request rate. The *sliding window* enforces this constraint locally; it’s equivalent to solving a convex optimization where the cost function penalizes exceeding *k*.  

---

### Common algorithms

| Algorithm | Core idea | Complexity |
|-----------|-----------|------------|
| **Token Bucket** | Tokens are added at rate *r*, each request consumes one token. If no tokens → reject. | O(1) per request |
| **Leaky Bucket** | Fixed-size queue; requests leave the bucket at constant rate *r*. | O(1) if using a circular buffer |
| **Fixed Window Counter** | Count requests in discrete windows of size *T*. | O(1) but suffers from “burst” boundary issues |
| **Sliding Log** | Store timestamps of last *k* requests; reject if the oldest is within *T*. | O(k) per request, but exact |

---

### Token Bucket in Python (asyncio)

```python
import asyncio
import time

class TokenBucket:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity          # max tokens
        self.tokens   = capacity          # current tokens
        self.rate     = refill_rate       # tokens per second
        self.last_refill = time.monotonic()
        self.lock = asyncio.Lock()

    async def acquire(self) -> bool:
        async with self.lock:
            now = time.monotonic()
            elapsed = now - self.last_refill
            self.tokens = min(
                self.capacity,
                self.tokens + elapsed * self.rate
            )
            self.last_refill = now

            if self.tokens >= 1:
                self.tokens -= 1
                return True          # allowed
            else:
                return False         # throttled
```

Usage:

```python
bucket = TokenBucket(capacity=10, refill_rate=5)   # 5 req/s, burst up to 10

async def handle_request():
    if await bucket.acquire():
        # call AI inference
    else:
        raise HTTPException(status_code=429)
```

---

### Non‑obvious insight

**The *capacity* parameter is not just a “buffer” for bursts; it shapes the *confidence interval* of your SLA.**  
A higher capacity allows occasional spikes without rejection, but also permits the system to deviate further from the target rate, making the actual throughput highly variable. In contrast, a low capacity keeps the process tight around *k*, yielding more predictable latency—critical for real‑time AI applications like dialogue agents or autonomous vehicles.

---

**Bottom line:**  
Rate limiting is a lightweight, mathematically grounded safeguard that turns raw compute into a controllable service, balancing cost, reliability, and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
