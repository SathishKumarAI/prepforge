---
qid: ing_a843304ed2__faang__local
question: 'Explain: Project Reference (PROJECT_REF) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 458
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:57-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain what a *Project Reference* (`PROJECT_REF`) is in the context of using **GraphQL with Supabase**, and why it matters when building or deploying applications.

**Approach**  
1. Define `PROJECT_REF` – its role as an identifier for a Supabase project.  
2. Show how it’s used in GraphQL endpoints, environment variables, and client SDKs.  
3. Highlight security and routing implications.  

**Depth**  
- **What it is:** A 32‑character alphanumeric string that uniquely identifies your Supabase instance (e.g., `abcd1234efgh5678ijkl9012`).  
- **Where it lives:**  
  - In the GraphQL URL: `https://<PROJECT_REF>.supabase.co/graphql/v1`.  
  - As an environment variable (`NEXT_PUBLIC_SUPABASE_URL`) for client‑side code.  
  - Inside server‑side SDK initialization (`createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)`).  
- **Why it matters:**  
  - Routes all GraphQL queries/mutations to the correct database/schema.  
  - Enables multi‑tenant setups by distinguishing projects in shared infrastructure.  
  - Exposing or leaking `PROJECT_REF` can allow an attacker to target your project’s endpoints if combined with a valid key.

**Edge Cases**  
- Using a wrong `PROJECT_REF` returns a *404* or *401* error.  
- Hard‑coding the ref in code breaks CI/CD pipelines that switch environments (dev, staging, prod).  
- Forgetting to set it in serverless functions leads to runtime failures.

**Optimize & Communicate**  
Recommend storing `PROJECT_REF` as an env var (`SUPABASE_PROJECT_REF`) and building URLs dynamically. Explain that this keeps the codebase agnostic of specific projects, simplifies deployments, and reduces security risks. Conclude by noting that understanding this token is foundational for scaling GraphQL services on Supabase across multiple teams or clients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
