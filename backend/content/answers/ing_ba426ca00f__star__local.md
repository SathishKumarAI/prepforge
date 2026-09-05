---
qid: ing_ba426ca00f__star__local
question: 'Explain: Interview questions — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:41-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a recommendation engine that was pulling data from three micro‑services. After the first week of production, our A/B test showed a 12 % drop in click‑through rate compared to the legacy system, and the engineering team couldn’t pinpoint why.

**Task:**  
I had to set up end‑to‑end evaluation and observability so we could identify performance bottlenecks, data drift, and model degradation before the next sprint.

**Action:**  
First, I instrumented the inference pipeline with OpenTelemetry, adding custom spans for each micro‑service call and a metric that logged feature vector similarity. Then, using Prometheus + Grafana, I built dashboards to visualize latency distributions, error rates, and feature drift scores (KL‑divergence). For evaluation, I created a “model monitor” script that ran every hour against a holdout validation set, calculating precision@k and reporting any drop > 5 % to Slack. Finally, I automated alerts in Alertmanager for thresholds on latency (>200 ms) and drift (>0.1), so the ops team could react instantly.

**Result:**  
Within 48 hours we discovered a stale feature cache causing 30 % longer inference times and an emerging distribution shift in user profiles. After patching the cache and retraining with fresh data, click‑through rates rebounded to +3 % over baseline, latency dropped to <120 ms, and we reduced model‑related incidents by 70 %. I learned that coupling real‑time observability with automated evaluation is essential for maintaining AI system health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
