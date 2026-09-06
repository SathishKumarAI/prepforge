---
qid: ing_a843304ed2__fp__local
question: 'Explain: Project Reference (PROJECT_REF) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 369
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:24-05:00'
sources: []
---

### Why Supabase needs a **PROJECT_REF**

Supabase runs many projects on the same underlying infrastructure (PostgreSQL, Auth, Storage).  
When a client hits the GraphQL endpoint it must be *certain* which project’s schema to serve.  
The naïve approach is to expose separate URLs per project; that scales poorly and breaks
client‑side caching.

Instead Supabase embeds a **PROJECT_REF** token in every request header (`x-hasura-project-ref`).
This acts as an *identifier*—a small, opaque string that maps deterministically to a database
schema.  
Because the GraphQL engine is stateless, the reference can be decoded instantly (hash‑lookup)
and the correct schema loaded without any round‑trip or extra authentication.

### Deeper principle

This is an application of **partitioned namespace** optimization:  
*We partition a single physical resource (the PostgreSQL cluster) into logically isolated
sub‑resources (schemas). The reference token is a minimal key that selects the right sub‑resource in O(1) time.*

It also ties to *information theory*: the token carries just enough information to disambiguate
among \(N\) projects while keeping the entropy low, which reduces attack surface and parsing cost.

### Non‑obvious insight

Many overlook that **PROJECT_REF is not a secret**.  
Because it merely indexes an internal schema, leaking it does not expose data; only
a correctly authenticated user can perform operations on that schema.  
Thus Supabase can safely pass the token in URLs or public headers without compromising security,
yet still enforce isolation through its authentication layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
