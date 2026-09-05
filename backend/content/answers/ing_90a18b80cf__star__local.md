---
qid: ing_90a18b80cf__star__local
question: 'Explain: Observability — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:03-05:00'
sources: []
---

**Situation:** In my last role I was tasked with redesigning the API gateway for a fintech platform that had been experiencing intermittent latency spikes during peak trading hours, causing SLA breaches and customer complaints.

**Task:** My goal was to build an observability framework that could pinpoint whether the bottlenecks were in the HTTP/HTTPS layer, upstream services, or infrastructure, and to provide real‑time alerts before customers noticed any degradation.

**Action:** I introduced a layered telemetry strategy: first, I added structured request tracing with OpenTelemetry on each microservice, capturing span IDs, latency, error codes, and TLS handshake durations. Next, I deployed Prometheus exporters that scraped per‑endpoint metrics—request counts, 5xx rates, RTTs—and pushed them to Grafana dashboards. For HTTPS specifics, I instrumented the Nginx reverse proxy to log cipher suite usage and session resumption stats, then used Loki to aggregate logs for anomaly detection. Finally, I set up Alertmanager rules that triggered when average RTT exceeded 200 ms or 5xx rate surpassed 1%, feeding notifications into PagerDuty.

**Result:** Within two weeks of rollout, we reduced mean latency from 350 ms to 190 ms during peak periods and cut 5xx incidents by 78%. The team now has a clear, end‑to‑end view of HTTP/HTTPS performance, enabling proactive maintenance. I learned that combining distributed tracing with metric dashboards gives the most actionable insight into layered systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
