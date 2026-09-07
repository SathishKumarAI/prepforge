---
qid: ing_fc03847ccd__faang__local
question: 'Explain: Monitoring and Alerting — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 578
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:25:52-05:00'
sources: []
---

## 1️⃣ Clarify  
We need a system that **monitors ML model health** (latency, accuracy drift, resource usage) and **raises alerts** when thresholds are breached so ops can intervene.  
Assumptions:  
- Models are deployed behind an inference API; traffic is variable.  
- We have access to request/response logs, metric streams, and a notification channel (e.g., PagerDuty).  

## 2️⃣ Approach  
1. **Metric collection** – instrument the inference pipeline with Prometheus or OpenTelemetry exporters for latency, error rate, CPU/GPU usage, and domain‑specific scores.  
2. **Anomaly detection** – compute rolling statistics (EWMA, percentiles) and flag deviations beyond a configurable *confidence interval*.  
3. **Alerting policy** – use Alertmanager or PagerDuty rules:  
   - *SLO‑based*: e.g., 99th percentile latency > 200 ms for >5 min.  
   - *Drift detection*: model‑specific metrics (e.g., precision) falling below baseline by ≥10%.  
4. **Visualization & Ops** – Grafana dashboards; incident playbooks in Confluence.  

## 3️⃣ Depth  
- **Latency metric**: `histogram_quantile(0.99, sum(rate(latency_bucket[5m])) by (le))`.  
- **Accuracy drift**: compute ROC‑AUC on a rolling validation set or use *Population Stability Index* for feature distributions.  
- **Complexity**: O(N) per request for instrumentation; alert evaluation is O(1) per rule, scaling with number of rules (~hundreds).  
- **Trade‑offs**:  
  - High‑frequency metrics give finer granularity but increase storage.  
  - Statistical thresholds reduce noise but may miss sudden spikes; add a simple *threshold* fallback for latency spikes.

## 4️⃣ Edge Cases  
- Sudden traffic surge → false positives on latency; mitigate with a *traffic‑aware* baseline.  
- Model retraining updates the baseline; need a versioned drift model.  
- Alert storms from noisy metrics – implement *deduplication* and *alert suppression windows*.  

## 5️⃣ Optimize & Communicate  
- **Auto‑tune thresholds** using Bayesian optimization on historical incident data.  
- **Self‑healing hooks**: trigger auto‑scaling or fallback to a shadow model when alerts fire.  
- **Narration**: “We instrument every request, compute rolling percentiles, and raise an alert if the 99th percentile latency exceeds 200 ms for five minutes, ensuring ops see both performance and data‑quality signals in one dashboard.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
