---
qid: ing_038ed796ad__faang__local
question: 'Explain: REST and HTTP are Not the Same — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 457
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:25-05:00'
sources: []
---

**Clarify**  
You’re being asked to distinguish *REST* from the underlying transport protocol *HTTP*.  
Assume: the interviewee knows HTTP verbs, status codes, and that REST is an architectural style for web services.

---

**Approach**  
1. Define REST as a set of constraints (statelessness, client‑server, cacheable, uniform interface).  
2. Contrast with HTTP as a protocol that can be used to implement many styles (SOAP, GraphQL, RPC).  
3. Highlight how an API “RESTful” means it follows those constraints, not merely that it uses HTTP.

---

**Depth**  
- **REST**: *Representational State Transfer* – an architectural style for networked applications.  
  - **Stateless**: each request contains all info; server stores no session.  
  - **Client‑Server**: separation of concerns.  
  - **Cacheable**: responses can be cached to improve performance.  
  - **Uniform Interface**: uses standard verbs (GET, POST, PUT, DELETE) and resource URIs; decouples client & server evolution.  
- **HTTP**: a protocol that provides the transport layer (request/response model). It supplies methods, headers, status codes but imposes no architectural constraints.  
  - You can build RESTful services *over* HTTP, or you can use HTTP for SOAP, GraphQL, gRPC, etc.

Thus, “REST” is an **architecture**; HTTP is a **protocol** that often implements it.

---

**Edge Cases**  
- A service using HTTPS with JSON payloads but violating statelessness (e.g., storing session in cookies) is *not* RESTful.  
- Using HTTP/2 or WebSockets does not change the REST constraints.

---

**Optimize & Communicate**  
Summarize: “REST = design principles; HTTP = transport.”  
Mention that many modern APIs claim to be RESTful simply because they use HTTP, but true RESTfulness requires all four constraints. This shows you understand both levels and can evaluate an API’s compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
