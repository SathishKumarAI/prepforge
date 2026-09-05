---
qid: ing_02bf37477f__fp__local
question: 'Explain: Endpoint: DELETE /backends/{backend_id} — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 460
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:10:52-05:00'
sources: []
---

### Why a **DELETE /backends/{backend_id}** endpoint is essential

At the core of any distributed service is *resource allocation*: traffic must be routed to healthy workers while keeping latency low and cost minimal. A load balancer exposes a set of back‑end instances; each instance can appear or disappear independently (auto‑scale, maintenance, failure). The **DELETE** operation removes an identifier from that set, ensuring the balancer no longer forwards requests to it.

#### Fundamental problem
We must maintain *stability* (no request lands on a dead node) and *fairness* (traffic evenly spread among active nodes). Removing a backend is not just “stop sending traffic”; we must also:

1. **Gracefully drain** in‑flight connections—otherwise users see errors.
2. **Update routing tables** atomically to avoid split‑brain.
3. **Persist state** so that a restart or crash doesn’t resurrect the removed node.

#### Why it works the way it does
The endpoint is idempotent: repeated deletes are safe, which simplifies client logic and error handling. It accepts only an identifier; no body is needed because the balancer already owns all metadata (health‑check config, weight). This separation of concerns keeps the API thin and composable.

#### Deeper principle
This mirrors *resource reclamation* in operating systems: a process must be explicitly terminated so that its descriptor can be reused. The load balancer’s routing table is analogous to an address space; deleting a backend frees up an “address” for future workers, preventing leaks and ensuring linear scalability.

#### Non‑obvious insight
Most designs treat deletion as instantaneous, but in practice the **drain timeout** must be tuned to traffic burst size. A too‑short drain causes mid‑session failures; a too‑long drain wastes capacity. Thus the endpoint should expose an optional `drain_timeout` header or query param, turning what looks like a simple delete into a *controlled graceful degradation* mechanism—an optimization that balances reliability and resource efficiency.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
