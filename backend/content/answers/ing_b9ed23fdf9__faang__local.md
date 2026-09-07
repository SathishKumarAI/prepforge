---
qid: ing_b9ed23fdf9__faang__local
question: 'Explain: The "Nines" of Availability — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 579
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:13-05:00'
sources: []
---

**Clarify**  
The interview asks for the *“nines”* metric used in availability engineering (e.g., “five nines” = 99.999 %). I’ll confirm they want: definition, how to compute it from uptime/downtime, its significance in SLA design, and how system architects achieve each level.

**Approach**  
1. Define the metric mathematically.  
2. Show the downtime budget for common levels (3‑9 nines).  
3. Explain typical failure modes that consume those budgets.  
4. Outline architectural patterns to hit each target.  

**Depth**  
- **Definition:** Availability = (1 – (downtime / total time)) × 100%.  
- **Downtime budget:**  
  *5 nines* → 52.6 s/yr, *6 nines* → 5.26 min/yr, *7 nines* → 31.5 min/yr, *8 nines* → 3.15 h/yr, *9 nines* → 31.5 h/yr.  
- **Failure consumption:**  
  • Hardware (disk, power) ~30 % of budget at 7‑nines.  
  • Software bugs or race conditions ~20 %.  
  • Human error (deploys) ~10 %.  
  • Network partitions & latency spikes consume the rest.  
- **Architectural levers:**  
  • *Redundancy* (multi‑AZ, active‑active).  
  • *Graceful degradation* and circuit breakers to avoid cascading failures.  
  • *Health checks + auto‑recovery* (EC2 Auto Scaling, Kubernetes liveness probes).  
  • *Observability & automated rollback* to reduce human error.  
  • *Chaos engineering* to validate failure budgets.

**Edge cases**  
- Non‑linear downtime: a single outage of 1 h can push you from 8 to 7 nines.  
- Time‑zone based SLA windows (e.g., only business hours).  
- Multi‑service dependencies where one service’s unavailability cascades.

**Optimize & Communicate**  
Highlight that moving from 5 to 9 nines is *exponential* in effort: each extra nine requires an order‑of‑magnitude improvement in reliability engineering, tooling, and testing. Emphasize trade‑offs—cost vs. risk—and how to prioritize based on business impact. Conclude with a quick formula to estimate required uptime for any SLA target and mention that real‑world systems often settle at 6–8 nines due to cost constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
