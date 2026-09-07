---
qid: ing_80c5f48632__faang__local
question: 'Explain: Routing Engine — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 447
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:23-05:00'
sources: []
---

**Clarify**  
You’re asked to design a **routing engine** that acts as a load balancer for incoming traffic to backend services. Assume we have multiple identical instances behind the engine, each with a limited capacity (CPU/memory). The goal is to distribute requests evenly while handling failures and scaling.

**Approach**  
1. *Front‑end*: API gateway receives all requests.  
2. *Health monitor*: Periodically ping each instance; keep a health‑status table.  
3. *Load balancer algorithm*: Use **consistent hashing** (e.g., Rendezvous) so that rebalancing adds minimal churn.  
4. *Dynamic weighting*: Weight per node = `available_capacity / total_capacity`. Update weights on metrics from the monitor.  
5. *Fail‑over*: If a node fails, mark it unhealthy; all requests are routed to healthy nodes until recovery.

**Depth**  
- **Consistent hashing**: O(1) lookup after initial hash of request ID.  
- **Weight update**: Poll every 500 ms; recompute weights in O(N).  
- **Complexity**: Average routing latency ≈ O(log N) if we use a balanced tree for weights, otherwise O(1).  
- **Trade‑offs**: Consistent hashing reduces churn but can cause uneven distribution when capacities differ widely. Weighting mitigates that.

**Edge Cases**  
- Sudden traffic spike → monitor must throttle or spin up new instances.  
- Partial failure (e.g., one node down) → ensure health checks don’t misclassify due to transient errors.  
- Rebalancing during scaling → verify no request is lost.

**Optimize & Communicate**  
Explain how you would log routing decisions for observability, use a circuit‑breaker pattern for degraded nodes, and autoscale the backend pool based on queue depth. Highlight that this design balances *low latency*, *high availability*, and *minimal rebalancing churn*, which are key metrics in FAANG load‑balancer systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
