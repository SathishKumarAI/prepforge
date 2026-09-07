---
qid: ing_521df8ea54__aws__local
question: 'Explain: TL;DR — Best Practices for Designing a Pragmatic RESTful API |
  Vinay Sahni'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 420
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:39-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team building an internal recommendation engine, we needed to expose model inference via a public REST API. The previous prototype suffered from unpredictable latency (up to 8 s) and frequent outages during peak traffic.

**Action**  
1. **Ownership & Customer Obsession** – I rewrote the contract using OpenAPI, added rate‑limiting (`throttle`) and exponential back‑off for clients.  
2. **Dive Deep & Bias for Action** – Implemented an API Gateway + Lambda architecture:  
   * **AWS API Gateway** (edge‑optimized) → throttles 10 000 RPS, enforces JWT auth, and logs to CloudWatch.  
   * **Lambda@Edge** caches model predictions in CloudFront (TTL 60 s).  
   * **SageMaker Endpoint** hosts the trained model; Lambda invokes it asynchronously, returning a “job‑id” that clients poll via WebSocket.  
3. **Invent & Simplify** – Used DynamoDB Streams to trigger a state machine (Step Functions) that updates status and stores results in S3 for audit.

**Result**  
- Latency dropped from 8 s to <200 ms average; 99th‑percentile ≤350 ms.  
- Throughput increased by 5× without extra cost (Lambda cold starts mitigated by provisioned concurrency).  
- SLA of 99.9% achieved, reducing support tickets by 42 %.  

**Learning** – Early performance testing revealed that synchronous inference was the bottleneck; moving to async with caching and stateful polling solved it. The bar‑raiser will note my end‑to‑end ownership, data‑driven impact, and continuous learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
