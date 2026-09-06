---
qid: ing_13e1623ec3__think__local
question: 'Explain: Connect APIs declaratively — Introduction to Apollo Federation
  - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 453
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:02:05-05:00'
sources: []
---

**1. Clarify & Assume**  
   - *What is asked?* A concise explanation of how Apollo Federation lets you compose multiple GraphQL services into one schema declaratively.  
   - *Assumptions:* The reader knows basic GraphQL, but not necessarily federation specifics; they want a quick intro plus where to find docs.

**2. Mental Model / Framework**  
   - Think of **“schema stitching” vs “declarative composition.”**  
   - Federation replaces ad‑hoc stitching with a *single* supergraph that pulls in sub‑schemas via the `@key`, `@extends`, etc. directives.  
   - Visualise a *hub‑and‑spoke* diagram: one central Apollo Router, multiple service schemas.

**3. Step‑by‑Step Reasoning**  
   1. **Define services** – each owns part of the domain and exposes its own schema.  
   2. **Add federation directives** (`@key`, `@provides`, `@requires`) to declare entity relationships.  
   3. **Run Apollo Router** – it queries each service’s introspection endpoint, merges schemas, resolves delegation automatically.  
   4. **Clients hit the router** as if it were a single GraphQL endpoint; no changes needed.

**4. Common Traps**  
   - Mixing *schema stitching* with federation directives → confusion.  
   - Forgetting to expose an introspection endpoint on each service.  
   - Over‑using `@extends` without corresponding `@key` leads to runtime errors.

**5. Sanity‑Check & Communicate**  
   - Verify that the explanation covers: what federation is, why it’s declarative (no code changes per request), and how the router orchestrates.  
   - End with a quick pointer: “See the official Apollo Federation docs at [link] for implementation details.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
