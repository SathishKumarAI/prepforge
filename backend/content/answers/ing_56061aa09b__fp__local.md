---
qid: ing_56061aa09b__fp__local
question: 'Explain: Core APIs — Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 464
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:38-05:00'
sources: []
---

## Why a Load‑Balancer API is Essential

In any scalable web service the **core problem** is *distribution of traffic* so that no single node becomes a bottleneck or failure point.  
The load‑balancer must therefore answer two questions at once:

1. **Which instance should receive a request?**  
2. **When does an instance become “unavailable”?**

These questions map directly onto the *optimization* of *resource utilization* and *system reliability*.  

### Fundamental API Design

| Endpoint | Purpose | Key Parameters |
|----------|---------|----------------|
| `GET /health` | Expose liveness/readiness | `instance_id`, `timestamp` |
| `POST /register` | Add a new backend | `ip, port, weight, tags` |
| `DELETE /deregister` | Remove an unhealthy instance | `instance_id` |
| `GET /routing` | Return the chosen instance for a request | `client_ip, path, headers` |

- **Health** is a *probabilistic* signal: exponential back‑off and jitter prevent thundering herd.  
- **Weight** implements *optimization*: traffic is split proportionally to compute capacity, yet the API must support *dynamic reweighting* in O(1).  
- **Routing** uses *consistent hashing* on `client_ip` + `path` so that cache locality is preserved while still balancing load.

### Non‑Obvious Insight

Most designs ignore the *entropy* of request sources. If all clients come from a small set of IP ranges, naïve round‑robin will overload a few nodes even though overall capacity is fine. By incorporating **client‑IP clustering** into the routing hash (e.g., `hash(client_ip) ^ hash(path)`), the API automatically spreads traffic across geographically diverse backends without extra configuration.

### Bottom Line

A well‑crafted load‑balancer API turns an abstract resource‑allocation problem into a set of deterministic, observable calls that respect both optimization (through weighted routing) and resilience (via health checks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
