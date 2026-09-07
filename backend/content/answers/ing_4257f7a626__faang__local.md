---
qid: ing_4257f7a626__faang__local
question: 'Explain: Three-Tier Routing (Auto / Hybrid / Escalate)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 540
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:32-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of *Three‑Tier Routing*—a traffic‑routing strategy that automatically selects a path (Auto), falls back to a secondary path when needed (Hybrid), and finally escalates to manual intervention if both fail (Escalate). Confirm assumptions:  
- We’re routing network packets or service requests.  
- “Auto” means fully automated, no human input.  
- “Hybrid” blends automation with fallback logic.  
- “Escalate” triggers alerts/telemetry for ops.

**Approach**  
1. Define each tier and its control flow.  
2. Illustrate the decision tree.  
3. Discuss key metrics (latency, reliability).  

**Depth**  
| Tier | Behavior | Decision Logic | Typical Use‑Case |
|------|----------|----------------|-----------------|
| **Auto** | Route via primary path; use health checks & telemetry. | If `primary.status == healthy && latency < threshold` → send. | Low‑latency microservice calls. |
| **Hybrid** | On Auto failure, switch to secondary (backup) path; may employ weighted load‑balancing or circuit‑breaker. | If `auto.failed` → evaluate `secondary.health`; if good → route. | Multi‑region deployments where a region can be temporarily down. |
| **Escalate** | When both paths fail or SLA breaches, raise an alert and optionally route to a manual queue. | If `both.failed || latency > maxSLA` → trigger incident ticket, pause auto routing. | Critical data pipelines needing human oversight. |

**Edge Cases**  
- *Flapping health checks*: use exponential back‑off before escalating.  
- *Partial failure*: one hop down but downstream healthy—needs fine‑grained health metrics.  
- *Security policy violations*: Auto should block, Hybrid may still route; Escalate must log and audit.

**Optimize & Communicate**  
- **Performance**: cache path decisions to reduce latency.  
- **Observability**: expose per‑tier metrics (success rate, fail‑over counts).  
- **Resilience**: implement circuit breakers at each tier to prevent cascading failures.  

Narration tip: “We start with the fastest, most reliable route; if it goes down we fall back gracefully; only when all automated safeguards are exhausted do we hand control to ops.” This showcases structured thinking, depth in trade‑offs, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
