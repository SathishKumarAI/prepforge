---
qid: ing_5d8bf1e8e0__eli5__local
question: 'Explain: How it works: — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 276
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:40-05:00'
sources: []
---

**Service discovery** in machine learning pipelines is like a smart city’s traffic system that always knows where every vehicle (model, data store, or preprocessing step) is parked and how to reach it.

Imagine you’re building a delivery route. Instead of writing down each driver’s address, you use an interactive map app: whenever a new driver joins the fleet, they register their location; when one leaves, they deregister. Your app can then ask, “Who’s nearest to this pickup point?” and get an instant answer.  

In ML, each component (a model server, a database, or a feature‑store) registers itself with a discovery service. The service keeps a live registry of all available endpoints and their network addresses. When another part of the system needs to call a model, it queries the discovery service instead of hard‑coding URLs. This makes the architecture flexible: components can be added, moved, or scaled without breaking connections.

**Key terms:**  
- *Endpoint*: the address (URL/IP) where a service listens for requests.  
- *Registry*: the central list that stores all registered endpoints and their status.  

Service discovery keeps the ML system’s parts connected smoothly, just like a city’s traffic app keeps drivers on the right route.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
