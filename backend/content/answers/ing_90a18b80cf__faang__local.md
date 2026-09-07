---
qid: ing_90a18b80cf__faang__local
question: 'Explain: Observability — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 438
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:36-05:00'
sources: []
---

**Observability in a Machine‑Learning Service (HTTP/HTTPS & System Design)**  

| Step | What to Cover |
|------|---------------|
| **Clarify** | *Restate*: “We need to expose observability for an ML inference API over HTTP/HTTPS so that ops can monitor latency, errors, and model health.” <br>*Assumptions*: stateless REST endpoints, autoscaling pods, metrics already emitted via Prometheus. |
| **Approach** | 1. Instrument request handling (latency, status codes). <br>2. Collect internal telemetry (GPU utilization, memory, queue depth). <br>3. Push to a time‑series store; expose `/metrics` endpoint for Prometheus. <br>4. Add structured logs and distributed tracing (OpenTelemetry). |
| **Depth** | • **Metrics**: `http_request_duration_seconds`, `inference_success_total`, `model_version_current`. <br>• **Tracing**: span tags (`model_id`, `user_id`). <br>• **Alerting**: threshold on latency > 200 ms or error rate > 5%. Complexity is O(1) per request; storage cost linear in number of endpoints. |
| **Edge Cases** | • Model reload causing transient errors → log “reloading” state.<br>• Zero‑downtime version rollout → tag metrics by `model_version`. <br>• High concurrency spikes → ensure rate‑limiting doesn’t mask real latency. |
| **Optimize & Communicate** | *Improvements*: use async instrumentation, batch metric pushes to reduce overhead; cache model metadata to avoid DB hits. Explain trade‑offs: richer tracing increases CPU usage vs higher observability. End with a concise diagram of request → API gateway → inference service → metrics collector → Prometheus + Grafana dashboard. |

This structure shows clear problem framing, a systematic solution path, deep technical detail, edge‑case awareness, and an eye toward production trade‑offs—all key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
