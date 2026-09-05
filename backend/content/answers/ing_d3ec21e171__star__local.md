---
qid: ing_d3ec21e171__star__local
question: 'Explain: Telemetry — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 345
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:26-05:00'
sources: []
---

**Situation:** While leading the deployment of a recommendation engine for an e‑commerce client, we noticed that model drift was causing a sudden drop in click‑through rates from 12% to 7%. The production pipeline ran on Kubernetes and used Arize‑Phoenix for observability.

**Task:** I had to set up comprehensive telemetry so we could detect performance regressions early, isolate the cause, and roll out fixes without impacting uptime.

**Action:** First, I instrumented our inference service with OpenTelemetry exporters pointing to Phoenix’s ingest endpoint. We collected per‑request metrics (latency, error rate) and model‑level data (predicted scores, feature distributions). Using Phoenix’s schema‑based dashboards, we defined alert rules that fired when the mean absolute error exceeded 0.02 or the score distribution shifted beyond a Kolmogorov–Smirnov threshold of 0.1. I also added a “shadow” mode where new model predictions were logged but not served, enabling A/B testing against the live model without risk.

**Result:** Within 48 hours we identified that a feature scaling bug was inflating scores for high‑price items. After patching and redeploying, click‑through rates rebounded to 11.8% and latency dropped by 15%. The telemetry framework now provides real‑time alerts and historical trend analysis, reducing our mean time to recovery from days to hours. I learned that a robust, end‑to‑end observability stack is essential for maintaining model health in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
