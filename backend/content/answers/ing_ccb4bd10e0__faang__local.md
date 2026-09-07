---
qid: ing_ccb4bd10e0__faang__local
question: 'Explain: What is GraphQL? When should we use — What Is GraphQL? REST vs.
  GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 438
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:24-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise comparison of GraphQL and REST, when each is appropriate, and the core idea behind GraphQL. I’ll assume you want an explanation that can be delivered in a technical interview.

**Approach**  
1. Define GraphQL’s purpose (query language + runtime).  
2. Contrast it with REST’s resource‑oriented model.  
3. Highlight key trade‑offs: bandwidth, flexibility, tooling, learning curve.  
4. Provide concrete use‑cases for each pattern.

**Depth**  
GraphQL is a typed query language that lets clients request exactly the data they need in a single round‑trip; the server resolves the schema and returns a JSON object matching the shape of the query. REST exposes stateless HTTP endpoints tied to CRUD on resources, often returning fixed payloads.

*When to use GraphQL:*  
- **Complex UI with many data sources** (e.g., dashboards).  
- **Mobile or low‑bandwidth clients** that need precise payloads.  
- **Rapid iteration on front‑end features** without server versioning.  

*When to use REST:*  
- **Simple CRUD services** where the resource shape is stable.  
- **Public APIs** benefiting from cacheability and standard HTTP semantics.  
- **Legacy infrastructure** already built around RESTful endpoints.

**Edge Cases**  
GraphQL can over‑fetch if queries are poorly designed; it may also hit performance bottlenecks (e.g., N+1 problems). REST struggles with nested data without multiple calls but has mature caching strategies.

**Optimize & Communicate**  
Explain that choosing GraphQL often requires a schema design phase and a resolver layer, whereas REST can be quicker to bootstrap. Emphasize the trade‑off between flexibility (GraphQL) and simplicity/standardization (REST). Conclude by noting that many FAANG teams adopt a hybrid approach—public APIs in REST, internal services or mobile clients using GraphQL—to balance these strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
