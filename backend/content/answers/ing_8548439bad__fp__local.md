---
qid: ing_8548439bad__fp__local
question: 'Explain: Endpoint: POST /backends — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 454
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:25-05:00'
sources: []
---

**POST /​backends – adding a new backend to a load‑balancer**

---

### The underlying problem  
A load balancer must *distribute* client requests among a set of healthy servers while respecting capacity, latency, and failure constraints. When a new server (backend) joins the pool, the system must:

1. **Validate** that the target service can be reached and is compatible.
2. **Integrate** the backend into the current routing policy without disrupting traffic.
3. **Maintain state consistency** across replicas of the balancer.

If any of these steps fail, the entire pool may become imbalanced or unsafe.

---

### Why the endpoint must behave as it does  
* **Idempotence & safety** – The operation is *POST* because adding a backend changes state; however, it should be *safe to retry* if the client loses connectivity. Therefore the API returns a 202 (accepted) and an opaque job ID so that repeated POSTs do not create duplicates.
* **Circuit‑breaker semantics** – Before insertion, the balancer performs a health probe (`GET /health`). If the probe fails, the request is rejected with 503, preventing “bad” backends from receiving traffic.
* **Consistent hashing & sticky sessions** – The backend’s weight and metadata (e.g., region, latency) are stored in a distributed config store. The balancer recomputes the hash ring atomically, guaranteeing that all replicas see the same view before routing resumes.

---

### Deeper principle  
The design is an instance of *distributed consensus + graceful admission control*. By decoupling validation from state change (via the job ID), we satisfy **CAP**: we preserve consistency while still offering high availability during a transient network glitch. The non‑obvious insight: **using an asynchronous job queue for backend addition turns a potentially blocking operation into a low‑latency, fault‑tolerant API call**—something many designers overlook when they assume the balancer can immediately probe every new host synchronously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
