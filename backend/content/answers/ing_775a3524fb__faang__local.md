---
qid: ing_775a3524fb__faang__local
question: 'Explain: Instead, it uses a GraphQL schema. We — What Is GraphQL? REST
  vs. GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 439
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:19-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *GraphQL* and contrast it with the traditional *REST* API style. Assume the audience knows basic HTTP but not GraphQL internals. We’ll focus on purpose, data fetching, and client‑server interaction.

**Approach**  
1. Define GraphQL’s core idea (single endpoint, typed schema).  
2. Highlight differences in request shape and response shape.  
3. Touch on how the server resolves fields.  
4. Summarize trade‑offs (flexibility vs. tooling).

**Depth**  
- **GraphQL** is a query language for APIs plus a runtime that executes queries against a *schema* describing types, queries, mutations, and subscriptions. Clients send a single POST to `/graphql` with a JSON body containing the GraphQL query string; the server returns only requested fields in exactly that shape.  
- **REST** relies on multiple endpoints (`/users`, `/posts/123`) and typically over‑fetches or under‑fetches data because each endpoint is fixed. Clients must issue several requests to compose a UI view.  
- In GraphQL, *field resolvers* fetch nested data lazily; the same query can be reused across apps (mobile, web). The schema gives strong typing, enabling IDE autocompletion and runtime validation.  
- **Trade‑offs**: GraphQL adds complexity on the server (resolver orchestration, caching), may increase payload size if misused, and requires careful rate limiting to avoid expensive queries.

**Edge Cases**  
- Overly nested or deep queries → performance hits; mitigate with depth limits or query complexity analysis.  
- Uncached scalar fields → repeated round‑trips; use DataLoader patterns.  

**Optimize & Communicate**  
Mention that many companies (Meta, GitHub) adopt GraphQL for unified data access, but hybrid approaches (REST + GraphQL gateway) are common to balance legacy support and new flexibility. Conclude by noting the interview focus: clear articulation of concepts, not just jargon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
