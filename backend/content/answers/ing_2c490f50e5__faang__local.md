---
qid: ing_2c490f50e5__faang__local
question: 'Explain: OpenTelemetry Support — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 416
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:26:05-05:00'
sources: []
---

**OpenTelemetry in SigStore’s Model‑Transparency Project**

| Stage | What I’d do |
|-------|-------------|
| **Clarify** | *Problem:* How does the `sigstore/model-transparency` repo use OpenTelemetry to trace supply‑chain events for ML models?  Confirm we’re talking about observability of model ingestion, signing, and distribution pipelines. |
| **Approach** | 1️⃣ Identify key spans: upload, verification, audit log writes.<br>2️⃣ Instrument each microservice with OTEL SDK (Java/Python).<br>3️⃣ Export traces to a collector (e.g., Jaeger) and metrics to Prometheus. |
| **Depth** | - **Instrumentation:** Use `@opentelemetry/instrumentation-http` for REST calls, `@opentelemetry/instrumentation-aws-sdk` if on AWS.<br>- **Context propagation:** Ensure trace IDs survive across gRPC/HTTP boundaries (W3C Trace Context).<br>- **Security:** Mask PII in attributes; use sampling to keep volume manageable. Complexity: O(1) per request for span creation, but overall throughput depends on exporter bandwidth. |
| **Edge Cases** | - Network partitions causing lost spans → fallback to buffered storage.<br>- High‑latency services: adjust timeout so trace isn’t aborted prematurely.<br>- Multiple versions of the same model: use a deterministic `model_id` attribute for deduplication. |
| **Optimize & Communicate** | • Use batch exporting and compression to reduce overhead.<br>• Leverage *semantic conventions* (e.g., `service.name`, `component`) for consistent dashboards.<br>• Present findings in a concise slide deck: architecture diagram, sample trace, key metrics. This shows I can architect observability end‑to‑end while keeping performance and security in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
