---
qid: ing_ed4ef5a9f6__faang__local
question: 'Explain: Measuring Availability — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 488
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:52:06-05:00'
sources: []
---

**Clarify**  
We’re asked how a system designer would *measure* the **availability** of an AI‑based service (e.g., inference API). Key assumptions: we have a defined SLAs (e.g., 99.9 % uptime), traffic is load‑balanced across stateless nodes, and metrics can be collected in real time.

**Approach**  
1. Define the *availability metric*:  
   \[
   A = \frac{\text{time service is reachable}}{\text{total monitoring interval}}
   \]
2. Instrument health probes (e.g., `/healthz`) on every node and an external “watchdog” that pings the public endpoint.  
3. Use a time‑series database (Prometheus/InfluxDB) to store probe results, aggregating per minute/hour.  
4. Compute uptime over 1 day, 7 days, 30 days windows; flag breaches against SLA thresholds.

**Depth**  
- **Probe frequency**: 10 s interval → resolution ≈ 0.17 % for a 99.9 % target.  
- **Aggregation**: For *N* nodes, availability = (Σ uptime_i) / (N × interval).  
- **Failure detection**: If ≥ 3 consecutive failures on the same node → mark node down; if > 20 % nodes down → mark service unavailable.  
- **Complexity**: O(N) per probe cycle; storage ~O(total probes).  
- **Trade‑offs**: Higher frequency increases overhead but improves detection latency.

**Edge Cases**  
- Network partitions causing intermittent probe failures.  
- Draining nodes during rolling updates may falsely flag downtime—handle with a grace period.  
- Clock skew between monitoring agents → use NTP/chrony.

**Optimize & Communicate**  
To reduce noise, implement *exponential back‑off* on transient failures and *alert suppression* (e.g., silence alerts if uptime > 99.95 % for 24 h). Explain that we’ll visualize the metric in Grafana dashboards and tie it to a PagerDuty escalation policy. This systematic pipeline ensures accurate availability measurement, rapid incident response, and clear communication with stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
