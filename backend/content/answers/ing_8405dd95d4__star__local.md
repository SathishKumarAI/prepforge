---
qid: ing_8405dd95d4__star__local
question: Design the observability stack for a production LLM application. What does
  a good trace look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 359
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:26-05:00'
sources: []
---

**Situation** – At my last startup we launched a conversational AI that handled ~30,000 user requests per day. The first month the latency spiked to 2 s and the error rate hit 5%, so our product team flagged it as a production risk.

**Task** – I had to build an observability stack that would give us end‑to‑end visibility into request flow, detect bottlenecks, and provide actionable traces for engineers—all while keeping cost under $200/month.

**Action** – I chose OpenTelemetry for instrumentation because it integrates natively with our FastAPI service and the LLM inference engine. For tracing, I defined a span hierarchy: incoming HTTP → API gateway → tokenization → model inference → post‑processing. Each span logs tags like `request_id`, `model_version`, `input_length`, and `latency`. I set up Jaeger in a single‑node Docker deployment for local debugging and pushed traces to Tempo on Grafana Cloud for production. For metrics, I exported counters (`requests_total`, `errors_total`) and histograms (`response_latency_ms`) to Prometheus, visualized them in Grafana dashboards, and configured alerts when latency > 1 s or error rate > 2%.

**Result** – Within two weeks the average latency dropped from 2.0 s to 0.8 s, and errors fell below 0.5%. The trace structure let us pinpoint that a recent model update increased tokenization time by 120 ms; rolling back fixed it instantly. I learned that coupling fine‑grained spans with contextual tags turns raw telemetry into fast, actionable insights for LLM ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
