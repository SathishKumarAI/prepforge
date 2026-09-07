---
qid: ing_92e5e30e75__aws__local
question: 'Explain: 20 Rate Limiting Algorithms — Rate Limiting Algorithms Explained
  with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 428
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:16-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a global API gateway for a media‑streaming platform that had to handle 10 M requests/second while preventing abuse and ensuring fair usage across tenants. The key requirement was to support **20+ rate‑limiting strategies** (fixed window, sliding log, token bucket, leaky bucket, reservoir sampling, etc.) in a single, highly available service.

**Approach & Design**  
I chose **AWS API Gateway + Lambda + DynamoDB + Redis (Elasticache)**.  
* Each tenant’s policy is stored as a JSON blob in DynamoDB; the Lambda pulls it once per minute and caches it in Redis with TTL = 60 s.  
* For *token bucket* and *leaky bucket*, I used a deterministic formula inside Lambda: `tokens = min(capacity, tokens + elapsed * rate)`.  
* For *sliding window* I kept a sorted list of timestamps in DynamoDB Streams, pruning older entries with TTL.  
* To handle burst traffic I added an **exponential back‑off** retry layer at the client side.

**Result**  
The system sustained 12 M req/s with <1 ms latency variance and reduced SLA violations from 3.2 % to 0.4 %. Cost stayed under $20k/month by keeping hot data in Redis and cold data in DynamoDB.  

**Learning & Ownership**  
I realized that “Dive Deep” into each algorithm’s trade‑offs (accuracy vs. memory) was critical; I documented a decision matrix that became the team’s standard for future feature rollouts. This ownership mindset earned me a bar‑raiser endorsement during my promotion interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
