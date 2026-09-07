---
qid: ing_97ce30d3e4__aws__local
question: 'Explain: Comparisons — Restvsgraphql'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 513
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:54-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built a recommendation engine that exposed two public APIs: a legacy **REST** endpoint and a new **GraphQL** gateway. The goal was to reduce payloads, cut latency by 30 % and increase developer adoption.

**Action – Technical Design**  
1. **Requirements** – Clients needed fine‑grained data (user profile + item metadata) with minimal round trips.  
2. **REST**: Each request hit a single microservice (`/recommendations`) returning a fixed JSON schema (≈ 500 B).  
3. **GraphQL**: A single `/graphql` endpoint served by an API Gateway + Lambda, allowing clients to request only the fields they needed. We used DynamoDB for caching user vectors and SageMaker endpoints for inference.  
4. **Scalability & Availability** – Both were behind CloudFront; GraphQL added a second layer of caching in ElastiCache to avoid redundant Lambda invocations.  
5. **Cost Trade‑offs** – REST incurred 2× Lambda cold starts per request; GraphQL consolidated calls, cutting compute cost by ~ 40 % while adding a modest API Gateway fee.

**Result**  
After rollout:  
- Payload size dropped from 500 B to 210 B on average (42 % reduction).  
- Latency fell from 120 ms to 78 ms (35 % faster).  
- Developer churn decreased by 25 %, as seen in GitHub PR comments and onboarding survey scores.  

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the migration roadmap, coordinated with data science and dev ops.  
*Dive Deep*: I profiled every layer (Lambda cold starts, DynamoDB read/write latency).  
*Quantified Impact*: Metrics above demonstrate business value.  
*Learning from Failure*: Early GraphQL tests hit a 500 ms timeout; we refactored the resolver to batch requests, proving that iterative optimization is essential.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivering faster, smaller responses directly benefits end users.  
- **Ownership & Deliver Results** – drove end‑to‑end change, measured outcomes, and iterated on failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
