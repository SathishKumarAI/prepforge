---
qid: ing_db32c0d3bc__aws__local
question: Why GraphQL?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 380
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:35-05:00'
sources: []
---

**Why GraphQL?**  
*Leadership Principles:* **Customer Obsession & Ownership**

**S – Situation**: Our data science team needed to expose millions of feature vectors to downstream ML pipelines while keeping latency < 10 ms and cost <$1k/month. The legacy REST API had 12 endpoints, each returning redundant fields, causing >30 % over‑fetching.

**T – Task**: Design a single endpoint that delivers exactly the features requested by each pipeline without duplicating effort or inflating traffic.

**A – Action**  
- Adopted **GraphQL** (AWS AppSync) so consumers could request only needed fields.  
- Built a schema mapping to DynamoDB tables and SageMaker feature store, using **Resolvers** backed by **Lambda@Edge** for transformation.  
- Implemented **Caching** with Amazon CloudFront + API Gateway TTLs to keep cache warm for 5 min.  
- Leveraged **AWS X-Ray** for observability; added automated rollback on error rates >2%.  

**R – Result**  
- Reduced payload size by **48 %**, cutting egress costs from $1,200/month to **$640/month**.  
- Latency dropped from 18 ms to **12 ms** (average), meeting SLA and improving model throughput by **22 %**.  
- Unified schema cut dev effort by 30 hrs/month, freeing data scientists to focus on feature engineering.

**Bar‑raiser notes:** Look for ownership of cost & performance trade‑offs, deep dive into caching strategy, and learning loop (X‑Ray feedback → schema tweaks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
