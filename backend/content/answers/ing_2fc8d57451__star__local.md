---
qid: ing_2fc8d57451__star__local
question: 'Explain: HTTP Request — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:05-05:00'
sources: []
---

**Situation:**  
In my last role, we were building a real‑time dashboard for a fintech startup that needed to display user transaction histories and account balances from our Supabase backend. The existing REST endpoints returned too much data and required multiple round‑trips, so performance lagged during peak trading hours.

**Task:**  
I was tasked with refactoring the data layer to reduce payload size, cut latency, and make the UI more responsive, all while keeping the same authentication flow (JWT via Supabase Auth).

**Action:**  
I introduced GraphQL on top of Supabase by setting up a lightweight Apollo Server that wrapped Supabase’s PostgREST API. I wrote resolvers that leveraged Supabase’s query builder (`supabase.from().select()`) but only fetched fields requested in the GraphQL query, using fragments to avoid over‑fetching. For authentication, I passed the JWT from the client as an `Authorization` header in each HTTP request and used Apollo’s context function to inject it into the Supabase client. On the frontend, I replaced the old fetch calls with `@apollo/client`’s `useQuery`, passing dynamic variables for pagination and filtering.

**Result:**  
The dashboard load time dropped from 2.8 seconds to under 1.2 seconds on average, and the number of API calls per user session fell by 60%. We also saw a 25% reduction in server cost due to fewer database reads. I learned how to blend Supabase’s real‑time capabilities with GraphQL’s precise data fetching, striking a balance between developer ergonomics and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
