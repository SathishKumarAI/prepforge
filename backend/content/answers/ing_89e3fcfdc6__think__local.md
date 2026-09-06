---
qid: ing_89e3fcfdc6__think__local
question: 'Explain: Token Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 693
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:09:52-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
*What the user really wants:* a clear, step‑by‑step mental model of how a token bucket works for rate limiting, plus a short code snippet that illustrates it in practice.  
*Assumptions to state upfront:* we’re talking about a *token bucket* (not leaky bucket), a fixed capacity `C`, a refill rate `R` tokens/second, and an incoming request stream.

**2️⃣ Adopt the token‑bucket mental model**  
- Visualize the bucket as a container that can hold at most `C` tokens.  
- Tokens are added continuously at rate `R`.  
- Each request consumes one token; if no tokens remain, the request is denied or delayed.  
- Think of it as “budget” that accrues over time and is spent on requests.

**3️⃣ Step‑by‑step reasoning**  
1. **State variables**: `tokens`, `last_refill_ts`.  
2. **On each request**:
   - Compute elapsed time since last refill → `dt = now – last_refill_ts`.  
   - Refill: `tokens = min(C, tokens + dt * R)`.  
   - Update `last_refill_ts` to `now`.  
3. **Decision**: If `tokens ≥ 1`, accept request (`tokens -= 1`). Else reject or queue.  
4. **Edge cases**: initial bucket full; bursts allowed up to `C`; rate enforcement over long periods.

**4️⃣ Common pitfalls to avoid**  
- Forgetting the *min* when refilling (bucket can overflow).  
- Using integer division for `dt` → lose fractional tokens.  
- Ignoring clock skew or drift if distributed systems are involved.  
- Mixing up “rate limiting” vs “throttling”; token bucket allows bursts, leaky bucket doesn’t.

**5️⃣ Sanity‑check & verbalize**  
*Check*: simulate with a few timestamps to see tokens grow linearly and drop on requests.  
*Explain aloud*: “At time 0 we have 10 tokens (full). At t=2 s, 2 tokens are added → 12 but capped at 10. A request consumes one → 9 left. If we send 15 rapid requests, the first 10 succeed; the rest fail until more tokens refill.”  

**Example code (Python)**

```python
import time

class TokenBucket:
    def __init__(self, capacity, rate):
        self.capacity = capacity          # C
        self.rate = rate                  # R tokens/sec
        self.tokens = capacity            # start full
        self.last = time.monotonic()

    def allow(self):
        now = time.monotonic()
        elapsed = now - self.last
        self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)
        self.last = now

        if self.tokens >= 1:
            self.tokens -= 1
            return True   # request allowed
        return False      # rate‑limit hit
```

Use `allow()` before processing a request. This snippet follows the mental model exactly: refill based on elapsed time, cap at capacity, consume one token per allowed request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
