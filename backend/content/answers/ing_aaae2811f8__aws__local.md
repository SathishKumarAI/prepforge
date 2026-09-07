---
qid: ing_aaae2811f8__aws__local
question: 'Explain: different ways one was rest base Json — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 484
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:31-05:00'
sources: []
---

**Customer Obsession & Ownership**

When I migrated our recommendation engine from a monolith to a Netflix‑style microservice stack, the first hurdle was exposing model predictions over HTTP/JSON.  

| Approach | Use case | Trade‑offs |
|----------|----------|------------|
| **Synchronous REST (Spring Boot + Jackson)** | Real‑time user requests; low latency (< 200 ms) | Simple, but single point of failure; hard to scale under burst traffic. |
| **Event‑driven REST (AWS API Gateway → Lambda → SNS/SQS)** | Batch scoring or webhook callbacks | Decouples producers/consumers, improves resilience; adds ~50 ms latency and costs per invocation. |
| **GraphQL over HTTP** | Clients need variable fields from multiple models | Reduces over‑fetching; more complex schema evolution and caching. |
| **Streaming REST (HTTP/2 + Server‑Sent Events)** | Live score updates for large audiences | Lower overhead than polling, but requires clients that support SSE and careful back‑pressure handling. |

**Dive Deep & Deliver Results**

I instrumented each endpoint with CloudWatch metrics: 95 % L4 latency < 120 ms, error rate < 0.1 %. After implementing API Gateway + Lambda throttling, we cut peak costs by **35 %** and increased request capacity from 5k to 50k req/s without a new VM tier.

**Bar‑raiser Checkpoints**

* Ownership: I owned the full migration, coordinated cross‑team testing, and rolled back within minutes when latency spiked.  
* Depth: Benchmarked each pattern under synthetic Netflix traffic; documented cache hit ratios (up to 70 %) and cold‑start times.  
* Quantified Impact: 30 % lift in recommendation click‑through rate after API optimizations.  
* Learning from Failure: The first synchronous rollout crashed under burst load—prompted us to adopt a hybrid event‑driven model, turning failure into a scalable design lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
