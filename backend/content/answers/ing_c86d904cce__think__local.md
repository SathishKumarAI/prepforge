---
qid: ing_c86d904cce__think__local
question: 'Explain: 4.3 Requirement 3: High Availability — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 538
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:10:55-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- What “high availability” means for this system (e.g., 99.999% uptime).  
- The expected traffic patterns and failure modes (single‑point failures vs. cascading outages).  
- Constraints: budget, latency targets, geographic distribution, and whether we’re in a cloud or on‑prem environment.

**2️⃣ Adopt the “availability architecture” mental model**  
- **Redundancy** (multiple instances, multiple AZs/regions).  
- **Failover strategy** (active‑active vs. active‑passive).  
- **Health checking & graceful degradation** (monitoring, circuit breakers).

**3️⃣ Step‑by‑step reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| a | Identify the load‑balancing layer (L7/L4, hardware vs. software). | Determines how we route traffic and what protocols we can inspect. |
| b | Map out traffic flow: client → edge LB → regional LB → application nodes. | Provides clear redundancy points. |
| c | Define health checks for each tier. | Ensures the LB only forwards to healthy instances. |
| d | Plan for graceful failover (e.g., DNS TTL, sticky sessions). | Maintains session continuity while switching backends. |
| e | Decide on scaling policy: auto‑scale groups vs. manual. | Keeps capacity aligned with demand without over‑provisioning. |
| f | Consider cross‑region replication if needed for latency or compliance. | Adds another layer of fault tolerance. |

**4️⃣ Avoid common traps**  

- **Single point at the LB**: Don’t rely on one load balancer; use multiple or a managed service that auto‑scales.  
- **Blind scaling**: Scaling without health checks can route traffic to unhealthy nodes.  
- **Ignoring latency**: Over‑distributed architecture may introduce extra hops—balance availability with performance.

**5️⃣ Sanity check & verbalize**  

- “If an AZ goes down, the LB should reroute all traffic within milliseconds.”  
- “Health checks must be aggressive enough to detect failures but not so frequent that they cause false positives.”  
- Re‑state the high‑level flow: client → edge LB (global) → regional LB → healthy app instances.  

This structured approach keeps the answer focused, demonstrates a solid framework for HA load balancing, and helps avoid typical pitfalls in system design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
