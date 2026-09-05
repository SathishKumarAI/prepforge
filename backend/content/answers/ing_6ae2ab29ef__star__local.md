---
qid: ing_6ae2ab29ef__star__local
question: 'Explain: API Key (API_KEY) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 364
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:04-05:00'
sources: []
---

**Situation:**  
At my last startup we built a real‑time analytics dashboard for e‑commerce merchants. The front end was React, the backend used Supabase’s Postgres and GraphQL API to fetch user activity logs. When we moved from dev to production, our API keys were hard‑coded in the repo, causing accidental exposure and rate‑limit breaches.

**Task:**  
I needed to secure the GraphQL endpoint by implementing a robust API key strategy that allowed fine‑grained access control per merchant while keeping the developer experience smooth.

**Action:**  
1. Created a “service role” key in Supabase with `SELECT` permissions on public tables only, and a separate “user role” key for authenticated users.  
2. Used environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_KEY`) in Vercel, injecting them at build time and ensuring the service key never reached the browser.  
3. Implemented a middleware in Next.js that attaches the appropriate key to each GraphQL request based on the user session, using `fetch` with the `Authorization: Bearer <API_KEY>` header.  
4. Added automated tests that hit the GraphQL schema via the two keys and verified that forbidden queries were rejected.

**Result:**  
The dashboard now loads 30% faster because only necessary data is fetched, and we eliminated all accidental key leaks—zero security incidents in six months. I learned how to balance strict API key management with developer ergonomics, a pattern I’ll apply to any new Supabase‑GraphQL stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
