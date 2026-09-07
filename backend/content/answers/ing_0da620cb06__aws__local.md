---
qid: ing_0da620cb06__aws__local
question: 'Explain: Rate limit by user — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 478
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:25-05:00'
sources: []
---

**Situation & Task**  
I was tasked with adding a per‑user rate limiter for our ML inference API (≈ 200 k calls/day) so that no single client could monopolize GPU resources and degrade service for others.

**Action – Design**  
*Requirements*:  
- **Per‑user token bucket** (burst 10 requests, refill 1/s).  
- **High availability**: no single point of failure.  
- **Low cost & latency** (< 5 ms).

I chose **Amazon API Gateway + AWS Lambda + DynamoDB Streams**:

1. **API Gateway** enforces a *global* throttling policy (rate/burst) and forwards each request to a Lambda authorizer.  
2. The **Lambda authorizer** reads the user’s bucket state from **DynamoDB** (partition key = user‑id).  
3. It calculates remaining tokens, writes back the updated count atomically using `UpdateItem` with `ConditionalExpression`.  
4. If the token count is ≤ 0, Lambda returns a *429*; otherwise it passes the request to the inference Lambda.

**Dive Deep – Scaling & Cost**  
- **Scalability**: DynamoDB’s on‑demand mode handles 200 k ops/s with < 1 ms latency.  
- **Availability**: Multi‑AZ replication, auto‑scaling; API Gateway is fully managed.  
- **Cost**: ≈ $0.25/month for DynamoDB (10 GB), $0.20/month for Lambda invocations, negligible API Gateway cost.

**Result**  
After rollout, we saw a 95 % reduction in GPU queue times and no single client exceeded its quota. Quarterly usage reports showed consistent compliance with the rate limits, and customer satisfaction scores rose by **12 points** (CSAT).

**Leadership Principles Highlighted**  
- *Customer Obsession*: protected all users from resource starvation.  
- *Ownership & Dive Deep*: I engineered a fault‑tolerant solution, tuned DynamoDB throughput, and monitored metrics continuously.

This architecture balances strict per‑user control with the elasticity of AWS services, ensuring that the ML inference service remains fast, fair, and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
