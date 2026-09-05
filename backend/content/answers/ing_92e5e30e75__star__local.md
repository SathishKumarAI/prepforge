---
qid: ing_92e5e30e75__star__local
question: 'Explain: 20 Rate Limiting Algorithms — Rate Limiting Algorithms Explained
  with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 435
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:43-05:00'
sources: []
---

**Situation:** While leading the API gateway for a fintech startup, our traffic spiked during a flash sale. The backend couldn’t handle more than 10 k requests per second without throttling, so we needed a flexible rate‑limiting system that could adapt to different user tiers.

**Task:** Design and implement a suite of 20 common algorithms (token bucket, leaky bucket, fixed window, sliding log, sliding window counter, exponential backoff, etc.) in Go, expose them via a pluggable middleware, and demonstrate how each protects the service while keeping latency low.

**Action:** I built a modular package (`ratelimit`) where each algorithm is a struct implementing `Limit(req *http.Request) bool`. For example, the token bucket uses Redis to store tokens:

```go
type TokenBucket struct{ Key string; Capacity, Rate int }
func (t *TokenBucket) Limit(r *http.Request) bool {
    key := t.Key + ":" + r.RemoteAddr
    tokens := redis.Get(key).Int()
    if tokens <= 0 { return false }
    redis.DecrBy(key,1)
    go func(){ time.Sleep(time.Second/ time.Duration(t.Rate)) ; redis.Incr(key) }()
    return true
}
```

Other algorithms use in‑memory counters or Lua scripts for atomicity. I benchmarked each under simulated load (locust) and tuned parameters to keep 95 % of requests within 50 ms.

**Result:** The gateway handled a 25 k RPS surge without any service outages, reducing error rate from 3.2 % to <0.1 %. Engineers now pick the right algorithm per endpoint (e.g., sliding window for payment routes). I learned how trade‑offs—accuracy vs. memory usage—shape design decisions and how a well‑structured API keeps complex logic maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
