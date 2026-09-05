---
qid: ing_082c633eec__star__local
question: 'Explain: Metrics, SLOs, and the throughput - latency curve'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 394
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:08-05:00'
sources: []
---

**Situation** – In my last role I was leading the upgrade of our recommendation engine’s inference pipeline. The production traffic had jumped from 50k to 250k requests per minute and we were seeing a 12 % drop in conversion rates, which traced back to latency spikes during peak hours.

**Task** – My goal was to redesign the system so that the average request latency stayed below 200 ms while still handling the higher throughput without violating our SLA of 99.5 % availability for end‑to‑end requests.

**Action** – I started by defining clear metrics: *throughput* (requests per second), *latency percentiles* (P95, P99), and *error rate*. I set an SLO that required 90 % of requests to finish under 150 ms. Using Prometheus and Grafana, I instrumented the pipeline and built a real‑time dashboard. To balance throughput and latency, I introduced horizontal scaling with k8s autoscaling based on CPU and memory usage, and applied rate limiting via Envoy’s traffic shaping policy. I also experimented with model quantization to reduce inference time, trading off a 1 % loss in accuracy for a 30 % speed gain.

**Result** – After the rollout, we achieved an average latency of 138 ms (P99 at 195 ms) while increasing throughput from 300 to 750 RPS. Conversion rates rebounded by 8 %, and the system now meets its SLO with a buffer for future growth. This experience reinforced that precise metrics and well‑defined SLOs are essential for navigating throughput–latency trade‑offs in production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
