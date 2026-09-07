---
qid: ing_e73ea9d82d__aws__local
question: 'Explain: cURL — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 448
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:31-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup, we needed to expose our user‑profile service via a lightweight API for mobile clients. The team chose **Supabase** (Postgres + auth) and wanted a fast way to query nested data with GraphQL. I had to demonstrate how to call that endpoint using `cURL` so developers could test locally before building the SDK.

**Action – Technical Design**  
1. **Requirement**: Single‑endpoint, authenticated, paginated user list.  
2. **Design**:  
   * Use Supabase’s auto‑generated GraphQL schema (`/graphql`) and a simple query:
     ```bash
     curl -X POST https://xyz.supabase.co/graphql \
          -H "apikey: <public-key>" \
          -H "Authorization: Bearer <jwt>" \
          -d '{"query":"{ users { id, email, profile { name } } }"}'
     ```
   * Leverage Supabase’s built‑in **Postgres** for ACID guarantees.  
3. **AWS Alignment**: If scaling to millions of calls, route through **API Gateway + Lambda@Edge** for throttling, or use **AppSync** for managed GraphQL with DynamoDB if we moved away from Postgres.

**Result**  
- Reduced API latency by 30 % compared to REST (measured via `curl -w "%{time_total}\n"`).  
- Enabled developers to prototype in minutes; 40+ pull requests were merged within the sprint.  

**Leadership Principles**  
- **Customer Obsession** – Delivered a developer‑friendly, low‑friction testing workflow.  
- **Ownership & Dive Deep** – I wrote the query, validated auth flow, and benchmarked performance, ensuring reliability at scale.

*Bar‑raiser notes:* Look for clear ownership, deep dive into API security, measurable impact, and reflection on potential failure (e.g., handling rate limits).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
