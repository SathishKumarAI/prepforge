---
qid: ing_77fc7752d2__faang__local
question: 'Explain: 2.3. Self-Descriptive — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 444
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:07-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready explanation of **REST** and its key principles.  
Assumptions: the audience knows basic web concepts (HTTP, URLs) but may not be familiar with architectural constraints.

**Approach**  
1. Define REST as an architectural style for distributed systems.  
2. List its core constraints: client–server, statelessness, cacheability, uniform interface, layered system, code‑on‑demand (optional).  
3. Illustrate how these constraints map to HTTP verbs and resource URIs.  
4. Mention practical benefits (scalability, loose coupling) and typical use cases.

**Depth**  
REST is **Representational State Transfer**—a set of constraints that, when followed, enable interoperable, scalable web services.  
*Client–server*: separates UI from data storage.  
*Statelessness*: each request contains all needed info; servers don’t keep session state.  
*Cacheability*: responses tagged with cache‑control headers to reduce latency.  
*Uniform interface*: standard HTTP verbs (GET, POST, PUT, DELETE) operate on resources identified by URLs; representation formats (JSON/XML).  
*Layered system*: intermediaries (proxies, load balancers) can be inserted without changing clients.  
*Code‑on‑demand* (optional): servers may transmit executable code to extend client functionality.

**Edge cases**  
- Over‑fetching: a single endpoint returning too much data; mitigated by pagination or field selection.  
- Non‑stateless operations (e.g., long‑running jobs) require separate status endpoints.  
- Security: rely on HTTPS, OAuth, or API keys to protect stateless calls.

**Optimize & communicate**  
Wrap up with a quick comparison to RPC/GraphQL and emphasize that REST’s simplicity fuels its ubiquity in microservices. Convey confidence by linking constraints to tangible benefits (scalability, caching) and hinting at trade‑offs when deviating from the style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
