---
qid: ing_a843304ed2__eli5__local
question: 'Explain: Project Reference (PROJECT_REF) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 218
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:50-05:00'
sources: []
---

Think of a Supabase project as a big library that holds all your data and code.  
When you use the GraphQL API to ask for or change information, the request must know *which* library it’s talking to—just like a librarian needs to know which branch has the book you’re looking for.

**PROJECT_REF** is that library‑name tag. It’s a short string (usually 12 characters) that uniquely identifies your Supabase project. In every GraphQL call, you include this value so the server knows exactly which database, tables, and rules to use.

*Unavoidable term:*  
- **Supabase Project** – A self‑contained environment with its own database, authentication, storage, and APIs.

By passing PROJECT_REF in the request header or URL, your GraphQL queries always hit the right Supabase project, just as a librarian uses the branch code to fetch the correct books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
