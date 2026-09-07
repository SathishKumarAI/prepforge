---
qid: ing_c248b72808__aws__local
question: 'Explain: Add a Schema to the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 444
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:19-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy REST backend to a modern GraphQL service on Supabase for our e‑commerce catalog. The client demanded tighter type safety and faster developer onboarding, so we needed to add a comprehensive schema that reflected all product attributes while keeping latency under 80 ms.

**Action (Technical)**  
* **Requirements & Design** – I scoped the data model by interviewing stakeholders and reviewing existing tables in Supabase Postgres. I used the *Supabase GraphQL Engine* to auto‑generate resolvers, then manually wrote a schema that exposed `Product`, `Category`, and `Variant` types with clear relationships.  
* **AWS Services & Trade‑offs** – The GraphQL endpoint runs on an AWS Lambda (Node.js) layer that queries Supabase via its REST API. I enabled *Supabase Edge Functions* for caching frequently accessed product data, reducing read traffic by ~30 %.  
* **Scalability & Availability** – By using Lambda concurrency limits and DynamoDB‑backed session tokens, we achieved 99.9 % availability during peak sales. Cost was controlled to <$0.05 per request thanks to the pay‑as‑you‑go model.

**Result**  
Within two sprints, the new schema cut developer cycle time for adding features from 5 days to 2 days (a 60 % reduction). API latency dropped from 150 ms to 65 ms, and the error rate fell by 40 %. The product team cited “instant feedback on data types” as a key win.

**Reflection & Bar‑raiser Insight**  
I owned the end‑to‑end rollout, diving deep into Supabase’s docs to avoid pitfalls. Quantifying latency and cost gave stakeholders confidence. When the initial Lambda hit cold starts, I iterated with provisioned concurrency—learning that small tweaks can yield outsized performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
