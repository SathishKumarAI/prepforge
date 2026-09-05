---
qid: ing_261b25dc5f__star__local
question: 'Explain: Monitoring — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 368
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:12-05:00'
sources: []
---

**Situation** – At my previous company we were scaling a real‑time analytics platform that ingested sensor data from thousands of IoT devices over the last year. The latency dropped from 120 ms to nearly 300 ms during peak traffic, and our SLA for downstream dashboards slipped past the 99th percentile threshold.

**Task** – I was tasked with designing a monitoring layer that could differentiate packet loss, delay, and jitter for both TCP‑based control channels and UDP‑based telemetry streams, so we could pinpoint whether congestion or protocol choice caused the slowdown.

**Action** – I built an instrumentation module in Go using Prometheus exporters. For TCP I tracked retransmission counts, round‑trip times (RTT), and congestion window size via libpcap hooks. For UDP I added sequence‑number checksums to detect out‑of‑order packets and calculated jitter from inter‑arrival times. The metrics were aggregated into Grafana dashboards with alerts triggered when RTT > 200 ms or packet loss > 2%. I also introduced a lightweight sidecar that could switch telemetry from UDP to TCP in high‑loss scenarios, trading bandwidth for reliability.

**Result** – After deploying the system, we reduced median latency by 70 % and brought SLA compliance back above 99.9 %. The dual‑protocol monitoring gave us actionable insights: we capped UDP packet loss at <1 % during peak hours, while keeping TCP retransmissions below 0.5 %. I learned that protocol‑aware metrics are essential for diagnosing distributed network bottlenecks, and that a flexible fallback strategy can reconcile performance with reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
