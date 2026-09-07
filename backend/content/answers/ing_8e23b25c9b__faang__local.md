---
qid: ing_8e23b25c9b__faang__local
question: 'Explain: Types of Health Checks — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 455
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:39-05:00'
sources: []
---

**Clarify**  
You’re asked to design the health‑check mechanism for a load balancer that fronts a cluster of web services. Clarify: *What metrics should we monitor?* *How often should checks run?* *What failure modes are acceptable?* Assume stateless HTTP(S) endpoints and multiple availability zones.

**Approach**  
1. **Probe Types** – health, readiness, liveness.  
2. **Check Frequency & Timeout** – short (200 ms) for responsiveness, longer (5–10 s) for recovery.  
3. **Circuit‑breaker logic** – 3 consecutive failures → mark unhealthy.  
4. **Graceful draining** – on transition to unhealthy, stop routing new traffic but allow in‑flight requests to finish.  
5. **Metrics & Alerting** – expose Prometheus metrics; trigger alerts on high failure rate.

**Depth**  
- *Health checks* hit a lightweight `/health` endpoint returning 200 when all dependencies are up.  
- *Readiness* verifies DB connection, cache, and any external APIs before admitting traffic.  
- *Liveness* is a simple ping or checksum to detect process hangs.  
- Load balancer maintains a per‑instance state machine; on failure it removes the instance from routing tables.  
- Use exponential back‑off for retries, ensuring no flapping.  
- Complexity: O(1) per check, negligible overhead.

**Edge Cases**  
- Network partitions causing false negatives → use multi‑AZ checks.  
- Stale metrics if a node reboots slowly → keep a “warm‑up” period before enabling traffic.  
- Bursty traffic that overwhelms the health endpoint – rate limit probes.

**Optimize & Communicate**  
Explain trade‑offs: tighter timeouts reduce latency but increase false positives; looser intervals improve stability at cost of slower failover. Emphasize observability—metrics, logs, and alerting—to justify design choices to stakeholders. This structured narrative demonstrates clear problem framing, systematic solution planning, deep technical insight, and awareness of operational nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
