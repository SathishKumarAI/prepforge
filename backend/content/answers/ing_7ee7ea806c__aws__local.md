---
qid: ing_7ee7ea806c__aws__local
question: 'Explain: Failover, retries, hedging, and idempotency'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 538
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:58-05:00'
sources: []
---

**Situation & Task**  
While architecting a multi‑region recommendation engine for a global e‑commerce platform (traffic ≈ 2 M RPS), I needed to guarantee 99.999% availability and 10 ms latency while preventing duplicate recommendations.  

**Action**  
I designed an **AWS‑native failover + idempotent request flow**:  

| Feature | Implementation | AWS Services | Reasoning |
|---------|----------------|--------------|-----------|
| **Failover** | Dual ALBs per region, health‑check routing via Route 53 latency policy. | ALB, Route 53 | Automatic traffic shift on health degradation; zero‑downtime region failover. |
| **Retries** | Exponential back‑off in Lambda + SQS dead‑letter queue (DLQ). | Lambda, SQS, CloudWatch Alarms | Keeps transient errors from propagating while limiting overload. |
| **Hedging** | Parallel inference calls to two distinct model endpoints; first response wins, others cancelled via `AbortController`. | Step Functions, SageMaker Endpoints | Cuts latency variance by ~30 ms (observed 18 ms avg vs 48 ms baseline). |
| **Idempotency** | Client sends a UUID‑based request token stored in DynamoDB with TTL; Lambda checks before processing. | DynamoDB, Lambda | Guarantees no duplicate recommendations even after retries or hedged duplicates. |

**Result**  
Post‑deployment, we achieved:  

- 99.999% uptime across regions (downtime < 0.5 s per year).  
- Latency reduced from 48 ms to 18 ms average.  
- Duplicate recommendation rate dropped from 4.2% to < 0.01%.  

**Reflection**  
I owned the end‑to‑end reliability loop, diving deep into CloudWatch metrics to iterate on back‑off curves. The bar‑raiser would note my quantitative impact, ownership of cross‑regional traffic, and learning that hedging can be cost‑effective when combined with idempotent patterns.  

> *Leadership Principles:* **Customer Obsession** (fast, reliable recommendations) & **Ownership** (end‑to‑end system resilience).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
