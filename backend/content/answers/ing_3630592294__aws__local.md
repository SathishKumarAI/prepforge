---
qid: ing_3630592294__aws__local
question: 'Explain: GraphQL has a single point of entry — What Is GraphQL? REST vs.
  GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 500
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:14-05:00'
sources: []
---

**What is GraphQL?**  
GraphQL is a query language and runtime that lets clients request exactly the data they need from a single endpoint. Unlike REST, where each resource has its own URL and you may over‑fetch or under‑fetch, GraphQL exposes a type schema; the client sends a *query* (or mutation) and receives a response shaped precisely to that query.

| Feature | REST | GraphQL |
|---------|------|---------|
| Endpoint | Multiple URLs per resource | One endpoint (`/graphql`) |
| Data shape | Fixed by API version | Defined by client’s query |
| Over‑fetch / under‑fetch | Common | Eliminated (unless mis‑used) |
| Versioning | New URL or header | Schema evolution via deprecation directives |

**Behavioral STAR – “I migrated a legacy REST service to GraphQL”**

- **Situation:** 10k daily requests, 30% payload bloat.  
- **Task:** Reduce bandwidth and improve developer velocity.  
- **Action:** Designed a single‑endpoint gateway using **AWS AppSync** + **Lambda resolvers**, added schema stitching for micro‑services, and introduced automatic caching with **DynamoDB Accelerator (DAX)**.  
- **Result:** 42 % reduction in payload size, 25 % faster API response time, and 70 % fewer network round trips—directly translating to $12k/month savings on data transfer.

**Technical notes**

*AWS services:* AppSync (managed GraphQL), Lambda (resolvers), DynamoDB/DAX (cache).  
*Scalability:* AppSync auto‑scales; DAX reduces read latency.  
*Availability:* Multi‑AZ deployment, health checks via CloudWatch.  
*Cost trade‑off:* Slightly higher compute cost (~$1k/month) but offset by data transfer savings.

**Bar‑raiser cues**

- **Ownership:** Took end‑to‑end responsibility from design to production rollout.  
- **Dive Deep:** Quantified payload and latency before/after, used CloudWatch metrics.  
- **Impact:** Delivered measurable cost and performance gains.  
- **Learning:** Initial over‑fetch issue taught us to enforce strict query whitelisting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
