---
qid: ing_afc6b1c9ef__star__local
question: 'Explain: :star: Driver Match algo — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 273
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:37-05:00'
sources: []
---

**Situation:** While leading a product team at a ride‑hailing startup, we noticed our surge pricing model was inflating wait times by ~15% during peak hours, hurting driver earnings and rider satisfaction.

**Task:** I had to design a driver‑match algorithm that balanced supply with demand in real time, minimizing idle time while ensuring drivers stayed within their preferred zones.

**Action:** First, I built a spatio‑temporal graph using Apache Flink, mapping driver locations, ETA, and ride requests. I integrated a reinforcement learning policy (DQN) that learned optimal assignment rewards based on historical pickup success rates and driver retention metrics. We used Redis for low‑latency state storage and deployed the model as a microservice in Kubernetes with auto‑scaling. To validate, we ran A/B tests against our legacy rule‑based matcher, collecting KPI dashboards via Grafana.

**Result:** The new algorithm cut average rider wait time by 22% during peak periods and increased driver earnings by 12%, while reducing churn by 4%. It also proved adaptable to sudden demand spikes, a key insight for scaling future market expansions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
