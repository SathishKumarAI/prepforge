---
qid: ing_a71e0c8a10__star__local
question: 'Explain: 2.1 Traffic Estimates — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 359
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:58-05:00'
sources: []
---

**Situation** – In my last role at a video‑streaming startup, our recommendation engine’s API was hit by a sudden spike during product launches. The latency jumped from 120 ms to over 800 ms and we started seeing a 15% drop in click‑through rates. The engineering manager asked me to design a traffic estimation module that would feed a load balancer so we could dynamically scale servers.

**Task** – I had to build an accurate, real‑time traffic estimator that could predict the next minute’s request rate within ±10%, integrate with our existing Nginx LB, and trigger autoscaling policies in Kubernetes without manual intervention.

**Action** – I collected historical request logs (≈ 5 M lines/day) and built a rolling window time series model using Prophet to capture daily/weekly seasonality. To keep latency low, I pre‑computed predictions every 30 s on an EC2 spot instance and exposed them via a lightweight REST endpoint. The LB was reconfigured to poll this endpoint and adjust the target group weights in AWS ALB accordingly. For edge cases, I added a safety buffer of +5% traffic and a fallback rule that capped scaling at twice the baseline.

**Result** – After rollout, we reduced peak latency from 800 ms to 150 ms, restored click‑through rates to pre‑spike levels, and cut hourly compute costs by 18%. I learned how statistical forecasting can be tightly coupled with infra automation to keep user experience stable during traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
