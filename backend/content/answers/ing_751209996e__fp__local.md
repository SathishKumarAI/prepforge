---
qid: ing_751209996e__fp__local
question: 'Explain: Schema & Table Visibility — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 379
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:14:06-05:00'
sources: []
---

**Why Supabase hides or exposes tables in the GraphQL layer**

Supabase’s GraphQL endpoint is a thin façade over Postgres.  
When you create a *schema* you’re actually partitioning the catalog into namespaces; each table lives inside one of those namespaces.  
The fundamental problem is *access control*: you want clients to see only the data they should read, but still be able to query across tables that belong to different schemas.  

Supabase solves this by mapping every schema‑table pair to a GraphQL type whose name is the concatenation of the schema and table names (e.g., `public.users`). The *visibility* setting is simply a boolean flag on that mapping:

1. **Visible** – the mapping is added to the schema, so clients can query it.  
2. **Hidden** – the mapping is omitted; the type disappears from introspection, but the underlying Postgres view/role still exists.

This design follows the principle of *least privilege* in a declarative way: you declare “this table should be reachable via GraphQL” and Supabase enforces it at schema generation time.  

**Non‑obvious insight:**  
Visibility is not about authentication tokens; it’s about **schema evolution**. When you hide a table, you’re telling the GraphQL compiler to drop that type from its internal cache. If you later re‑enable visibility, the compiler must rebuild its cache and re‑generate resolvers on demand—an operation that can be expensive if done repeatedly in a hot environment. Therefore, toggling visibility is best treated as an *immutable deployment decision* rather than a runtime feature flag.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
