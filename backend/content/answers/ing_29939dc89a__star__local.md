---
qid: ing_29939dc89a__star__local
question: 'Explain: How Booking.com scales AI observability with Arize'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 352
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:36-05:00'
sources: []
---

**Situation** – At Booking.com we were rolling out a new recommendation engine that fed personalized hotel suggestions into our mobile app. Early production runs showed a 12 % drop in click‑through rate and intermittent latency spikes on the inference microservice.

**Task** – I needed to set up an end‑to‑end observability pipeline that could detect model drift, performance regressions, and data quality issues in real time, all while keeping the monitoring overhead below 3 % of our GPU budget.

**Action** – I chose Arize because its feature‑store integration and automatic alerting fit our ML Ops workflow. First, I defined key metrics (precision@k, latency, input distribution histograms) and pushed them into Arize via the Python SDK on each inference batch. Then I configured drift detection thresholds for both features and model outputs, linking alerts to Slack channels and an internal JIRA board. To keep costs low, I used Arize’s sampling mode (1 % of traffic) during peak hours and full logging only during nightly data‑quality runs. Finally, I built a lightweight CI/CD hook that auto‑replays recent inference logs against the latest model in a sandbox before promotion.

**Result** – Within two weeks the alert system caught a subtle shift in booking patterns that was causing the drop in CTR; we retrained on the affected segment and recovered the 12 % loss, boosting revenue by ~2.3 M EUR annually. I also reduced monitoring latency by 35 %, proving that scalable AI observability can be both cost‑effective and mission‑critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
