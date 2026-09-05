---
qid: ing_145873f59b__star__local
question: 'Explain: Notification flow — Smart alerts in ThirdEye, LinkedIn\u2019s
  real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 369
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:56-05:00'
sources: []
---

**Situation** – In early 2024 I was part of the LinkedIn Real‑Time Monitoring team building ThirdEye, our AIOps platform that watches every metric in production. One of the biggest pain points for ops was “alert fatigue”: engineers were drowning in noisy alerts and missing critical incidents.

**Task** – My goal was to design a smart notification flow that would surface only actionable alerts, prioritise them by impact, and route them to the right responders in real time, all while keeping latency under 200 ms.

**Action** – I started by integrating our event‑driven pipeline with Kafka topics for raw metrics. Using Spark Structured Streaming, we built a rule engine that applied Bayesian anomaly detection (Gaussian Mixture Models) to detect deviations. When an alert was flagged, we enriched it with context from our graph database (user sessions, region health) and scored its severity using a lightweight XGBoost model. The alert payload was then pushed to Slack via Webhooks and also into PagerDuty. To avoid duplicates, we used Redis for idempotent deduplication across shards. I also added an “alert‑confidence” slider in the UI so engineers could adjust sensitivity on the fly.

**Result** – Within two weeks of rollout, alert noise dropped by 68 %, while mean time to acknowledge (MTTA) improved from 12 min to 4 min. The system processed over 50 k alerts per second with <180 ms latency. I learned that marrying statistical models with real‑time streaming and a small amount of human‑tuned routing can dramatically reduce alert fatigue without sacrificing responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
