---
qid: ing_64be021f58__fp__local
question: What are the three places where one can place LB’s in a scalable, reduntant
  web application?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 423
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:13-05:00'
sources: []
---

### Where to put Load Balancers in a Scalable, Redundant Web Stack  

1. **Client‑Facing Edge LB** – sits on the Internet edge (e.g., CloudFront, AWS ELB). It receives every request, terminates TLS, and distributes traffic across the pool of application nodes.  
2. **Internal Service LB** – placed between the web tier and downstream services (API gateways, micro‑services, or database clusters). It hides service instance churn, enables rolling updates, and isolates failures without exposing the internal topology to clients.  
3. **Database/Cache LB** – a dedicated pool that fronts replicated data stores (e.g., read replicas of PostgreSQL or Redis shards). It balances query load, performs health checks, and can promote a replica to primary if the master fails.

#### Why these three spots?  

- **Optimization Principle**: Each LB handles a distinct *resource constraint*—network ingress, inter‑service latency, or data consistency.  
- **Redundancy Principle**: By isolating failure domains, a fault in one tier doesn’t cascade; traffic can be rerouted at the nearest balancer.  
- **Information Flow Principle**: The edge LB exposes minimal internal topology to clients (security & simplicity), while internal LBs keep service discovery and scaling logic encapsulated.

#### Non‑obvious insight  

Most architectures double‑up the client‑edge LB as a backend proxy, but that conflates *routing* with *service discovery*. Separating them lets each balancer specialize: the edge focuses on TLS/geo‑routing; internal LBs focus on health checks and protocol‑level session stickiness. This division reduces complexity in failure handling and yields clearer metrics for capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
