---
qid: ing_ce39fb169d__aws__local
question: 'Explain: Routing tiers — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 399
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:23-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a single‑model inference endpoint that served ~30 k requests/second for a conversational AI product. Latency spiked during peak times and any outage meant lost revenue and a bad user experience.

**Action**  
I designed a **Routing‑Tier architecture** with two AWS services:

| Tier | Responsibility | Key Services |
|------|-----------------|--------------|
| **LLM Gateway** | Front‑end request router, A/B testing, rate limiting, authentication | Amazon API Gateway + Lambda Authorizer, CloudFront, WAF |
| **Serving Platform** | Parallel inference on GPU/CPU clusters, model versioning, autoscaling | Amazon SageMaker Endpoint (multi‑model), ECS Fargate for batch fallback, SQS for buffering |

*Routing logic:*  
- 70 % of traffic goes to the low‑latency GPU endpoint;  
- 30 % is sent to a CPU pool as a safety net.  
- If GPU health check fails, traffic automatically switches in <200 ms.

**Result**  
- **Latency dropped from 350 ms to 120 ms (−65%)** under peak load.  
- **Availability increased to 99.99%**, eliminating the 2‑hour outage we had last quarter.  
- Cost was optimized by scaling GPU workers only during high demand, saving ~18 % monthly.

**Reflection**  
I owned the end‑to‑end pipeline, dug into CloudWatch traces to tune thresholds, and iterated on the routing rule after a failed rollout that caused a 15 % spike in errors. The bar‑raiser will see my ownership, deep dive into metrics, quantified impact, and lessons learned from the rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
