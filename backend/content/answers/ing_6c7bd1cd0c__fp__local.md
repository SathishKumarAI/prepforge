---
qid: ing_6c7bd1cd0c__fp__local
question: 'Explain: Cons: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 617
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:54:58-05:00'
sources: []
---

Rate‑limiting is the **control of event density** in a stream: we want to ensure that no user or process can exceed *k* events per unit time *T*.  
Mathematically it is a **queueing problem with capacity constraints**. The system must decide, for each incoming request, whether there exists sufficient “room” in the last *T* seconds. If not, the request is dropped or delayed.

### 1. Token Bucket (probabilistic smoothing)

```python
class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity          # max tokens
        self.tokens   = capacity
        self.refill_rate = refill_rate    # tokens per second
        self.last_ts  = time.time()

    def allow(self):
        now = time.time()
        dt  = now - self.last_ts
        self.tokens = min(self.capacity,
                          self.tokens + dt * self.refill_rate)
        self.last_ts = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
```

Tokens are replenished at a constant rate; each request consumes one token. This yields **smooth** traffic: bursts up to the bucket capacity are tolerated, but long‑term average stays below *refill_rate*.

### 2. Leaky Bucket (deterministic pacing)

```python
class LeakyBucket:
    def __init__(self, capacity, leak_rate):
        self.capacity = capacity          # max queued requests
        self.leak_rate = leak_rate        # slots per second
        self.queue     = collections.deque()
        self.last_ts   = time.time()

    def allow(self):
        now = time.time()
        dt  = now - self.last_ts
        # release queued items at the leak rate
        for _ in range(int(dt * self.leak_rate)):
            if self.queue:
                self.queue.popleft()
        self.last_ts = now

        if len(self.queue) < self.capacity:
            self.queue.append(now)
            return True
        return False
```

The bucket drains at a fixed rate; any surplus requests are queued until space frees. It guarantees **strict pacing** (every *1/leak_rate* seconds a request is served), useful when downstream systems cannot tolerate bursts.

---

#### Non‑obvious insight  
Both algorithms reduce to **reservoirs in a stochastic process**: the token bucket is an *exponential‑arrival* buffer, while the leaky bucket enforces a *renewal* process. Choosing between them hinges on whether you need *smoothness* (token) or *hard deadlines* (leak). In practice, many services combine both—using a token bucket to allow short bursts and a leaky bucket to guarantee overall throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
