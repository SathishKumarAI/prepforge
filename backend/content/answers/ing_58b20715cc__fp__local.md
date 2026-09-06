---
qid: ing_58b20715cc__fp__local
question: 'Explain: Success Response (201 Created) — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 474
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:12:46-05:00'
sources: []
---

In a system‑design interview the “Success Response (201 Created)” is not just a status code; it is an *invariant* that any well‑behaved load balancer must preserve while routing requests to micro‑services.  

**Fundamental problem:**  
When a client issues a `POST /users` to create a new user, the request may traverse dozens of network hops—TLS termination, API gateway, service registry, health checks, and finally the target container. Each hop can drop or duplicate packets, so the load balancer must guarantee that **exactly one** instance processes the creation while all others see an idempotent error.

**Why 201 must be propagated:**  
* *State change confirmation:* `201` tells the client that a new resource now exists. If a copy of the request reaches a second node, returning another `201` would mislead the caller into thinking two users were created.
* *Cache semantics:* HTTP caches treat non‑idempotent verbs differently; propagating `201` lets downstream caches know not to reuse stale responses.

**Deeper principle – information flow control:**  
The load balancer is a *causal barrier*. It must preserve the causal relationship between request and response. By enforcing that only one backend can emit a 201, it upholds *information‑theoretic integrity*: no extra bits (duplicate success messages) leak into the client’s state.

**Non‑obvious insight:**  
Many designers ignore that **routing decisions themselves influence idempotence**. A round‑robin balancer will happily send duplicate `POST`s to different nodes, but a *sticky session* or *consistent hashing* scheme can be leveraged not just for caching but to enforce *single‑write* semantics. Thus the choice of load‑balancing algorithm becomes a direct tool for guaranteeing correct HTTP status propagation.

In short, 201 Created is a contract that the load balancer must honor by ensuring exactly one successful backend response and no duplicated success signals—an elegant embodiment of causal consistency in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
