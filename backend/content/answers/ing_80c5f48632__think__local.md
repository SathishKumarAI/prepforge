---
qid: ing_80c5f48632__think__local
question: 'Explain: Routing Engine — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 501
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:30:23-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is a “Routing Engine”?* – Think of it as the component that decides which backend node a request should hit.  
- *Load balancer context*: We’re designing a stateless or stateful load‑balancing service (e.g., L4/L7).  
- *Assumptions to state up front*: traffic patterns, failure modes, latency budgets, scaling goals, consistency requirements.

**2️⃣ Adopt a design framework**  
1. **Requirements** – functional (routing rules, health checks), non‑functional (throughput, SLA).  
2. **High‑level architecture** – components: client → LB front‑end (proxy) → routing engine → backend pool.  
3. **Data model & state** – routing tables, service registry, health status.  
4. **Algorithms** – weighted round robin, least‑connections, consistent hashing, session affinity.

**3️⃣ Step‑by‑step reasoning**  
- *Collect input*: client request headers, IPs, cookies.  
- *Normalize* → map to a key (e.g., user ID).  
- *Lookup routing table*: use consistent hashing for sharding.  
- *Apply health checks*: skip unhealthy nodes; fall back or retry.  
- *Decision output*: forward packet, maybe modify headers.

Iterate: evaluate latency of each step, consider caching, pre‑computation, and how to update the routing table without downtime (e.g., blue/green rollout).

**4️⃣ Common traps to avoid**  
- Assuming all nodes are identical → ignore heterogeneity.  
- Over‑optimizing for a single metric (latency) while ignoring reliability.  
- Forgetting to handle sticky sessions if required.  
- Neglecting the cost of state synchronization in a distributed routing engine.

**5️⃣ Sanity‑check & verbalize**  
- “If I add one more node, does throughput scale linearly?” → test with consistent hashing.  
- “What happens when half the pool dies?” → simulate health‑check failover.  
- Communicate clearly: start with a diagram, then walk through a sample request, highlighting where decisions are made and how state is accessed.

By iterating this mental checklist you’ll build a robust, scalable routing engine that meets interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
