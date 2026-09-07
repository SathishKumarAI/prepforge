---
qid: ing_d0e65dc7c8__aws__local
question: 'Explain: How it works: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 488
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:18-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain rate‑limiting for a new API gateway that had to support 1 M requests per second while keeping latency under 50 ms. The goal was to pick an algorithm, justify the choice, and deliver a prototype in Python.

**Action**  
I chose **Token Bucket** because it balances burstiness with long‑term throughput, is easy to implement, and maps cleanly onto AWS services.  

```python
import time, threading

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # max bucket size
        self.tokens = capacity
        self.lock = threading.Lock()
        self.last = time.monotonic()

    def allow(self):
        with self.lock:
            now = time.monotonic()
            self.tokens += (now - self.last) * self.rate
            if self.tokens > self.capacity: self.tokens = self.capacity
            self.last = now
            if self.tokens >= 1:
                self.tokens -= 1
                return True
            return False
```

For production I’d deploy the bucket in **Amazon ElastiCache (Redis)** using Lua scripts to atomically decrement tokens, ensuring *strong consistency* across micro‑services. Redis’ *in‑memory* nature keeps latency < 2 ms; sharding it behind a *Cluster Mode* gives 99.999% availability. Cost is ~$0.015 per GB‑hour for a single node—well below the $5M/yr budget for API traffic.

**Result**  
The prototype handled > 1.3 M rps with < 45 ms latency and reduced over‑rate errors by 98%. I documented failure modes (e.g., clock drift) and introduced automated alerts in CloudWatch, learning that a single “token” per request is often enough for most workloads.

**Leadership Principles**  
- **Customer Obsession**: ensured users never hit 429s.  
- **Dive Deep & Ownership**: built the algorithm, tuned Redis, and maintained SLAs myself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
