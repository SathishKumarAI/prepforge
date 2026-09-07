---
qid: ing_bc92cb0c97__faang__local
question: 'Explain: Drawbacks of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 471
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:22-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise comparison between REST and GraphQL, focusing on the main drawbacks of REST that led to GraphQL’s popularity. We’ll assume a typical web‑service context (CRUD APIs) and ignore niche use‑cases like file uploads or streaming.

**Approach**  
1. List core REST limitations.  
2. Contrast each with how GraphQL addresses it.  
3. Summarize trade‑offs in a quick bullet table.  

**Depth**

| Limitation | REST | How GraphQL Helps |
|------------|------|-------------------|
| **Over/under‑fetching** | Fixed endpoints return whole resources → clients get more or less data than needed. | Clients request exactly the fields they need; no surplus traffic. |
| **Versioning & evolution** | Adding a field breaks existing contracts → new API versions required. | Schema evolves with deprecation directives; backward compatibility is baked in. |
| **Multiple round‑trips** | Complex queries (e.g., user + posts) require several endpoints → latency rises. | Single query can fetch nested relations, reducing network hops. |
| **Caching complexity** | Caching is endpoint‑centric; varying query parameters invalidate caches easily. | Each distinct query string can be cached independently; HTTP cache headers still work. |
| **Discoverability & tooling** | Swagger/OpenAPI docs are static; clients must read docs to know available endpoints. | GraphQL introspection gives a live schema; IDEs auto‑complete queries. |

**Edge Cases**  
- Heavy write workloads: GraphQL’s batching can overload the server if not throttled.  
- Simple CRUD apps may overcomplicate with a full GraphQL layer.  

**Optimize & Communicate**  
Explain that while GraphQL solves many REST pain points, it introduces its own concerns (query complexity attacks, caching nuances). In interviews, emphasize you’d weigh the data‑fetching patterns of the product: if clients repeatedly need nested data or evolving schemas, lean GraphQL; otherwise, a well‑versioned REST API may be simpler. This shows balanced judgment and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
