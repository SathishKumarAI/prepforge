---
qid: ing_d9149016ee__star__local
question: 'Explain: supabase-js — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 379
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:57-05:00'
sources: []
---

**Situation:**  
In a fintech prototype I was building a real‑time investment dashboard, we needed instant access to user portfolios stored in Supabase Postgres. The team preferred a flexible query language over REST and asked me to set up GraphQL with `supabase-js`.

**Task:**  
I had to expose portfolio data via a secure GraphQL endpoint, keep latency under 200 ms for live updates, and ensure type safety across the React front‑end.

**Action:**  
First I enabled Supabase’s built‑in GraphQL service in the dashboard and generated the schema. Using `supabase-js`, I instantiated a client with my project URL and anon key, then wrapped it inside Apollo Client so that each GraphQL query translated to a signed HTTP request (`/rest/v1/_graphql`). For live data I used Supabase’s Realtime channel: after fetching initial state I subscribed to the `portfolios` table and updated the Apollo cache on every `INSERT`, `UPDATE`, or `DELETE`. To keep payloads small, I wrote custom GraphQL fragments that only returned fields needed by each component. I also added a middleware in the client to log query costs against our budget.

**Result:**  
The dashboard’s average response time dropped from 350 ms (REST) to 140 ms with GraphQL. Real‑time updates appeared within 50 ms, giving users a seamless experience. The project shipped on schedule and the codebase now has a single source of truth for data access. I learned how Supabase’s GraphQL layer can be combined with `supabase-js` and Apollo to build efficient, type‑safe, real‑time UIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
