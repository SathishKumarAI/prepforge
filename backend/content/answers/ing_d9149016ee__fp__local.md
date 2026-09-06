---
qid: ing_d9149016ee__fp__local
question: 'Explain: supabase-js — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 404
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:41:46-05:00'
sources: []
---

Supabase‑js is a thin wrapper around the Supabase API that turns HTTP requests into idiomatic JavaScript calls.  
When Supabase exposes its data through **GraphQL**, the client must solve two core problems:

1. **Schema discovery** – A GraphQL query can touch any column, table or relation; the client has to know the shape of every response without hard‑coding it.
2. **Query building** – The developer writes a JavaScript object that represents the desired GraphQL operation; this object must be translated into a valid query string and sent over HTTP.

Supabase‑js tackles (1) by downloading the server’s introspection schema at runtime (`GET /graphql?query=__schema`) and caching it. This mirrors how typed GraphQL clients such as Apollo do, but here the cache is stored in localStorage so that subsequent page loads skip network latency.  

For (2), the library implements a tiny DSL:  
```js
const { data } = await supabase.graphql.query({
  user: {
    id: true,
    name: true,
    posts: { title: true }
  }
});
```
The DSL is compiled into an AST, then to a string that follows GraphQL syntax. The client also adds the `Authorization` header automatically from the stored session.

**Non‑obvious insight:** Because Supabase’s GraphQL endpoint is *just* a thin proxy over its REST API, the same cache used for REST (`/rest/v1/...`) can be reused for GraphQL. This means developers get type safety and query flexibility without paying an extra round‑trip cost for schema introspection on every page load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
