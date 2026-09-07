---
qid: ing_81fe4daa24__faang__local
question: 'Explain: Clients — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:59-05:00'
sources: []
---

**Clarify**  
The interview asks how we would build client‑side logic to consume two data sources: a GraphQL API and the Supabase REST/SQL backend. I’ll assume the front‑end is React, we need type safety, caching, and optimistic updates.

**Approach**  
1. Set up a generic `useApi` hook that accepts an endpoint config (GraphQL vs Supabase).  
2. For GraphQL: use Apollo Client or urql; for Supabase: use the official JS SDK with its REST/Row‑level auth.  
3. Create type‑generated schemas from GraphQL SDL and Supabase table definitions using `graphql-codegen` / `supabase-js` types.  
4. Wrap both clients in a unified context to expose `query`, `mutate`, `subscribe`.  

**Depth**  
- **GraphQL**: `useQuery` with `fetchPolicy="cache-first"`, error handling, refetch on network reconnect. Mutations use optimistic response and update the cache manually.  
- **Supabase**: Use `supabase.from('table').select()`; for real‑time, listen to `channel('public:table')`. Cache locally via React Query or SWR, invalidating on mutation.  
- Both clients share a global error boundary and token refresh logic (JWT).  

**Edge Cases**  
- Network partitions → fallback to local cache.  
- Schema drift between GraphQL SDL and Supabase tables → runtime validation.  
- Unauthorized requests → trigger re‑auth flow.  

**Optimize & Communicate**  
To reduce bundle size, lazy‑load the GraphQL client only when a feature needs it. Use code splitting for Supabase SDK. I’d explain this trade‑off to interviewers: heavier GraphQL client vs lightweight Supabase SDK, balancing developer ergonomics and performance. This shows clear structure, depth, and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
