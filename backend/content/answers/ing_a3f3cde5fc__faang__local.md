---
qid: ing_a3f3cde5fc__faang__local
question: 'Explain: Monitoring and Alerting — A Cheat Sheet for Designing Fault-Tolerant
  Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 594
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:31-05:00'
sources: []
---

## Clarify  
We’re asked to outline a *cheat‑sheet* for monitoring/alerting in fault‑tolerant ML systems.  
Assumptions:  
- The system exposes metrics, logs and traces (e.g., Prometheus, ELK).  
- Alerts must be actionable, not noise‑driven.  
- Stakeholders include data scientists, infra ops, and business owners.

## Approach  
1. **Define health dimensions** (latency, accuracy drift, resource usage, data quality).  
2. **Collect & normalize metrics** per component (model serving, feature store, pipeline).  
3. **Set thresholds**: static baselines + dynamic anomaly detection.  
4. **Alert hierarchy**: critical → warning → info; include remediation steps.  
5. **Automate response** where possible (autoscaling, retraining triggers).  
6. **Continuous feedback loop**: refine alerts with post‑mortems.

## Depth  
| Dimension | Typical Metric | Threshold Strategy |
|-----------|----------------|--------------------|
| Latency   | `request_latency_ms` | 95th percentile > 200 ms → warning; > 500 ms → critical |
| Accuracy  | `model_auc` | ΔAUC < -0.02 over 1 h → alert |
| Resource  | `cpu_usage_pct`, `memory_mb` | > 80 % CPU for >5 min → auto‑scale |
| Data Quality | `missing_value_ratio`, `outlier_rate` | > 10 % missing → critical |
| Log Errors | `error_rate_per_min` | > 1 error/min → alert |

Use **Prometheus Alertmanager** with routing rules, and **Grafana dashboards** for visualization. Implement *SLOs* (e.g., 99.5 % availability) and derive *SLIs* from the metrics above.

## Edge Cases  
- **Cold start spikes**: treat as transient; suppress alerts for first 10 min.  
- **Model version drift**: multiple models co‑running—track per‑model metrics separately.  
- **Feature store outages**: fallback to cached features; alert only if cache miss > threshold.

## Optimize & Communicate  
- **Noise suppression**: use *rate* and *aggregation* functions (`avg_over_time`, `sum_over_time`).  
- **Auto‑remediation**: trigger a lightweight retrain job on accuracy drift.  
- **Documentation**: maintain an “Alert Playbook” with runbooks for each critical alert.  

By structuring monitoring around health dimensions, normalizing metrics, and tying alerts to actionable thresholds, we create a fault‑tolerant ML stack that balances resilience with operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
