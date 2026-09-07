---
qid: ing_184be1de10__faang__local
question: What is GraphQL? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 495
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:00-05:00'
sources: []
---

## Clarify  
The interview asks you to explain **GraphQL** and compare it to **REST**.  
Key points: what GraphQL is, its core concepts (schema, queries, mutations, subscriptions), why it was created, and how it differs from REST’s resource‑oriented approach.

## Approach  
1. Define GraphQL in one sentence.  
2. List the primary components of a GraphQL server.  
3. Contrast each component with its REST counterpart.  
4. Highlight trade‑offs (developer experience vs runtime cost).  

## Depth  
- **GraphQL**: A typed query language for APIs, backed by a schema that describes types and relationships. Clients send a single request containing the exact data shape they need; the server resolves fields via resolvers.  
- **REST**: Uses multiple endpoints (`/users`, `/posts`) and HTTP verbs (GET, POST). Each endpoint returns a fixed payload; over‑fetching or under‑fetching is common.  

| Feature | GraphQL | REST |
|---------|---------|------|
| Data fetching | Single query → exact shape | Multiple calls → fixed shape |
| Versioning | Schema evolution via deprecation | New endpoints / versioned URLs |
| Typing | Strong, introspectable schema | Implicit via JSON |
| Tooling | Auto‑generated docs, IDE support | Swagger/OpenAPI |

**Trade‑offs:** GraphQL reduces round trips and payload size but adds resolver complexity and can increase server load if not paginated. REST is simpler to cache and stateless but may require more network traffic.

## Edge Cases  
- **Large queries**: risk of “query explosion”; mitigate with depth limits or cost analysis.  
- **Security**: expose schema; enforce field‑level auth in resolvers.  
- **Caching**: harder than REST’s URL‑based caching; use persisted queries or client caches.

## Optimize & Communicate  
Conclude by summarizing that GraphQL shines for dynamic, nested data needs (e.g., mobile clients), while REST remains effective for simple CRUD services and where HTTP semantics are paramount. Emphasize the decision factor: **client flexibility vs server simplicity**. This structured answer demonstrates clear communication, depth of knowledge, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
