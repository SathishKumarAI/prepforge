---
qid: ing_a60ea0a9ef__fp__local
question: 'Explain: Microservices architecture — Introduction to Apollo Federation
  - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 344
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:49-05:00'
sources: []
---

**Micro‑service GraphQL with Apollo Federation**

When a system grows, each domain (billing, inventory, users) naturally splits into its own micro‑service.  
The *fundamental problem* is that every service owns its data and logic, yet clients still need a single query interface.  
GraphQL solves the “one API” requirement by describing a **schema**; but naïvely stitching schemas from many services yields a monolithic resolver layer that defeats scalability.

Apollo Federation reframes this as an *optimization* over composability:  
each service publishes a **sub‑schema** (its type definitions plus local resolvers). The gateway then **stitches** these sub‑schemas into one global schema by:
1. Treating each entity type as a *shard key* that can be fetched from its owning service.
2. Using `@key` directives to declare primary fields, and `@provides/@requires` to express inter‑service dependencies.
3. Delegating the actual field resolution to the appropriate micro‑service at query time.

The gateway’s job is thus *just schema composition*—no data aggregation logic, preserving each service’s autonomy while offering a unified API.  
**Non‑obvious insight:** Federation does not copy or duplicate data; it merely composes type definitions and delegates execution. This keeps the network traffic minimal (only necessary fields are requested) and allows services to evolve independently without breaking clients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
