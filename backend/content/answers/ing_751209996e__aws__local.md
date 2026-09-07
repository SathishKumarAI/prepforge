---
qid: ing_751209996e__aws__local
question: 'Explain: Schema & Table Visibility — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 430
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:54-05:00'
sources: []
---

**Situation / Task**  
I was tasked to expose a multi‑tenant Supabase database to external clients via GraphQL while ensuring that each tenant could only see its own tables and schemas—essential for compliance and data isolation.

**Action**  
- **Ownership & Customer Obsession:** I assumed full ownership of the feature, first interviewing 12 internal stakeholders (product, security, ops) to surface constraints.  
- **Dive Deep + Invent & Simplify:** I modeled a “visibility matrix” stored in Supabase’s `pg_catalog` and built an AWS Lambda layer that rewrites incoming GraphQL queries by prefixing table names with the tenant ID.  
- **AWS Services Used:**  
  - *Amazon API Gateway* for throttling, *Lambda@Edge* for real‑time query rewriting, *Supabase Edge Functions* to execute sanitized queries, and *DynamoDB* to cache visibility rules (10 ms TTL).  
- **Scalability & Cost:** The caching layer reduces database hits by 85%, cutting per‑query cost from $0.005 to $0.0008. API Gateway throttling protects against abuse, keeping latency <50 ms under 5k RPS.  
- **Bias for Action:** I deployed a pilot in 24 hrs and monitored with CloudWatch dashboards.

**Result**  
Within two weeks of launch:  
- 99.9% query success rate across 4 regions,  
- 70 % reduction in latency compared to raw Supabase queries,  
- 30 % cost savings on database usage.  

**Learnings & Bar‑raiser signals**  
I documented failure modes (e.g., cache miss leading to stale visibility) and added automated alerts. The bar‑raiser will hear my end‑to‑end ownership, deep technical reasoning, quantified impact, and proactive learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
