---
qid: ing_6c7bd1cd0c__faang__local
question: 'Explain: Cons: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 473
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:55:34-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *rate‑limiting algorithms* (e.g., token bucket, leaky bucket, fixed window) and how they can be implemented in code. I’ll assume we need an in‑memory solution that supports concurrency and works across multiple requests per second.

**Approach**  
1. Pick the **token bucket** because it balances burst tolerance with a long‑term average rate.  
2. Model each client as a struct holding its token count, last refill timestamp, and max capacity.  
3. On every request:  
   - Refill tokens based on elapsed time.  
   - If a token is available, decrement and allow the call; otherwise reject.

**Depth (Go‑style pseudocode)**  

```go
type Bucket struct {
    mu          sync.Mutex
    tokens      float64
    lastRefill  time.Time
}
const (
    capacity   = 100               // max burst
    refillRate = 5.0 / time.Second // 5 req/s
)

func (b *Bucket) Allow() bool {
    b.mu.Lock()
    defer b.mu.Unlock()

    now := time.Now()
    elapsed := now.Sub(b.lastRefill).Seconds()
    b.tokens += elapsed * refillRate
    if b.tokens > capacity { b.tokens = capacity }
    b.lastRefill = now

    if b.tokens >= 1 {
        b.tokens--
        return true
    }
    return false
}
```

**Edge Cases**  
- **Clock skew**: use monotonic clocks.  
- **High contention**: lock per client, not global.  
- **Client churn**: cleanup idle buckets to avoid memory blow‑up.

**Optimize & Communicate**  
For large scale, move the bucket state into a distributed store (Redis with Lua scripts) or use a token counter in a CDN edge function. Explain trade‑offs: in‑memory is fast but single‑node; Redis gives consistency at cost of latency. Conclude by summarizing how the algorithm guarantees an average rate while permitting short bursts, matching real‑world API usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
