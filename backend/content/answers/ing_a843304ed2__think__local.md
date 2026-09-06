---
qid: ing_a843304ed2__think__local
question: 'Explain: Project Reference (PROJECT_REF) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 456
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:10:15-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants a *conceptual* explanation of “Project Reference (PROJECT_REF)” as it appears in Supabase’s GraphQL docs.  
   - Assume they’re familiar with basic Supabase/GraphQL but not the specific terminology.  
   - Decide to keep the answer concise, focus on purpose, usage, and how it ties into Supabase projects.

**2️⃣ Mental model / framework**  
   - Treat **PROJECT_REF** as a *unique identifier* that maps a GraphQL endpoint to a particular Supabase project.  
   - Think of it like a “namespace” or “key” that lets the backend route requests correctly.  
   - Relate it to other common patterns: environment variables, API keys, and database connection strings.

**3️⃣ Step‑by‑step reasoning**  
   1. Define what a Supabase project is (storage, auth, DB).  
   2. Explain that each project gets its own GraphQL endpoint URL.  
   3. Show the URL pattern: `https://<PROJECT_REF>.supabase.co/graphql/v1`.  
   4. Describe how the client supplies the PROJECT_REF when initializing the GraphQL client or in headers.  
   5. Mention security: PROJECT_REF is public‑facing but still identifies a project; sensitive data lives behind auth tokens.

**4️⃣ Common traps to avoid**  
   - Don’t conflate PROJECT_REF with the database URL or API key.  
   - Avoid suggesting it’s secret; it’s publicly visible in the endpoint.  
   - Don’t skip explaining why you need it (routing, multi‑tenant isolation).

**5️⃣ Sanity‑check & communicate**  
   - Verify that the URL pattern matches current docs.  
   - Run a quick mental test: if I change PROJECT_REF, does the request hit a different database? Yes.  
   - Wrap up with a short example snippet to illustrate usage in code.

This structured approach ensures clarity, prevents misconceptions, and equips you to explain similar identifiers in other services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
