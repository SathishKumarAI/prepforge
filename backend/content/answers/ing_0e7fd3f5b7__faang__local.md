---
qid: ing_0e7fd3f5b7__faang__local
question: What is REST? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 599
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:33-05:00'
sources: []
---

## 1️⃣ Clarify  
The interviewer wants a concise explanation of **REST** and its differences from **GraphQL**.  
Assumptions:  
* The audience knows basic HTTP/JSON but not the architectural styles.  
* We need to highlight key trade‑offs, not implement code.

## 2️⃣ Approach  
1. Define REST as an architectural style for stateless client–server communication.  
2. List its core constraints (URI resources, verbs, cacheability, layered system).  
3. Contrast with GraphQL’s single‑endpoint query language and type system.  
4. Summarize pros/cons in a bullet list.

## 3️⃣ Depth  
**REST**  
- *Resources*: Identified by URLs; each resource has its own URI.  
- *HTTP verbs*: GET, POST, PUT/PATCH, DELETE map to CRUD operations.  
- *Statelessness*: Each request contains all info; no session on server.  
- *Cacheable*: Responses can be cached via headers (`ETag`, `Expires`).  
- *Layered*: Clients cannot see beyond the gateway (load balancer, auth).

**GraphQL**  
- *Single endpoint* (`/graphql`); client sends a query string describing exact shape of data needed.  
- *Strongly typed schema*; introspection allows tooling.  
- *No over‑fetching*: client requests only what it needs; no under‑fetching.  
- *Mutation vs Query distinction*: similar to GET vs POST.

**Comparison**

| Feature | REST | GraphQL |
|---------|------|---------|
| Endpoint design | Multiple URIs | One endpoint |
| Data shape control | Fixed by server | Flexible per query |
| Over/under‑fetching | Common | Reduced |
| Caching | Built‑in HTTP caching | Requires custom cache logic |
| Tooling | Mature (Swagger, OpenAPI) | Strong introspection & IDE support |
| Learning curve | Low (HTTP verbs) | Higher (query language, schema) |

## 4️⃣ Edge Cases  
- **Versioning**: REST uses URI or headers; GraphQL evolves via deprecation in schema.  
- **Bulk operations**: REST may need multiple requests; GraphQL can batch mutations.  
- **Real‑time data**: Neither native—REST via polling, GraphQL via subscriptions (WS).

## 5️⃣ Optimize & Communicate  
I’d finish by noting that choice depends on team skillset and use case: use REST for simple CRUD with caching needs; switch to GraphQL when clients need fine‑grained data or have many heterogeneous consumers. This structured explanation demonstrates clear communication, depth, and awareness of trade‑offs—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
