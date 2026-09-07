---
qid: ing_2b961e83cf__aws__local
question: 'Explain: Being a good distributed citizen — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 568
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:33-05:00'
sources: []
---

**Situation & Task**

At my previous role I was tasked with exposing a recommendation engine to downstream micro‑services that would call it at high frequency (≈ 200 k requests/day). A single retry or transient failure could double the cost and corrupt user state. The leadership principle **Ownership** drove me to design an API that guaranteed idempotency, predictability, and resilience.

**Action**

1. **Idempotent key** – Every request carried a client‑generated UUID (`X-Request-ID`).  
2. **Stateful store** – I persisted the result in DynamoDB with `idempotency_key` as PK and TTL 48 h.  
3. **AWS Lambda + API Gateway** – The Lambda idempotent handler first queried DynamoDB; if a record existed it returned the cached response, otherwise it invoked SageMaker batch transform to compute the recommendation, stored the result, and responded.  
4. **Circuit breaker & retries** – Integrated AWS Step Functions with retry policies (exponential back‑off) and a fallback to a cached “last known good” response.  
5. **Observability** – CloudWatch metrics (`IdempotentHits`, `CacheMisses`) fed into an Alarms dashboard.

**Result**

- **Latency** dropped from 1.2 s (non‑idempotent) to 0.35 s on average.  
- **Duplicate processing** fell from 12% to < 0.01%.  
- **Cost** of SageMaker inference decreased by 38 % due to fewer recomputations.  

**Bar‑raiser cues**

*Ownership:* I owned the entire request flow, from key generation to cost control.  
*Dive Deep:* I profiled DynamoDB read/write latency and tuned provisioned throughput (200 R/W/s) based on observed traffic spikes.  
*Quantified Impact:* The 38 % cost saving directly improved the recommendation service’s margin.  
*Learning:* Initial attempts used a simple in‑memory cache; after a failure during a traffic spike I learned to persist idempotency state in a managed database for durability.  

**AWS Services Used**

- API Gateway (RESTful entry point)  
- Lambda (stateless compute)  
- DynamoDB (idempotent key store, TTL)  
- SageMaker Batch Transform (ML inference)  
- Step Functions (retry logic)  
- CloudWatch & SNS (monitoring & alerts)

This design satisfies **Customer Obsession** by delivering reliable predictions to downstream services and **Invent & Simplify** by turning a complex retry problem into an idempotent, serverless solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
