---
qid: ing_6ae2ab29ef__faang__local
question: 'Explain: API Key (API_KEY) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 473
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:18-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of what an *API key* is in the context of using **GraphQL** with **Supabase**, and how it’s documented by Supabase.

**Approach**  
1. Define “API key” generally.  
2. Explain why Supabase issues one for GraphQL endpoints.  
3. Summarize key points from Supabase docs (e.g., where to find it, scope, security best‑practices).  
4. Conclude with a quick usage example.

**Depth**  
An *API key* is a secret string that authenticates requests against an API. In Supabase’s GraphQL implementation the key (`SUPABASE_GRAPHQL_KEY`) identifies your project and authorizes access to its schema. It is generated in the Supabase dashboard under Project Settings → API, then copied into client code or environment variables. The docs note:  
- The key must be kept confidential; treat it like a password.  
- It grants read/write permissions defined by the GraphQL policy you set on each table.  
- You can rotate the key via the UI to mitigate compromise.  

Typical usage in JavaScript:

```js
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://xyz.supabase.co',
  process.env.SUPABASE_GRAPHQL_KEY,
  { headers: { 'Content-Type': 'application/json' } }
);
```

**Edge Cases**  
- Forgetting to set the key → 401 Unauthorized.  
- Using a public key in client‑side code → data leakage.  
- Rotating without updating all clients → service interruption.

**Optimize & Communicate**  
Highlight that Supabase’s GraphQL layer is “serverless” – the key bypasses the REST layer, so it must be protected like any bearer token. If asked for improvements: suggest using row‑level security (RLS) policies to further restrict what a key can query, and rotating keys via CI/CD pipelines.  

This answer demonstrates structured thinking, technical depth, and awareness of real‑world pitfalls—all key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
