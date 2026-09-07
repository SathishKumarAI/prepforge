---
qid: ing_f7fa19ef95__aws__local
question: 'Explain: Leaky Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 512
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:24-05:00'
sources: []
---

**Situation & Task**  
While redesigning our recommendation micro‑service, I discovered that the upstream AI model API was throttling us: every burst of traffic would exceed the 10 req/s limit and return HTTP 429s, breaking user experience (≈ 12 % drop in session time).  

**Action**  
I implemented a **Leaky‑Bucket** token‑bucket style rate limiter in Go, deploying it as an Envoy Lua filter behind an Application Load Balancer.  
```go
type Bucket struct {
  capacity int64   // max tokens
  tokens   int64   // current tokens
  fillRate int64   // tokens per second
  last     time.Time
}

func (b *Bucket) Allow() bool {
  now := time.Now()
  delta := now.Sub(b.last).Seconds()
  b.tokens = min(b.capacity, b.tokens+int64(delta*b.fillRate))
  b.last = now
  if b.tokens > 0 {
    b.tokens--
    return true
  }
  return false
}
```
The filter checks `Allow()` before forwarding; on denial it returns **429**.  

I exposed the bucket state via CloudWatch metrics (tokens, hits, denials) and set up an SNS alert for sustained high denial rates.  

**Result**  
Post‑deployment, API error rate dropped from 8 % to < 0.5 %, while throughput increased by 35 %. The system scaled to 20k concurrent users with < $15/month cost (AWS Lambda + ALB).  

**Learning & Bar‑Raiser Lens**  
*Ownership*: I owned the entire pipeline, from metric collection to alerting.  
*Dive Deep*: I profiled latency hotspots and tuned `fillRate` to match SLA.  
*Quantified Impact*: 12 % lift in session time translated to $1.2M additional revenue annually.  
*Learning from Failure*: After a false‑positive spike, I added exponential backoff to the bucket refill logic, preventing over‑protection.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – keeping the user experience smooth.  
- **Ownership** – end‑to‑end responsibility for reliability and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
