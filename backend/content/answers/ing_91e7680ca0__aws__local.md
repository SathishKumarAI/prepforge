---
qid: ing_91e7680ca0__aws__local
question: 'Explain: Conclusion — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 464
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:51-05:00'
sources: []
---

**Situation & Task**  
At my previous role I launched a public ML‑prediction API that suddenly hit 10 k QPS during a marketing campaign. The SLA promised <200 ms latency but we were throttling and the error rate spiked to 12 %. I owned the incident, scoped a solution, and delivered a scalable rate‑limiting layer in under 48 hrs.

**Action & Design**  
* **AWS Services** – API Gateway + Lambda (compute), DynamoDB for per‑user counters, CloudFront as a CDN cache, Step Functions to orchestrate retries.  
* **Rate limiter logic** – A *fixed window* counter stored in DynamoDB with TTL of 1 min; each request atomically increments via `UpdateItem` with conditional expression (`<= limit`). If exceeded, Lambda returns 429.  
* **Scalability & Availability** – API Gateway scales to millions of calls automatically; DynamoDB’s provisioned throughput is auto‑scalable (read/write units) and offers <10 µs latency. CloudFront reduces origin load by caching successful responses for 60 s, lowering Lambda invocations by ~70 %.  
* **Cost** – Lambda cold starts negligible (<1 % of total spend); DynamoDB charges per read/write unit; overall monthly cost dropped from $3k to $900 while maintaining SLA.  

**Result**  
Latency fell from 480 ms to 180 ms, error rate plummeted to <0.5 %, and we handled a peak of 25 k QPS with no downtime.  

**Leadership Principles** – *Ownership* (I drove the fix end‑to‑end) & *Dive Deep* (profiling, DynamoDB metrics, CloudWatch alerts). I documented post‑mortem lessons: adopt per‑region counters to avoid single‑point throttling and enable multi‑account rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
