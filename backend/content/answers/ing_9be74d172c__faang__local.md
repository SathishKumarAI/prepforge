---
qid: ing_9be74d172c__faang__local
question: What's on your dashboard for an LLM serving platform, and what do you alert
  on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 496
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:34-05:00'
sources: []
---

**Clarify**  
We’re monitoring a production LLM‑serving stack (model inference API, data pipelines, GPU/CPU nodes). I’d confirm the key SLAs: latency ≤ 200 ms, error rate < 0.1 %, availability 99.9 %. I’d also ask about model drift tolerance and regulatory constraints.

**Approach**  
Build a single‑pane dashboard that aggregates metrics from:
- **API layer** (request counts, latency percentiles, error codes)
- **Inference engine** (GPU utilization, queue depth, batch sizes)
- **Data pipelines** (ETL health, cache hit ratios)
- **Model health** (prediction confidence distribution, drift scores)

Add alerting on the most critical thresholds: latency spikes, error bursts, GPU saturation, and drift metrics.

**Depth**  
| Metric | Source | Alert Threshold |
|--------|--------|----------------|
| 99th‑pct latency | API gateway | > 200 ms (alert) |
| Error rate | API logs | > 0.1 % (critical) |
| GPU utilization | Node exporter | > 90 % (warning), > 95 % (critical) |
| Queue depth | Inference scheduler | > 50 requests (warning) |
| Drift score (e.g., KS test on logits) | Model monitor | > 0.2 (alert) |
| Cache hit ratio | Redis/Memcached metrics | < 70 % (alert) |

Use Prometheus/Grafana for real‑time plots; Alertmanager to trigger PagerDuty or Slack.

**Edge Cases**  
- Sudden traffic surge → queue backlog, latency spike.
- Model update rollout → drift spikes before fallback.
- Hardware failure → GPU metric drop, increased errors.
- Data pipeline outage → missing inputs → higher error rate.

Test by simulating load bursts, injecting model drift samples, and shutting down a node.

**Optimize & Communicate**  
Iterate thresholds based on observed noise (e.g., hysteresis). Add anomaly detection to reduce false positives. Explain trade‑offs: tighter latency alerts increase ops overhead; looser thresholds risk user churn. Present the dashboard design in a one‑pager for stakeholders, highlighting how each metric maps to business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
