---
qid: ing_94112bd061__faang__local
question: 'Explain: How Health Checking Works — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 492
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:40-05:00'
sources: []
---

**Clarify**  
We’re asked how a load balancer can “health‑check” backend services so requests are only routed to healthy instances. Assume we have stateless HTTP/HTTPS backends behind the LB, want low latency, high availability, and minimal false positives.

**Approach**  
1. Periodic probes (TCP or HTTP).  
2. Maintain a health state per instance.  
3. Update routing tables dynamically.  
4. Expose metrics for observability.

**Depth**  
- **Probe interval & timeout**: e.g., ping every 10 s with 1‑s timeout; if 3 consecutive failures → mark unhealthy.  
- **HTTP probes**: hit `/healthz` that returns 200 on healthy state.  
- **TCP probes**: open a socket, optionally send minimal payload, close.  
- **State machine**: `HEALTHY → UNHEALTHY` after N failures; `UNHEALTHY → HEALTHY` after successful probe.  
- **Routing**: use round‑robin or least‑connections only over healthy pool; keep a separate “blacklist” for unhealthy nodes.  
- **Observability**: expose `/metrics` (Prometheus) with counters per instance, latency of probes, and current health status.

Complexity is O(1) per probe, O(n) for initial scan. Trade‑offs: tighter intervals → faster failover but higher load; longer timeouts reduce false positives at cost of slower detection.

**Edge Cases**  
- **Transient network glitches** causing false negatives – mitigated by requiring consecutive failures.  
- **Backend slow to start** – allow a warm‑up period before first probe.  
- **Probe failure due to LB itself** – separate health check infrastructure (e.g., external watchdog).  
- **Security** – ensure probes don’t expose sensitive data; use TLS if needed.

**Optimize & Communicate**  
We could add adaptive probing: increase interval when all nodes are healthy, decrease when many failures. Also support “graceful drain” on unhealthy flag to finish in‑flight requests before dropping traffic. In an interview, I’d diagram the probe flow, state machine, and routing table updates, then discuss trade‑offs and monitoring strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
