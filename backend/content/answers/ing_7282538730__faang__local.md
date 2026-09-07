---
qid: ing_7282538730__faang__local
question: Can You Use Both REST and GraphQL? — REST vs GraphQL - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 356
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:54-05:00'
sources: []
---

**Clarify**  
You’re asking if a single API layer can expose both REST endpoints *and* a GraphQL endpoint, and what trade‑offs that entails. I’ll assume we want to support legacy clients (REST) while offering new clients the flexibility of GraphQL.

**Approach**  
1. Keep a shared data‑access layer (repositories/ORM).  
2. Implement two adapters:  
   * REST controller → service → repository.  
   * GraphQL resolver → same services/repositories.  
3. Use common validation, authentication, and error handling so logic isn’t duplicated.

**Depth**  
- **Benefits**: No need to rewrite business logic; can roll out GraphQL gradually.  
- **Costs**: Extra maintenance (two code paths), potential API drift if not synced, and larger surface area for security reviews.  
- **Performance**: REST is stateless per request; GraphQL may batch requests but can cause over‑fetch/under‑fetch if misused.  

**Edge Cases**  
- Data model changes must propagate to both adapters—use a schema registry or automated tests.  
- Rate limiting and caching strategies differ (REST often uses HTTP cache headers, GraphQL needs query‑based caching).  
- Security: ensure that GraphQL’s introspection doesn’t expose sensitive fields.

**Optimize & Communicate**  
Start with REST only; add GraphQL once you have a mature schema and client demand. Use automated tests to guard against drift, and document the contract for both interfaces so devs know which layer to hit. This hybrid strategy maximizes backward compatibility while enabling modern query flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
