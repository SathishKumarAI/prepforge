---
qid: ing_0851a73323__faang__local
question: 'Explain: The Six Guiding Principles of REST — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 438
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:38-05:00'
sources: []
---

**Clarify**  
The interview asks for the six guiding principles that define *Representational State Transfer (REST)* and why an API built on them is considered “RESTful.” I’ll confirm that the focus is on the architectural constraints, not implementation details such as HTTP verbs.

**Approach**  
1. List each principle succinctly.  
2. Explain its intent in a single sentence.  
3. Show how it shapes design decisions (e.g., statelessness → token auth).  

**Depth**  
| Principle | Essence | Design Impact |
|-----------|---------|---------------|
| **Client‑Server** | Strict separation of concerns | Front‑end & back‑end evolve independently |
| **Stateless** | Each request contains all needed info | No session on the server; easier scaling |
| **Cacheable** | Responses labeled cacheable/non‑cacheable | Improves latency, reduces load |
| **Uniform Interface** | Consistent URIs, verbs (GET/POST) | Predictable API surface, simplifies clients |
| **Layered System** | Intermediate proxies or gateways | Enables load balancers, security layers without client knowledge |
| **Code on Demand (optional)** | Server can send executable code | Rarely used; e.g., JavaScript widgets |

RESTful APIs honor these constraints: they expose resources via nouns in URLs, use HTTP verbs to act on them, and return stateless responses that can be cached. Deviations—like embedding state or over‑loading endpoints—break the REST contract.

**Edge Cases**  
- *Stateful* authentication (e.g., session cookies) violates statelessness; we’d switch to tokens.  
- Non‑cacheable binary blobs need explicit `Cache-Control: no-cache`.  

**Optimize & Communicate**  
Highlight that adhering to these principles yields horizontal scalability, easier maintenance, and a clear contract for consumers—key qualities prized by FAANG teams when designing production‑grade APIs. This structured explanation demonstrates deep understanding while keeping the answer concise (≈190 words).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
