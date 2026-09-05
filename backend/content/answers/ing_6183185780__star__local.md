---
qid: ing_6183185780__star__local
question: How to view the health of a service? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 375
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:04-05:00'
sources: []
---

**Situation:**  
When I joined the data‑science team at a fintech startup, we built an online leaderboard that ranked credit‑risk models for each quarter. The production service was receiving over 10 k inference requests per minute, and a sudden spike in latency caused our compliance score to drop by 3 points—customers started abandoning the platform.

**Task:**  
I had to design a real‑time health dashboard that could surface latency, error rates, model drift, and resource utilization so we could react before the metrics hit critical thresholds.

**Action:**  
I wired Prometheus exporters into each inference container, exposing per‑model request counts, 95th‑percentile latencies, and CPU/memory usage. For drift I added a Kafka stream that ingested the last 100 k predictions and ran an online Kolmogorov–Smirnov test against the training distribution; results were pushed to Grafana via InfluxDB. Alerts were defined in Alertmanager: >200 ms latency, >1% error rate, or drift p‑value <0.01 triggered a Slack notification. I also added a “model health” API that returned these metrics so the leaderboard UI could show live status icons.

**Result:**  
After deployment, we reduced mean inference latency from 350 ms to 180 ms within 48 h by auto‑scaling pods based on the dashboard data. The alerting system prevented any further compliance score drops; our quarterly KPI improved by 4 points. I learned that coupling lightweight statistical monitoring with standard observability tools gives a clear, actionable view of ML service health without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
