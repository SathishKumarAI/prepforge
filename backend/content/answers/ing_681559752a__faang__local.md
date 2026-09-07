---
qid: ing_681559752a__faang__local
question: 'Explain: 2.2. Hypermedia — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 559
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:53-05:00'
sources: []
---

**Clarify**  
We’re asked to explain “What is REST?” in the context of a hypermedia‑driven API. I’ll assume the interviewer wants a concise definition, key principles, and why it matters for scalable web services.

**Approach**  
1. Define REST (Representational State Transfer).  
2. List its six constraints that shape design.  
3. Show how hypermedia fits in (“HATEOAS”).  
4. Give an example of a typical RESTful call.  
5. Highlight trade‑offs vs other styles (RPC, GraphQL).

**Depth**  

REST is an architectural style for networked applications. A *RESTful* API exposes resources identified by URIs and manipulates them using the standard HTTP verbs (GET, POST, PUT/PATCH, DELETE). The six core constraints are:

| Constraint | Purpose |
|------------|---------|
| **Client–Server** | Separation of concerns → independent evolution |
| **Stateless** | Each request contains all needed context → horizontal scaling |
| **Cacheable** | Responses labeled cache‑friendly to reduce load |
| **Uniform Interface** | CRUD‑style operations + standard media types (JSON, XML) |
| **Layered System** | Intermediaries (proxies, gateways) can be inserted without client change |
| **Code on Demand (optional)** | Downloadable components for extensibility |

Hypermedia is the *“hyper‑links”* part of REST: responses include links that describe possible next actions (HATEOAS). For example:

```http
GET /orders/123 HTTP/1.1
Accept: application/json

{
  "id":123,
  "status":"processing",
  "_links":{
     "self":{"href":"/orders/123"},
     "cancel":{"href":"/orders/123/cancel","method":"POST"}
  }
}
```

Clients discover behavior through these links instead of hard‑coded URLs.

**Edge Cases**  
- **Non‑stateless designs** (session cookies) break scaling.  
- Over‑exposing hypermedia can bloat payloads; balance is needed.  
- Some legacy systems lack proper media types → brittle clients.

**Optimize & Communicate**  
I’d note that REST’s simplicity allows horizontal scaling and clear versioning, but it may incur higher round‑trips compared to GraphQL or RPC for complex queries. In an interview I would finish by summarizing: *REST is a lightweight, scalable API style driven by standard HTTP, whose hypermedia constraint (HATEOAS) keeps clients decoupled from server evolution.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
