---
qid: ing_ba24969a3c__fp__local
question: 'Explain: Solution — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 355
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:27-05:00'
sources: []
---

**Pattern: Server‑Side Service Discovery**

*Problem.*  
In a distributed machine‑learning system (e.g., model serving, feature store, data pipeline), the client must know which backend endpoint hosts the desired service. Hard‑coding URLs or polling for changes breaks scalability and resilience.

*Why it works.*  
Treat each service instance as a *resource* in an *information space*. The server maintains a registry mapping logical names (e.g., `model‑v2`, `feature‑cache`) to actual network addresses. Clients query the registry once, receive a current address, and cache it locally for the request’s lifetime. This is a **pull‑based** discovery that reduces traffic compared to push notifications while ensuring freshness through TTLs or version stamps.

*Deeper principle.*  
The pattern implements *statelessness* in the client: all state about where services live lives on the server, aligning with the *CAP theorem* (Consistency + Partition tolerance → Availability). By externalizing the mapping, the system trades a small amount of extra latency for robustness against instance churn.

*Non‑obvious insight.*  
Because the registry itself is a service, its design determines overall fault tolerance. A naive single‑point registry becomes a bottleneck; instead, embed *eventual consistency* (e.g., using gossip or CRDTs) so that discovery scales horizontally without sacrificing correctness for short‑lived queries. This subtle shift turns a simple lookup into a scalable, self‑healing mechanism essential for production ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
