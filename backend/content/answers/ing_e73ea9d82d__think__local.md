---
qid: ing_e73ea9d82d__think__local
question: 'Explain: cURL — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 540
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:17:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
*What exactly is being requested?* The user says “Explain: cURL — GraphQL | Supabase Docs.” I’ll assume they want a concise explanation of how `cURL` can be used to query a **Supabase** GraphQL endpoint, and why this appears in the docs. I’ll also note that the answer should be understandable to someone familiar with REST but new to GraphQL/Supabase.

**2️⃣ Choose a mental model / framework**  
I’ll use a *“tool‑in‑context”* approach:  
- **cURL** = HTTP client → maps directly to any HTTP API.  
- **Supabase** = backend‑as‑a‑service that exposes a GraphQL endpoint at `/graphql`.  
- **GraphQL** = query language + type system, so the request body differs from REST.

I’ll structure the explanation as: (1) why Supabase offers GraphQL, (2) how to build a minimal cURL command, (3) typical headers/parameters, and (4) what you get back.

**3️⃣ Step‑by‑step reasoning toward the answer**  
a. Identify the endpoint URL (`https://YOUR-PROJECT.supabase.co/graphql`).  
b. Decide on an operation: query or mutation; pick a simple example like `getUsers`.  
c. Write the GraphQL query string, escape quotes for cURL.  
d. Assemble the cURL command with `-X POST`, `-H "Content-Type: application/json"`, and the auth header (`apikey`).  
e. Show how to send the body via `-d @query.json` or inline JSON.

**4️⃣ Common traps & wrong turns**  
- Forgetting that GraphQL uses **POST** (not GET).  
- Mixing up the Supabase API key vs. service role key.  
- Not escaping quotes correctly in shell.  
- Assuming the query works without a matching table/schema in Supabase.  
- Overlooking that the response is JSON with a `data` field.

**5️⃣ Sanity‑check & verbalize**  
Run through a quick mental test: “If I replace `<project>` and `<apikey>`, will the command work?” If yes, the explanation covers all variables. When explaining out loud, keep it short, focus on the link between cURL’s generic HTTP request and GraphQL’s payload structure, and end with a note that Supabase docs provide ready‑made examples for reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
