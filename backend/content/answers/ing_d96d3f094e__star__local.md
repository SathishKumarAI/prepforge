---
qid: ing_d96d3f094e__star__local
question: 'Explain: Uh, if things look good, then roll — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 352
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:34-05:00'
sources: []
---

**Situation** – When I joined the AdTech team, our recommendation engine was running on a monolithic batch pipeline that processed clicks every 12 hours. The latency hit our real‑time bidding window by 300 ms, and we were losing about 4 % of revenue per campaign.

**Task** – I needed to move the model inference from batch to an online serving layer so that predictions could be made in under 50 ms for each click while keeping training throughput unchanged. The goal was a seamless “roll‑out” with zero downtime and no loss of accuracy.

**Action** – First, I rewrote the inference code in C++ and wrapped it with TensorFlow Serving, exposing a gRPC endpoint that could be scaled via Kubernetes pods. I used feature flags to stage traffic: 5 % of clicks hit the new service while 95 % continued on the old pipeline. We monitored latency, CPU, and prediction accuracy in real time with Prometheus and Grafana dashboards. When the new path consistently stayed below 45 ms and maintained a 99.8 % F1 score, we performed a full traffic cutover.

**Result** – The new online system reduced per‑click latency from 300 ms to 35 ms, boosting overall click‑through revenue by 3.2 %. I learned that “if things look good, then roll” requires rigorous feature‑flag testing, real‑time observability, and a culture of incremental risk mitigation—principles that now guide every production ML deployment at Google.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
