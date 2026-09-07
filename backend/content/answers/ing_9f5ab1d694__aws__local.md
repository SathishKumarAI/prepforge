---
qid: ing_9f5ab1d694__aws__local
question: 'Explain: Estimation — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 445
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:58-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to expose a public ML‑model inference API that could handle up to 10 k requests per second while keeping the cost below $5 000/month. The key risk was burst traffic during product launches, which would blow out our Lambda concurrency and spike RDS write costs.

**Action**  
I designed a *rate‑limiting* layer using **Amazon API Gateway + DynamoDB + SQS**:

1. **API Gateway** – first gate; uses usage plans (10 k QPS) to throttle at the edge, ensuring no traffic reaches downstream services before we’ve decided.
2. **DynamoDB “Token Bucket”** – a single‑partition table stores the bucket count per API key. A Lambda authorizer atomically decrements tokens with `UpdateItem`’s conditional expression (`IF current > 0`).  
   *Why DynamoDB?* It gives sub‑millisecond latency, built‑in ACID guarantees, and scales horizontally without sharding.
3. **SQS FIFO** – approved requests are enqueued; a fleet of Fargate tasks pulls from the queue at a steady rate (10 k/s max) and forwards to the SageMaker endpoint.  
   *Why SQS?* It buffers bursts, decouples API Gateway from inference latency, and provides dead‑letter handling for failures.

**Result**  
- Sustained 10 k QPS with <0.1 % throttling during peak events.  
- Monthly cost: $3 800 (≈$0.38 per request) – 24 % below target.  
- Latency stayed under 200 ms for 95 % of requests.

**Reflection**  
I learned that *“Dive Deep”* into the concurrency model of each AWS service saved us from a costly Lambda over‑provisioning error. The solution also demonstrates **Ownership**: I owned the entire request flow, measured impact with real traffic metrics, and iterated on token bucket sizing based on production data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
