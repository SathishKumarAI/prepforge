---
qid: ing_69e1fef676__faang__local
question: 'Explain: Add monitoring and alerting — ''10 Principles for Building Resilient
  Payment Systems'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 540
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:00-05:00'
sources: []
---

**Clarify**  
The interviewer wants a brief yet structured explanation of how to add monitoring & alerting to a payment system, framed around the “10 Principles for Building Resilient Payment Systems.” I’ll assume we’re dealing with an online payments platform that must handle high traffic, low latency, and regulatory compliance.  

**Approach**  
1. Map each principle to observable metrics.  
2. Deploy instrumentation (tracing, logs, counters).  
3. Define alert thresholds & escalation paths.  
4. Use a monitoring stack (Prometheus + Grafana or Datadog) with anomaly detection.  

**Depth**  

| Principle | Metric(s) | Alert |
|-----------|-----------|-------|
| **Availability** | Uptime %, request latency, 5xx rate | >1 % error in 15‑min window |
| **Performance** | Avg/95th percentile latency, GC pause | Latency > 200 ms for 90 % of requests |
| **Consistency** | Transaction isolation violations, duplicate charges | Any duplicate detected |
| **Security** | Failed auth attempts, PCI DSS scans | >10 failed logins in 5 min |
| **Scalability** | Queue depth, CPU/RAM saturation | Queue > 5000 messages |
| **Observability** | Traces per region, error logs | Trace loss > 2 % |
| **Compliance** | Data retention audit failures | Any non‑compliant log |
| **Recovery** | Failover success rate, backup integrity | Failover failure in <30 s |
| **Resilience** | Circuit breaker trips | >3 consecutive tripping events |
| **Governance** | Change‑impact metrics (deployment frequency vs incidents) | Incident > 5 min after deployment |

Use *alert‑as‑code* (e.g., Prometheus Alertmanager rules), auto‑scaling, and runbooks.  

**Edge Cases**  
- Sudden traffic spikes causing false positives; mitigate with smoothing windows.  
- Distributed outages where metrics lag; use cross‑region correlation.  
- Insider tampering with monitoring data; secure dashboards with RBAC.

**Optimize & Communicate**  
Start with a minimal viable set (latency, error rate, duplicate charges) then iterate to cover all principles. Explain trade‑offs: tighter thresholds reduce downtime but increase noise. Use clear visual dashboards and concise incident summaries to keep stakeholders informed. This structured plan showcases problem‑solving, technical depth, and communication—key FAANG scoring signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
