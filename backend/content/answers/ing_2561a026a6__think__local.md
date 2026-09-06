---
qid: ing_2561a026a6__think__local
question: 'Explain: Pattern 1: Active-Passive (Failover) — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 394
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:07:57-05:00'
sources: []
---

**Thought‑Process for Explaining the “Active–Passive (Failover)” Pattern**

1. **Clarify Scope & Assumptions**  
   - Confirm that the pattern refers to *high‑availability* with a single active instance and one or more passive replicas.  
   - Assume stateless workloads unless otherwise noted, and that the load balancer is external (e.g., AWS ELB) rather than an internal proxy.

2. **Mental Model / Framework**  
   - Treat the system as a *primary–secondary* pair: the primary handles all traffic; the secondary stays idle until failure detection triggers a switchover.  
   - Map out the *control flow*: request → LB → active → response; monitor → heartbeat → failover.

3. **Step‑by‑Step Reasoning**  
   - Identify health checks and heartbeat intervals.  
   - Explain how the load balancer routes traffic based on these checks.  
   - Detail the failover mechanism: promotion of passive to active, session state transfer (if needed), and eventual demotion once the original becomes healthy again.

4. **Common Traps**  
   - Mixing up “passive” with “standby”; remember it never serves traffic until promoted.  
   - Ignoring data consistency issues—ensure replication strategy supports eventual or strong consistency as required.  
   - Overlooking the cost of keeping a passive instance idle; justify resource allocation.

5. **Sanity‑Check & Communication**  
   - Re‑explain in one sentence: “A load balancer routes all traffic to a single active node, while a passive replica waits; on failure detection, the passive is promoted and the LB switches over.”  
   - Verify that latency, cost, and recovery time trade‑offs are clear before finalizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
