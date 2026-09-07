---
qid: ing_875bdf35d2__aws__local
question: 'Explain: 3-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 426
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:09-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, we had to expose an ML inference service to thousands of mobile clients while keeping latency under 200 ms and costs below $0.10 per inference. The product team asked for a **3‑tier client‑server architecture** that could scale globally.

**Action**  
I scoped the requirements:  
1. **Client tier** – React‑Native SDK with offline caching (Amazon Pinpoint analytics).  
2. **API gateway tier** – Amazon API Gateway + Lambda authorizer, throttling 10k RPS, using *Lambda@Edge* for edge routing to reduce round‑trip latency.  
3. **Model tier** – SageMaker Endpoint behind an Application Load Balancer (ALB) with *Auto Scaling Groups* of GPU instances (g4dn.xlarge). I added a **Redis cache (Amazon ElastiCache)** in front of the endpoint for repeated inputs, cutting inference calls by 35 %.  

I performed load‑testing in us-east-1 and us-west-2; the design maintained <180 ms latency at 15k RPS. Cost modeling showed $0.07 per inference after caching, a 30 % savings versus a single‑endpoint model.

**Result**  
The rollout hit launch on schedule; user engagement grew 120 % in three months, and churn dropped from 8 % to 3 %. The architecture is now the foundation for our global ML platform.  

> **Leadership Principles:** *Customer Obsession* (latency & cost), *Ownership* (end‑to‑end design), *Dive Deep* (performance testing), *Bias for Action* (rapid prototyping).  
> **Bar‑raiser cues:** quantified impact, trade‑off reasoning, and lessons learned from the cache hit‑rate tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
