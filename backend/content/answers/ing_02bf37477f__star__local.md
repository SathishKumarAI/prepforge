---
qid: ing_02bf37477f__star__local
question: 'Explain: Endpoint: DELETE /backends/{backend_id} — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 340
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:52-05:00'
sources: []
---

**Situation**  
At my previous company we ran a micro‑service that exposed an API for managing ML model backends. The `DELETE /backends/{backend_id}` call was critical because it removed a node from the production pool while keeping traffic uninterrupted, but our existing implementation caused brief outages and stale routing tables.

**Task**  
I needed to redesign the deletion workflow so that removing a backend would be atomic, keep the load balancer healthy, and provide immediate visibility of the change to clients without impacting latency or throughput.

**Action**  
First I introduced a *deprecation flag* in the service registry. When the endpoint was hit, the controller marked the backend as `draining` and updated the health‑check metadata so that the LB stopped sending new requests but still served warm ones. Next I used an async Kafka event to trigger a graceful shutdown on the node itself, allowing in‑flight inference jobs to finish within a configurable timeout. Finally, once the node reported `offline`, the registry emitted a “removed” event that triggered a synchronous refresh of the LB’s routing table via its REST API, ensuring all downstream services saw the change instantly.

**Result**  
The redesign cut traffic disruption from ~3 seconds to <200 ms, reduced dropped inference requests by 97%, and lowered mean time to recovery (MTTR) for backend removal to under a minute. I learned that coupling health‑check flags with event‑driven state propagation is key for resilient load balancing in ML serving environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
