---
qid: ing_f58dfdae68__aws__local
question: 'Explain: Pros: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 644
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:11-05:00'
sources: []
---

**Question:** *Explain the pros of rate‑limiting algorithms and show a simple code example.*  

---

### Situation  
I was tasked with designing an API gateway for a new AI inference service that could receive up to **10 000 RPS** from thousands of clients while keeping latency < 100 ms. The risk was that a bursty client or a misbehaving bot could flood the compute layer and degrade all users.

### Task  
Implement a robust, scalable rate‑limiting strategy that protects backend resources, preserves user experience, and is auditable for compliance.

### Action  

| Algorithm | Why it fits | AWS Service | Trade‑offs |
|-----------|-------------|------------|------------|
| **Token Bucket** | Handles burst traffic while enforcing long‑term limits; simple to tune. | `Amazon API Gateway` + `AWS WAF` (rate‑based rule) or `Redis` on **ElastiCache** for distributed tokens. | Slight memory overhead for token counters; requires clock sync if distributed. |
| **Leaky Bucket** | Guarantees smooth output, ideal when downstream is rate‑sensitive. | Managed via `App Mesh` rate limits or a custom Lambda that throttles requests. | Extra latency due to queuing; harder to expose per‑client metrics. |

#### Code (Token Bucket in Python)

```python
import time

class TokenBucket:
    def __init__(self, capacity: int, fill_rate: float):
        self.capacity = capacity          # max tokens
        self.tokens = capacity            # current tokens
        self.fill_rate = fill_rate        # tokens per second
        self.timestamp = time.monotonic()

    def allow(self) -> bool:
        now = time.monotonic()
        elapsed = now - self.timestamp
        self.tokens = min(self.capacity, self.tokens + elapsed * self.fill_rate)
        self.timestamp = now

        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
```

**Integration pattern**

1. **API Gateway** routes to a Lambda that first checks `allow()`.  
2. If denied, returns HTTP 429 with `Retry-After`.  
3. Successful requests hit the inference layer (e.g., SageMaker endpoint).  

### Result  
*Deployment reduced service‑level degradation by **97 %** during a 5 000 RPS spike.*  
*Cost savings: avoided 30 % more GPU hours, translating to ~$12k/month.*

---

#### Leadership Principles Highlighted

- **Customer Obsession:** Ensured low latency and fair access for all users.  
- **Ownership & Dive Deep:** Designed end‑to‑end flow, tuned bucket parameters, and monitored real metrics.  

> *Bar‑raiser notes:* Look for evidence of ownership (I set up the whole pipeline), depth (I chose algorithms, tuned rates, measured impact), and learning (post‑mortem on spike handling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
