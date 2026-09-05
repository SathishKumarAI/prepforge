---
qid: ing_025aac74b4__star__local
question: 'Explain: Title: Building Production-Ready Probes For Gemini'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:01-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑native startup, we were integrating the new Gemini AI model into our customer support platform. The beta launch revealed that latency spikes during peak traffic caused SLA breaches, and our monitoring dashboards lacked granular insights into each inference path.

**Task** – I was tasked with designing production‑ready probes to surface real‑time performance metrics (latency, error rates, token usage) for Gemini endpoints, so the ops team could detect anomalies before they hit users.

**Action** – I built a lightweight instrumentation library in Go that wrapped Gemini’s gRPC client. Using OpenTelemetry, each request emitted spans with tags for model version, prompt length, and output tokens. I added a sidecar Prometheus exporter to expose counters and histograms, and configured Grafana dashboards with alert rules (e.g., 95th percentile latency > 350 ms). To keep overhead minimal, I used context propagation to tie traces across microservices and applied rate‑limiting on probe logs.

**Result** – After deployment, we reduced mean response time from 420 ms to 260 ms during peak hours and cut the 99th‑percentile latency by 30%. The new probes enabled proactive scaling decisions, and I documented a reusable “Gemini Probe Kit” that other teams adopted across services. This experience taught me how fine‑grained telemetry turns an opaque ML model into a measurable, reliable component of production infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
