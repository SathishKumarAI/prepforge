---
qid: ing_89e3fcfdc6__faang__local
question: 'Explain: Token Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 518
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:14-05:00'
sources: []
---

**Token Bucket – Rate Limiting**

---

### **Clarify**
We need a mechanism that allows bursts up to *B* tokens while enforcing an average rate of *R* requests/sec.  
Assumptions:  
- Requests arrive independently.  
- We can store the last timestamp per client.  
- Time is measured in seconds (or ms) with sufficient resolution.

### **Approach**
1. **State** – `tokens` and `last_refill_ts`.  
2. On each request, refill tokens based on elapsed time:  
   ```python
   added = (now - last)*R
   tokens = min(B, tokens + added)
   ```
3. If `tokens ≥ 1`, consume one token → allow; else reject.

### **Depth**
```python
class TokenBucket:
    def __init__(self, rate, burst):
        self.rate = rate          # tokens per sec
        self.burst = burst        # max bucket size
        self.tokens = burst       # start full
        self.last_ts = time.monotonic()

    def allow(self):
        now = time.monotonic()
        elapsed = now - self.last_ts
        self.tokens = min(
            self.burst,
            self.tokens + elapsed * self.rate
        )
        self.last_ts = now

        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
```
Complexity: **O(1)** per request, memory O(1) per bucket.  

### **Edge Cases**
- Clock skew or leap seconds → use monotonic clock.  
- Extremely high burst requests → bucket caps the burst.  
- Low‑rate clients → tokens may underflow; algorithm still works.

### **Optimize & Communicate**
- Persist bucket state in Redis for distributed systems.  
- Use integer math (micro‑seconds) to avoid floating errors.  
- Explain trade‑offs: token bucket allows bursts but guarantees long‑term average, unlike fixed window counters that can spike at boundaries.  

By structuring the explanation—clarifying assumptions, outlining steps, diving into code and complexity, covering edge cases, then discussing optimizations—we demonstrate clear problem solving, communication, and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
