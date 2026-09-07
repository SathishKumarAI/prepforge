---
qid: ing_40f834727f__faang__local
question: When will a load balancer (LB) will stop sending requests to a server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 448
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:15:06-05:00'
sources: []
---

**Clarify**  
We’re asked: *“When will a load balancer stop sending traffic to a particular backend?”*  
Assume the LB is health‑check based, uses TCP/HTTP probes, and supports graceful draining (e.g., AWS ELB, GCP LB). Confirm whether it’s round‑robin, least‑conn, or weighted; whether we’re talking about an entire instance or just a specific port.

**Approach**  
1. Identify the health‑check mechanism.  
2. Determine if the LB uses *active* or *passive* checks.  
3. Understand draining policy (immediate vs. graceful).  
4. Map state transitions: `Healthy → Unhealthy → Draining → Removed`.

**Depth**  
- **Active probes**: The LB sends periodic heartbeats (TCP SYN/HTTP GET). If a probe fails *N* consecutive times (configurable), the instance is marked *Unhealthy*.  
- **Passive checks**: Failure of client‑side connections or error responses can also flag an unhealthy node.  
- Once *Unhealthy*, the LB stops routing new requests to that node. Existing in‑flight requests may finish unless a graceful drain timeout expires.  
- If draining is enabled, the LB continues to forward traffic for the configured grace period (e.g., 30 s) before fully removing it from rotation.

**Edge Cases**  
- Network partition: probes fail but backend still serves; LB will stop traffic even if app is alive.  
- Misconfigured health endpoint returns 200 on failure → LB never stops traffic.  
- Load spikes right after marking unhealthy may cause thrashing if probe interval is too short.

**Optimize & Communicate**  
Explain tuning knobs: probe interval, thresholds, drain timeout. Emphasize that the decision to stop traffic hinges on *health‑check status*, not arbitrary load metrics. Summarize: “The LB stops sending new requests once the backend fails its health checks for a configured number of attempts, optionally after a graceful draining period.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
