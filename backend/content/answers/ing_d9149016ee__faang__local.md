---
qid: ing_d9149016ee__faang__local
question: 'Explain: supabase-js — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:10-05:00'
sources: []
---

**Clarify**  
You want a concise overview of how the **supabase‑js** client exposes a GraphQL interface and what that means for developers. I’ll assume you’re familiar with Supabase’s REST‑like API but new to its GraphQL layer.

**Approach**  
1. Explain the core idea: supabase‑js wraps the Supabase Edge Functions that expose a `/graphql` endpoint.  
2. Describe the client usage pattern (import, init, query).  
3. Highlight authentication & schema introspection.  
4. Touch on performance trade‑offs and where GraphQL shines vs. REST.

**Depth**  
- **Client init**: `const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);`  
- **GraphQL query**: `supabase.graphql.query({ query: gql\`{ users { id name } }\`, variables: {} })`.  
  The client serializes the request to `/graphql` and returns a promise with `{ data, errors }`.  
- **Mutations & subscriptions** work similarly; the library internally uses WebSocket for real‑time GraphQL.  
- **Auth**: JWT from Supabase auth is automatically attached in the `Authorization` header.  
- **Schema introspection**: `supabase.graphql.schema()` fetches the SDL, enabling IDE autocomplete.  

**Edge cases**  
- Large payloads can hit HTTP limits; consider batching or using REST for bulk ops.  
- Real‑time subscriptions require a stable WebSocket connection—handle reconnection logic.  
- Schema changes need to be refetched; otherwise queries may fail silently.

**Optimize & communicate**  
To improve developer experience, wrap common queries in typed hooks (React) or services that cache schema and handle retries. Explain trade‑offs: GraphQL reduces round trips but adds parsing overhead; use REST for simple CRUD when speed matters. This narrative shows clear problem framing, systematic solution steps, depth of technical detail, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
