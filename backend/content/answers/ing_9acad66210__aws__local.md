---
qid: ing_9acad66210__aws__local
question: 'Explain: Queries → Fetch Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 538
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:13-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑science platform that served real‑time feature vectors to downstream ML models. The engineering team was debating whether to expose the feature store via REST or GraphQL because we needed to reduce over‑fetching and latency for high‑throughput inference jobs.

**Action (Technical)**  
I scoped the requirements:  
- **Low latency (< 10 ms)** per request, handling ~50k requests/s.  
- **Fine‑grained field selection** to avoid pulling unused features.  
- **Scalable, cost‑effective** deployment on AWS.

I proposed a hybrid architecture:

| Component | Service | Rationale |
|-----------|---------|-----------|
| API Gateway (REST) | Amazon API Gateway + Lambda | Proven 99.99% availability; easy throttling for burst traffic. |
| GraphQL Layer | AppSync with DynamoDB + ElastiCache | Enables field‑level selection, caching, and real‑time subscriptions. |
| Data Store | DynamoDB (primary) + S3 for cold features | Serverless, auto‑scaling, low cost. |

I performed a benchmark: REST returned 120 KB payloads on average; GraphQL reduced payload to 45 KB (~62% savings). Latency dropped from 18 ms to 9 ms (50% improvement). Cost per request fell by 35 %.

**Result**  
The switch to GraphQL cut API costs by **$12k/month** and improved model‑latency SLA compliance from 82% to 97%. I documented the trade‑offs: more complex query planning vs. tighter data delivery.

**Reflection (Bar‑raiser focus)**  
- *Ownership*: I owned the end‑to‑end redesign, coordinated with security and ops.  
- *Dive Deep*: I profiled payloads, measured cache hit rates, and tuned AppSync resolvers.  
- *Quantified Impact*: 62% payload reduction → 35% cost savings; latency halved.  
- *Learning from Failure*: Initial rollout exposed a DynamoDB throttling issue; we added adaptive scaling and monitored with CloudWatch alarms.

**Leadership Principles** – **Customer Obsession** (delivering faster, cheaper data to ML models) & **Ownership** (taking full responsibility for the redesign).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
