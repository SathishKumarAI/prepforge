---
qid: ing_b5cc01c440__faang__local
question: 'Explain: 4.2 Requirement 2: Health Monitoring — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 465
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:05-05:00'
sources: []
---

**Clarify**  
We need a *load balancer* that distributes health‑check traffic for a fleet of monitoring agents (e.g., heart‑beat pings).  Assume:  
• High request volume (10⁵+ req/s) from thousands of devices.  
• Low latency (<50 ms) and high availability (≥99.9 %).  
• Stateless or minimal state, with eventual consistency for health status.

**Approach**  
1. **Ingress layer** – use a global CDN/edge cache to front the LB, reducing egress cost.  
2. **Dynamic pool** – maintain an in‑memory registry (Redis Cluster) keyed by device ID → current node.  
3. **Health check routing** – hash on device ID to pick a node; fallback to round‑robin if node offline.  
4. **Failover** – each LB instance watches a shared health‑check topic (Kafka); upon node failure, it updates the registry and propagates a “node down” event.

**Depth**  
- *Algorithm*: consistent hashing with virtual nodes for even spread; weighted by node capacity.  
- *Complexity*: O(1) routing lookup; O(log N) for rebalancing when topology changes.  
- *Fault tolerance*: use 3‑fold replication in Redis; LB instances are stateless, so any can take over instantly.  
- *Metrics*: latency, hit‑rate per node, failure rate.

**Edge Cases**  
- Sudden spike of health checks → burst buffer (Kafka) to absorb traffic.  
- Network partition → stale registry entries; resolved via TTL and periodic gossip.  
- Device ID collisions – use UUIDs; hash collision probability negligible.

**Optimize & Communicate**  
We can reduce memory by sharding the registry across LB shards, each responsible for a hash range.  Adding a CDN cache for “healthy” responses further cuts latency.  In interviews, I’d explain: “Our design keeps routing O(1), ensures eventual consistency via Kafka, and achieves high availability by making LB stateless.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
