---
qid: ing_569657ab42__aws__local
question: Do You Need a Gateway Yet? — Ai Gateways And Model Routing
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:09-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size fintech we had > 10 ML models for fraud detection, recommendation and risk scoring. Each model lived in its own SageMaker endpoint, but the front‑end called them directly through a shared API Gateway. Calls were throttled, latency spiked (↑30 ms), and cost ballooned (~$12k/month). I was asked to decide whether we needed an *AI gateway*—a dedicated routing layer—and how to implement it.

**Action**  
I scoped the problem by instrumenting traffic with CloudWatch metrics and tracing via X‑Ray. The data showed 45 % of requests hit the wrong model, leading to misclassifications. I designed a lightweight **Model‑Router Lambda** behind API Gateway that:
1. Reads the request header (`X-Intent: fraud|rec|risk`)  
2. Routes to the appropriate SageMaker endpoint via `invokeEndpoint`  
3. Caches hot endpoints in ElastiCache (Redis) for 10 s, reducing latency by ~15 ms per call.

I used **AWS Step Functions** for fallback logic and **DynamoDB** to store routing rules, enabling zero‑downtime updates. The architecture is serverless—no EC2, so costs dropped from $12k to ~$4k/month. Latency improved from 75 ms to 45 ms (40 % reduction), and model accuracy increased by 3 % due to correct routing.

**Result**  
The gateway cut operational cost by **66 %**, lowered latency by **40 %**, and boosted overall system reliability (99.9 % availability).  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a faster, more accurate service for end users.  
- *Ownership*: Took full responsibility for the end‑to‑end design, testing, and monitoring.

**Bar‑raiser Takeaway**  
A good answer shows ownership, dives deep into metrics, quantifies impact, and explains learning from misrouting failures (e.g., adding a safety net in Step Functions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
