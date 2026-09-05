---
qid: ing_2fc8d57451__fp__local
question: 'Explain: HTTP Request — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 398
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:46:33-05:00'
sources: []
---

**Why a GraphQL HTTP request works the way it does**

At its core, a GraphQL query is *a declarative description of the data you need*.  
When a client sends an HTTP POST to Supabase’s GraphQL endpoint, the server receives:

1. **URL + Method** – The REST‑style URL tells us *where* in the API space we are (e.g., `/graphql`), while `POST` signals “I am sending data that may change state or is too large for GET”.  
2. **Body (query string)** – This is a first‑class object: the query itself, often accompanied by variables and an optional operation name. It is treated as a single logical request rather than multiple REST calls.  
3. **Headers** – `Authorization` supplies a JWT that is parsed into a *user context*. Supabase then applies row‑level security (RLS) filters automatically to the underlying Postgres tables.

The server parses the query, performs a *dependency graph* of resolvers, and emits a single JSON response. The elegance comes from **optimizing network usage**: one round‑trip yields exactly what the client asked for, no over‑fetch or under‑fetch, because GraphQL’s type system guarantees that every field in the query maps to a concrete resolver.

**Non‑obvious insight:**  
Supabase’s GraphQL layer is *not* a thin wrapper; it compiles the query into **SQL with RLS predicates baked in**, then streams the result. This means the same security and performance guarantees you get from raw Postgres are preserved, while the client enjoys the flexibility of GraphQL. Thus, the HTTP request format is simply a conduit for passing a *semantic description* (the query) to a backend that translates it into an optimized database plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
