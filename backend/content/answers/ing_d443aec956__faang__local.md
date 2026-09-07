---
qid: ing_d443aec956__faang__local
question: 'Explain: Load Balancing — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 449
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:40-05:00'
sources: []
---

**Clarify**  
We’re asked how load‑balancers contribute to *reliability* in a distributed ML inference system (e.g., serving models at scale). Key assumptions: stateless or stateful requests, multiple model replicas, health‑check endpoints, and SLAs for latency/availability.

**Approach**  
1. **Health monitoring** – periodic probes to each replica.  
2. **Dynamic routing** – forward only healthy instances.  
3. **Redundancy & failover** – maintain spare replicas; use graceful draining.  
4. **Session stickiness (if needed)** – keep related requests on the same instance.  
5. **Metrics & auto‑scale** – feed latency, error rates back to orchestrator.

**Depth**  
A typical Layer‑7 LB (e.g., Envoy or AWS ALB) performs TCP/HTTP health checks every *N* seconds. When a replica fails health checks, the LB removes it from its pool; traffic is redistributed using round‑robin or least‑conns algorithms. For stateful workloads, session affinity (cookie/hash‑based) ensures continuity while still allowing graceful draining of retiring nodes. The LB also implements retries and circuit‑breaker logic: after *k* consecutive failures, a request is redirected to another node. This keeps the overall system above its availability threshold.

**Edge Cases**  
- **Split brain**: two LBs disagree on health → use consensus or shared datastore.  
- **Burst traffic during failover**: sudden spike can overload remaining nodes; mitigate with pre‑warm pools.  
- **Cache invalidation**: stateful caches must be purged when a node is drained.

**Optimize & Communicate**  
Improvements include *predictive scaling* (ML on traffic patterns) and *adaptive health thresholds* based on real‑time latency stats. I’d explain that the LB’s role is to mask instance failures, ensuring continuous service while keeping latency within SLA bounds. This keeps the ML serving layer highly available and fault‑tolerant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
