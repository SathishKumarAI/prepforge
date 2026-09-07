---
qid: ing_ea93d33e64__aws__local
question: 'Explain: Read more — Apigateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 398
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:36-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy REST service (≈ 10 k requests/day) to an event‑driven architecture on AWS. The goal was to expose the endpoint through Amazon API Gateway while keeping latency < 120 ms and cost under $0.50/1 M calls.

**Action**  
*Customer Obsession & Ownership*: I mapped user journeys, identified “Read more” as a high‑frequency path (≈ 30% of traffic).  
*Dive Deep & Bias for Action*: Implemented **API Gateway REST API** with Lambda authorizer and **Cognito User Pools** for auth. Configured **Caching** (TTL 300 s) to reduce backend hits.  
*Invent & Simplify*: Introduced **Lambda@Edge** to pre‑process query strings, eliminating the need for a separate microservice.  
*Deliver Results*: Monitored with CloudWatch and X-Ray; latency dropped from 350 ms to 95 ms (72% improvement). Cost fell from $3.20/k calls to $0.38/k calls, saving ~$12k/month.

**Result**  
- 75% reduction in API latency → higher user satisfaction scores (+18 points).  
- 60% decrease in backend load → lower operational costs.  
- Scalability: API Gateway auto‑scales to > 100k RPS with zero capacity planning.

**Learning**  
The first iteration over‑cached aggressively, causing stale data for “Read more”. We added a **Cache-Control** header and implemented cache invalidation via SNS on content updates—illustrating rapid feedback loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
