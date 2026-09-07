---
qid: ing_35f03a39c7__faang__local
question: 'Explain: Drawbacks of GraphQL — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 555
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:33-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise comparison of GraphQL versus REST, focusing on the main drawbacks that GraphQL can introduce in production systems.  
*Assumptions:* We’re evaluating typical enterprise APIs (micro‑services, mobile clients) where latency, bandwidth, and operational complexity matter.

---

**Approach**

1. List key disadvantages per dimension (performance, tooling, security, caching, developer experience).  
2. Provide concrete examples or counter‑examples to illustrate each point.  
3. End with a brief recommendation on when GraphQL is still justified.

---

**Depth**

| Dimension | REST Strength | GraphQL Drawback | Why it matters |
|-----------|---------------|------------------|----------------|
| **Bandwidth** | Fixed shape → predictable payloads | Single query can pull nested data; over‑fetching or under‑fetching common | Mobile networks suffer if queries are not fine‑tuned. |
| **Caching** | HTTP verbs + ETag/Cache‑Control | Responses are opaque; no stable URL → hard to cache at CDN level | Increases load on origin servers. |
| **Versioning** | Simple resource URLs, 2xx/4xx codes | Schema evolution requires careful mutation handling or “deprecation” directives | Teams need extra coordination. |
| **Tooling & Debugging** | Mature HTTP tooling (Postman, curl), clear error codes | Error payloads are nested; introspection can expose internal schema → security risk | Requires custom instrumentation. |
| **Learning Curve** | REST is ubiquitous | GraphQL syntax, resolver logic, type system adds cognitive load | Onboarding slower for new devs. |
| **Server Complexity** | One endpoint per resource | Resolver chain may hit many services → request‑per‑request latency grows | Needs batching or DataLoader patterns. |

---

**Edge Cases**

- **Real‑time heavy traffic:** GraphQL can choke if a single subscription pulls large datasets.  
- **Strict compliance environments:** Schema introspection might leak internal details; must disable in prod.  
- **Large file uploads/downloads:** REST’s multipart support is straightforward; GraphQL requires custom scalar or separate endpoints.

---

**Optimize & Communicate**

- *Mitigations:* Use query complexity analysis, persisted queries, and CDN‑friendly resolvers.  
- *Narrative:* Emphasize that GraphQL shines for mobile UI flexibility but introduces operational overhead. Recommend REST for high‑throughput, cache‑heavy services, and reserve GraphQL for cases where client data shape varies dramatically.

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
