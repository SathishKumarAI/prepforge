---
qid: ing_6ae2ab29ef__think__local
question: 'Explain: API Key (API_KEY) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 496
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:05:51-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal*: Teach a learner what an `API_KEY` is in the context of Supabase’s GraphQL API.  
   - *Assumptions*: The reader knows basic HTTP/GraphQL concepts but not Supabase specifics; they may be familiar with environment variables.

**2️⃣ Adopt a “Layered‑Explanation” framework**  
   1. **What it is** (definition).  
   2. **Why it matters** (security & access control).  
   3. **How it’s used** (in headers or query parameters).  
   4. **Where to find it** (Supabase dashboard).  
   5. **Best practices** (rotate, scope, keep secret).

**3️⃣ Step‑by‑step reasoning**  
   - Start with the *definition*: “API key is a string that authenticates you against Supabase’s GraphQL endpoint.”  
   - Explain *purpose*: grants/limits permissions; differentiate between public and service keys.  
   - Show *usage*: `curl -H "apikey: <KEY>" https://<project>.supabase.co/graphql/v1`.  
   - Reference the *Supabase docs* section that lists key types, how to retrieve them, and the recommended header name (`apikey` or `Authorization`).  
   - End with *security tips*: store in env vars, avoid committing, rotate keys.

**4️⃣ Common traps**  
   - Mixing up public vs. service keys → over‑exposing data.  
   - Forgetting that GraphQL requests need the same key as REST; some examples mistakenly use `Authorization: Bearer`.  
   - Assuming the key is static—keys can be revoked or regenerated.

**5️⃣ Sanity‑check & verbalize**  
   - Verify each point matches Supabase docs (look at “Authentication” and “API keys” sections).  
   - Explain in simple terms, then add a quick code snippet.  
   - Ask the learner to paraphrase what an API key does; if they can’t, revisit step 1.  

Follow this template for any tech‑concept explanation: define, purpose, usage, source, best practices, watch for pitfalls, and confirm understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
