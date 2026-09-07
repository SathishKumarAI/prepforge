---
qid: ing_abf7ad2c85__faang__local
question: 'Explain: Keep reading — What is Distributed tracing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 423
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:52-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *distributed tracing*—the technique used in micro‑service architectures to track a request as it flows across multiple services, components, or nodes.

**Approach**  
1. Define the core concept (trace, span, context).  
2. Explain how identifiers propagate via headers.  
3. Mention typical tooling and use cases (latency, debugging, observability).  
4. Touch on implementation patterns and trade‑offs.

**Depth**  
Distributed tracing instruments each service to create a *span* containing metadata: start/end timestamps, operation name, status code, and key tags (e.g., user ID). A trace is a tree of spans linked by a *trace ID*. The parent‑child relationship is established via a *parent span ID*. Context propagation occurs through HTTP headers (`X-Request-ID`, `Traceparent` in W3C TraceContext) or messaging queues. Aggregated traces are sent to backends (Jaeger, Zipkin, OpenTelemetry Collector), where they’re visualized as timelines or call graphs. This enables latency analysis, error pinpointing, and SLA monitoring.

**Edge Cases**  
- *Missing instrumentation*: spans may be incomplete; fallback to sampling.  
- *High cardinality tags*: can bloat storage—use selective tagging.  
- *Clock skew*: local timestamps misalign; use monotonic clocks or propagate a single timestamp source.

**Optimize & Communicate**  
To improve performance, sample traces (e.g., 1 % of traffic) and buffer spans before shipping. Emphasize that tracing is orthogonal to logging: it captures flow, while logs capture state. When explaining, start with the “why” (debugging latency), then “what” (spans/trace IDs), and finish with “how” (headers, collectors). This structure mirrors FAANG interview expectations for clarity, depth, and pragmatic trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
