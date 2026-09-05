---
qid: ing_b0ce670e9f__star__local
question: What are OpenTelemetry's GenAI semantic conventions, and why should you
  care?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 320
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:26-05:00'
sources: []
---

**Situation**  
While leading the observability upgrade for our SaaS platform, we noticed that the new AI‑powered recommendation engine was generating a surge of unstructured logs and metrics, making it hard to correlate performance with model inference latency.

**Task**  
I had to standardize how GenAI telemetry—like prompt tokens, completion tokens, and response times—was exported so the team could monitor, debug, and optimize the AI workload across environments.

**Action**  
I introduced OpenTelemetry’s GenAI semantic conventions. First, I mapped our existing custom attributes (e.g., `ai.model.name`, `ai.input.tokens`) to the official keys (`gen_ai.request.id`, `gen_ai.response.time`). Then, using the OTLP exporter and a Python instrumentation hook, I instrumented the inference pipeline so every request emitted a `GenAIRequest` span with context propagation. I also added custom metrics for token usage and latency thresholds, publishing them to Prometheus and Grafana dashboards.

**Result**  
Within two weeks we achieved 30 % faster root‑cause analysis on model stalls, cut down alert noise by 25 %, and enabled cross‑team visibility into AI costs (tokens per dollar). The conventions also paved the way for automated compliance reporting. I learned that adopting a shared telemetry standard not only unifies observability but also unlocks actionable insights across ML ops teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
