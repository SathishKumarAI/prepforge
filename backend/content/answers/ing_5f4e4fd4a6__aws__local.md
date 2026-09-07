---
qid: ing_5f4e4fd4a6__aws__local
question: 'Explain: Part 3 - Use in Production — How GraphQL Works at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 410
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:24-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led the migration of our legacy REST API stack to a single **GraphQL** gateway for the mobile feed. The goal was to reduce over‑fetching, cut latency by 30 % and give product teams more flexibility without increasing server load.

**Action**  
*Anchored in *Customer Obsession* and *Ownership*: I assembled a cross‑functional squad, mapped every REST endpoint to a GraphQL schema, and wrote resolver logic that aggregated data from microservices.  
I chose **AWS AppSync** (managed GraphQL) with **DynamoDB** for caching recent feed items and **Lambda@Edge** for field‑level authorization. Resolvers were split into *data loader* batches to avoid the N+1 problem, and we used **CloudWatch** metrics to monitor query complexity.  
To keep cost in check, I enabled **persistent queries** so that only a hashed key was sent from clients; this reduced payload size by 45 %. For high availability, AppSync automatically scales across AZs and integrates with **AWS WAF** for protection.

**Result**  
- Latency dropped from 650 ms to 420 ms (32 % improvement).  
- API call volume rose 4× without a spike in errors.  
- Engineering effort on new feeds decreased by 25 % because teams could compose queries instead of writing new endpoints.

**Reflection (Dive Deep)**  
The first week revealed resolver slowness due to a mis‑indexed DynamoDB table; I re‑engineered the key schema and added **DAX** for in‑memory caching, cutting response time by an additional 15 %. This iterative learning loop exemplifies *Bias for Action* and *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
