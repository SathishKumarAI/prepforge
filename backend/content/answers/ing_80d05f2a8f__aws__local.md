---
qid: ing_80d05f2a8f__aws__local
question: 'Explain: Similarities of REST with GraphQL — Restvsgraphql'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 415
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:16-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a migration from a legacy REST API to GraphQL for the product catalog service. The goal was to reduce over‑fetching while keeping the same reliability and performance guarantees.

**Action (Technical)**  
I first mapped REST endpoints to **GraphQL types**: each REST resource became a type, nested relations turned into fields. I used **AWS AppSync** as the GraphQL gateway because it natively supports real‑time subscriptions, caching via DynamoDB Accelerator (DAX), and fine‑grained IAM auth—mirroring the security model of our existing API Gateway + Lambda stack.

Key similarities I highlighted to stakeholders:  
- *Declarative contracts*: both expose a contract that clients consume.  
- *Statelessness*: each request contains all needed context, just like REST.  
- *Caching & idempotence*: AppSync can cache query results the same way we cached GET responses in API Gateway.

Trade‑offs were clear: GraphQL adds a resolver layer (cost of Lambda invocations) but eliminates multiple round‑trips; REST keeps things simple for single‑resource fetches. I designed a hybrid fallback where critical, high‑traffic endpoints still hit REST to avoid cold starts.

**Result**  
Post‑migration we cut API payload size by **35 %**, reduced latency from 180 ms to 95 ms on average, and lowered Lambda invocations by **22 %**, saving ~$1.2k/month. The change also enabled a new feature—dynamic product bundles—without touching the client.

**Reflection (Bar‑raiser)**  
I took full ownership of the migration, dove deep into AppSync’s caching nuances, quantified every metric, and learned that balancing simplicity vs. flexibility is key: keep REST for straightforward reads, but use GraphQL where relational data drives user value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
