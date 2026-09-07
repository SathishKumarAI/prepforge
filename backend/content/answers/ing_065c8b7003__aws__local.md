---
qid: ing_065c8b7003__aws__local
question: 'Explain: Performance Under Load — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:14-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a real‑time recommendation engine for a global e‑commerce platform that had to serve 5 M active users during peak holiday traffic (peak 10 k requests/second). The goal was to keep latency under **200 ms** while scaling elastically and keeping costs < $0.01 per request.

**Action – Design & AWS Services**  
1. **Model inference layer**: Deployed the trained model on **Amazon SageMaker Endpoint** with *multi‑model* hosting, using **EFS** for shared weight storage to avoid duplicated RAM.  
2. **Scalable API gateway**: Fronted by **API Gateway + Lambda@Edge** (cold start mitigated by provisioned concurrency).  
3. **Caching & pre‑fetching**: Redis cache on **Amazon ElastiCache for Redis** (cluster mode) with a 60 s TTL; warm‑up jobs run nightly via **EventBridge + Step Functions** to preload top‑k items per user segment.  
4. **Observability**: CloudWatch metrics, X-Ray tracing, and **AWS Fault Injection Simulator** for resilience testing.

**Result**  
- Latency dropped from 1.2 s (baseline) to **< 180 ms** under 10 k RPS.  
- Cost reduced by **38 %** versus a monolithic EC2 fleet.  
- Achieved 99.99 % availability during the 4‑day holiday window.

**Reflection & Learnings**  
I owned the end‑to‑end pipeline, diving deep into cache hit ratios and cold‑start latency. After an early spike where cache eviction caused a 15 % latency bump, I added adaptive TTLs based on traffic patterns—an example of *Bias for Action* and *Invent & Simplify*. This design now serves 20 M users with predictable SLAs while keeping the team’s operational burden low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
