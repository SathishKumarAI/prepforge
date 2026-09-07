---
qid: ing_2561a026a6__faang__local
question: 'Explain: Pattern 1: Active-Passive (Failover) — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 458
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:37-05:00'
sources: []
---

**Clarify**

You’re asked to design a load‑balancing system that supports *active‑passive failover*.  
Assumptions I’d confirm:  

1. **Traffic volume & latency goals** (e.g., <10 ms).  
2. **Service semantics** – are requests idempotent or stateful?  
3. **Failure detection window** and acceptable downtime.  
4. **Geographic distribution** of active vs passive nodes.  

**Approach**

1. **Health‑check probe**: TCP/HTTP heartbeat on a dedicated port.  
2. **Primary load balancer (LB)** that forwards to the *active* cluster only.  
3. **Secondary LB** sits behind a DNS round‑robin or Anycast IP, receiving traffic only when the primary is dead.  
4. **Failover trigger**: if the active cluster fails > N consecutive probes, the secondary LB takes over and updates DNS TTLs to zero to propagate quickly.  

**Depth**

- Use *keepalive* TCP sessions to maintain stateful connections; for stateless APIs, simple round‑robin suffices.  
- **Complexity**: O(1) per request at the LB; health checks run in O(#nodes).  
- **Trade‑offs**: Lower TTL → faster failover but more DNS churn; higher TTL → less churn but slower switchover.  

**Edge Cases**

- *Split brain*: guard against both LBs marking themselves active by using a distributed lock (e.g., Redis Sentinel) or a shared configuration store.  
- *Rolling updates*: ensure the passive cluster is fully synced before promotion.  
- *Network partition*: detect via ping/ICMP to avoid false positives.  

**Optimize & Communicate**

Explain that we can reduce DNS latency by using Anycast and keep TTLs short during expected failover windows, then increase them post‑recovery. Highlight monitoring: metrics (latency, error rates) and alerting thresholds. End with a diagram summarizing the flow from client → LB → active cluster, with failover path to passive cluster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
