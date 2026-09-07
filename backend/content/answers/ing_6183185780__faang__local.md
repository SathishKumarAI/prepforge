---
qid: ing_6183185780__faang__local
question: How to view the health of a service? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 533
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:44-05:00'
sources: []
---

**Clarify**

> *Goal:* Monitor and quantify the “health” of a live leaderboard service that aggregates real‑time scores for millions of users.  
> **Assumptions to confirm:**  
> • Latency targets (e.g., ≤200 ms per update).  
> • Throughput (updates/sec, queries/sec).  
> • Data freshness requirement (max staleness).  
> • Critical failure modes (data loss vs. delayed updates).  

**Approach**

1. **Define KPIs** – latency, error rate, throughput, data freshness, consistency level.  
2. **Instrumentation** – instrument each micro‑service with Prometheus metrics, OpenTelemetry traces, and a log aggregator (ELK/Datadog).  
3. **Dashboard & Alerts** – Grafana dashboards per KPI; alert on thresholds (e.g., latency > 90th percentile > 300 ms).  
4. **Health API** – expose `/health` that aggregates metrics from internal probes (DB, cache, queue) and returns JSON health status.  

**Depth**

*Metrics:*  
- `leaderboard_update_latency_ms{partition=…}` → percentiles.  
- `leaderboard_error_rate_total{type="timeout"}`.  
- `queue_depth{service="updater"}`.  
*Tracing:* sample 1% of update requests; span includes DB write, cache invalidation, and push to pub/sub.  
*Alerting logic:*  
```yaml
groups:
- name: leaderboard
  rules:
  - alert: LatencySpike
    expr: histogram_quantile(0.99, sum(rate(leaderboard_update_latency_ms_bucket[5m])) by (le)) > 300
```
Complexity: O(log N) for rank queries; storage cost linear in users.

**Edge Cases**

- *Burst traffic:* back‑pressure via token bucket or Kafka consumer lag.  
- *Partial failures:* use retry with idempotent writes; circuit breaker to avoid cascading.  
- *Data drift:* monitor divergence between cache and DB snapshots.  

**Optimize & Communicate**

Explain that a layered observability stack (metrics + traces) gives both breadth and depth. Highlight trade‑offs: higher sampling → more data but better visibility, balanced against ingestion cost. Conclude by stressing the importance of automated dashboards so the ops team can detect issues before users notice, aligning with FAANG’s emphasis on reliability and proactive monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
