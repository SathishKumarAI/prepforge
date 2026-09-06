---
qid: ing_6ae2ab29ef__fp__local
question: 'Explain: API Key (API_KEY) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 425
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:55-05:00'
sources: []
---

## Why an **API KEY** is indispensable for Supabase’s GraphQL endpoint

Supabase exposes a GraphQL layer on top of its PostgreSQL database so that clients can query or mutate data without writing SQL.  
The *fundamental problem* this layer solves is **identity‑based access control in a stateless HTTP request**: each GraphQL call must be authenticated and authorized, but the server cannot keep a session.  

### Derivation from first principles

1. **Authentication as an information‑theoretic constraint** – The server needs to know *who* is making the request without storing any per‑request state.  
   - A secret token (the API key) is a compact, high‑entropy representation of that identity.
2. **Authorization via policy mapping** – Supabase maps each key to a database role and a set of Row Level Security (RLS) policies.  
   - The GraphQL engine interprets the key, activates the corresponding PostgreSQL role, and lets RLS enforce fine‑grained permissions automatically.
3. **Statelessness & scalability** – Because the key is self‑contained, any server in the Supabase cluster can validate it using a shared secret or public‑key cryptography, enabling horizontal scaling without session replication.

### Non‑obvious insight

Most people think an API key simply “lets you use the service.”  
In reality, **the key is a *policy selector***: it tells PostgreSQL which role to impersonate. Once inside that role, the same RLS rules that protect raw SQL tables also guard the GraphQL schema. Thus, the GraphQL layer adds no extra security model; it merely exposes the existing database policies through a type‑safe query language.

> **Bottom line:** The API key is not an opaque credential; it is the bridge that translates HTTP requests into PostgreSQL roles, letting Supabase enforce consistent, fine‑grained access control across all its interfaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
