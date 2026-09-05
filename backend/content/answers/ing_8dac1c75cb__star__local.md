---
qid: ing_8dac1c75cb__star__local
question: 'Explain: Alerts and Anomaly Detection — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 316
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:03-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the fraud‑monitoring pipeline was generating hundreds of false positives each day, clogging analysts’ queues and eroding trust in our alert system.

**Task:**  
I had to redesign the anomaly detection framework so that we could surface truly suspicious transactions while keeping latency under 200 ms per event and reducing alerts by at least 70%.

**Action:**  
I built a streaming architecture on Kafka + Flink, ingesting raw transaction streams. For each account I maintained a sliding window of the last 24 h and calculated dynamic baselines (mean ± 2σ) using online variance updates. I then fed these statistics into a lightweight Isolation‑Forest model trained on labeled historical fraud data; the model output a risk score that we thresholded at 0.85 to trigger an alert. To reduce noise, I added a Bayesian credibility filter that required two consecutive high‑score events before escalating. Alerts were routed through Grafana dashboards and Slack notifications, with A/B testing scripts to compare precision/recall.

**Result:**  
The new system cut false positives from ~450/day to 125/day (72% reduction) while maintaining a 94% true‑positive rate. Latency stayed below 180 ms per transaction. I learned that combining statistical baselines with lightweight ML and probabilistic filtering can yield production‑ready anomaly detection without heavy infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
