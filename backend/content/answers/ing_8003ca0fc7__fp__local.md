---
qid: ing_8003ca0fc7__fp__local
question: 'Explain: 1.2. Client-Server — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 420
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:39-05:00'
sources: []
---

## Why a client‑server interface should be *stateless* and “resource‑centric”

In any distributed system the **client** (browser, app) asks the **server** for data or an action.  
If the server had to remember every previous request (stateful), each new call would depend on a hidden history:  
- the client must send session cookies or tokens,  
- the server needs extra storage and lock‑free logic,  
- failures cascade because one broken session can break many clients.

**REST** (“Representational State Transfer”) arose from the observation that *every* interaction in the web is essentially a request for a **resource** (user, order, image). The resource has a unique URI; its representation (JSON, XML) is sent back.  

The deep principle is *separation of concerns*:  
- **Identity** → URI (purely addressable)  
- **State** → Representation (stateless transfer)  
- **Behaviour** → HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) that are semantically pure and cache‑friendly.

Because the server never stores client state, it can scale horizontally; caching layers work out of the box; failures become local.  

### Non‑obvious insight
A RESTful API is *not* a “set of endpoints”; it is an **information model**.  
If you think of resources as nodes in a graph and links as hypermedia controls (HATEOAS), clients can discover actions at runtime without hard‑coding URLs. This turns the API into a **self‑describing contract**, reducing coupling and enabling evolution without breaking clients.

---

*In short*: REST’s stateless, resource‑oriented design is a direct application of the principle that distributed systems should expose pure data transformations rather than hidden stateful interactions—making them easier to scale, cache, and evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
