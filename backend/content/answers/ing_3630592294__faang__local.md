---
qid: ing_3630592294__faang__local
question: 'Explain: GraphQL has a single point of entry — What Is GraphQL? REST vs.
  GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 494
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:50:05-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain what GraphQL is and why it’s often described as having “a single point of entry,” then contrast that with REST. I’ll assume the audience knows HTTP basics but not GraphQL internals, and we’re focusing on design trade‑offs rather than implementation details.

**Approach**  
1. Define GraphQL in a nutshell.  
2. Explain the “single point of entry” concept.  
3. Contrast key REST vs. GraphQL characteristics: request shape, data fetching, versioning, caching, tooling.  
4. Touch on common pitfalls and when to choose each.

**Depth**  

| Feature | REST | GraphQL |
|---------|------|---------|
| **Endpoint(s)** | Multiple URLs (one per resource) | One `/graphql` endpoint; schema drives shape |
| **Request shape** | Fixed payload → client must make many round‑trips | Client sends a query specifying exact fields → one round‑trip |
| **Over‑fetch / under‑fetch** | Often over‑fetch; no fine‑grained control | Fine‑grained; avoid over‑fetch |
| **Versioning** | New endpoints or path segments | Schema evolution via deprecation, union types |
| **Caching** | URL‑based cache hits | Requires custom cache keys (query string + variables) |
| **Tooling** | Swagger/OpenAPI docs | Introspection → auto‑generated IDEs, type safety |

GraphQL’s single entry point is the schema: a typed contract that tells clients what data exists and how to combine it. The server validates queries against this schema before execution.

**Edge Cases**  
- Heavy read workloads with very simple data can be overkill; REST’s cache‑friendly URLs shine.  
- Complex mutation logic may require careful batching in GraphQL to avoid N+1 problems.  
- Security: need query depth limits to prevent expensive traversals.

**Optimize & Communicate**  
I’d emphasize that the choice hinges on client needs: dynamic, data‑rich UIs benefit from GraphQL’s flexibility; static APIs with strong caching requirements favor REST. In an interview, I’d close by summarizing the trade‑offs in a one‑sentence comparison and invite follow‑up questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
