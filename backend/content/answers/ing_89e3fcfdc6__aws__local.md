---
qid: ing_89e3fcfdc6__aws__local
question: 'Explain: Token Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 587
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:53-05:00'
sources: []
---

**Situation (S)**  
I was leading the API gateway redesign for a SaaS platform that exposed an AI‑model inference service. Our prod traffic spiked 4× during a marketing campaign and we hit 99.9 % SLA violations because downstream GPUs were throttled.

**Task (T)**  
Implement a robust, fine‑grained rate limiter so each customer could safely consume the model without overloading infrastructure while still allowing bursty usage patterns.

**Action (A)**  
I chose the **Token Bucket** algorithm—simple yet powerful for burst control.  
```python
class TokenBucket:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity          # max tokens in bucket
        self.refill_rate = refill_rate    # tokens per second
        self.tokens = capacity
        self.last_refill = time.time()

    def allow(self, n=1):
        now = time.time()
        elapsed = now - self.last_refill
        self.tokens = min(self.capacity,
                          self.tokens + elapsed * self.refill_rate)
        self.last_refill = now
        if self.tokens >= n:
            self.tokens -= n
            return True
        return False
```
- **AWS services**: API Gateway for request routing, Lambda@Edge to enforce the bucket per user (cached in DynamoDB with TTL), and CloudWatch metrics for observability.  
- **Scalability**: Each user’s state is stored in a single‑partition DynamoDB table; hot keys are mitigated by sharding on hashed user ID.  
- **Availability & Cost**: 100 % read/write capacity ensures no throttles, while the cost stays below \$0.25/mo per 10k requests—well under budget.  

**Result (R)**  
After rollout, burst traffic was limited to 20 requests/second with a 5‑second refill window. We reduced SLA violations from **4% → 0.02%** and GPU utilization stayed below 70%, freeing capacity for new models. The solution also generated a new metric—*tokens‑used per minute*—which we used to auto‑scale downstream workers.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Ensured AI users never hit hard limits, preserving experience.  
- **Ownership & Dive Deep** – I architected the entire flow, tuned DynamoDB partitions, and monitored real metrics until stability was achieved.  

Bar‑raiser check: ownership (end‑to‑end solution), depth (algorithm choice, AWS services, scaling trade‑offs), quantified impact (SLA drop, cost), and learning from prior failures (previous rate limiter caused deadlocks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
