---
qid: ing_aa9377e6a5__star__local
question: 'Explain: Back-of-the-Envelope Estimation — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 372
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:53-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we needed an internal tool to shorten URLs for marketing campaigns that could handle millions of clicks per day while keeping latency under 50 ms.

**Task**  
Design the architecture: estimate storage needs, throughput, and cost, then build a scalable prototype that satisfies SLAs and budget constraints.

**Action**  
I started with a back‑of‑the‑envelope calculation.  
- Assume 10 M unique URLs per month → 300 k per day.  
- Each mapping requires ~100 bytes (key + metadata).  
- Storage ≈ 30 GB/month, so I chose DynamoDB for its pay‑per‑write model.  
- For latency, I modeled a cache hit ratio of 90% using Redis; each lookup would be two round trips: one to Redis, one to DB if miss.  
- I estimated read/write capacity units: 300 k writes/day → ~3 RCU/WCU.  
- Cost: DynamoDB ~$0.25 per GB‑month + $1.20 per million write requests = <$50/month; Redis cost < $30/month.  
With these numbers, I sketched a microservice in Go, used consistent hashing for sharding, and added rate limiting to protect against abuse.

**Result**  
The prototype handled 500 k concurrent requests with 99.8% success, latency stayed below 40 ms, and the monthly cost was $70—well under our budget of $200. I learned that quick sanity checks guide architecture choices before diving into code, saving time and money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
