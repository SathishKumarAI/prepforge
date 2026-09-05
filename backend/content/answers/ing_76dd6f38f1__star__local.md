---
qid: ing_76dd6f38f1__star__local
question: 'Explain: Any Language via OpenTelemetry — Pydantic Logfire: AI Observability
  for LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 313
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:42-05:00'
sources: []
---

**Situation**  
When our product team launched a new chatbot that combined multiple language models and retrieval‑augmented generation (RAG), we hit a wall: the latency spike in some user queries was unpredictable, and debugging was impossible because each model call lived in its own microservice with different logging formats.

**Task**  
I had to build an end‑to‑end observability pipeline that could trace every request across services, log structured telemetry from the LLMs, and surface actionable insights without adding latency or breaking compliance.

**Action**  
I chose OpenTelemetry for distributed tracing and Prometheus for metrics. For logs I wrapped Pydantic models with Logfire so each inference event emitted a JSON record containing model name, prompt length, token usage, and response time. I instrumented the RAG pipeline in FastAPI, added a custom exporter that sent traces to Jaeger, and used Grafana dashboards to correlate latency spikes with specific model calls. To keep overhead low, I enabled sampling at 10% for non‑critical requests and used context propagation via HTTP headers.

**Result**  
The new observability stack cut debug time from hours to minutes; we reduced average response latency by 18 % after tuning the slowest model, and identified that a recent update to Model‑B was inflating token counts. I learned how to marry structured logs with tracing so every AI request becomes a first‑class citizen in our monitoring ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
