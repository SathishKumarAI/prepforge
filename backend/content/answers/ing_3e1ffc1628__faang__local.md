---
qid: ing_3e1ffc1628__faang__local
question: What is distributed tracing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 472
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:38-05:00'
sources: []
---

**Clarify**  
Distributed tracing is a technique to observe requests as they traverse multiple services in a micro‑service or cloud‑native architecture. It captures the path, timing, and metadata of each span (a unit of work) so that we can reconstruct end‑to‑end latency and pinpoint failures.

**Assumptions / Clarifications**  
- The system is composed of stateless services communicating over HTTP/GRPC/Kafka.  
- We have a central collector (e.g., Jaeger, Zipkin) and an instrumentation library in each service.  
- Correlation IDs propagate via headers or context objects.

**Approach**  
1. **Instrument** every entry point to generate a trace ID and span ID; add parent‑child relationships.  
2. **Propagate** the IDs through outgoing calls (HTTP header, gRPC metadata).  
3. **Record** timestamps, duration, tags, and logs at each span’s start/end.  
4. **Export** spans asynchronously to a collector for aggregation and visualization.

**Depth**  
- *Trace ID*: 128‑bit unique identifier per request.  
- *Span ID*: 64‑bit, linked to parent via `parent_span_id`.  
- *Events* include service name, operation, status code, error flag.  
- Complexity: O(1) per span; overall latency overhead ~10–20 µs depending on instrumentation.

**Edge Cases**  
- Network partitions causing missing spans → use timeout and fallback logging.  
- High throughput leading to collector overload → batch export or sampling.  
- Correlation header tampering → validate format, reject malformed traces.

**Optimize & Communicate**  
- **Sampling**: Reduce load by probabilistically dropping low‑impact traces while retaining hot paths.  
- **Context propagation**: Use context‑propagation libraries (OpenTelemetry) to avoid manual header handling.  
- **Visualization**: Show latency heatmaps and dependency graphs to surface bottlenecks quickly.

This structured view satisfies the FAANG interview style: we restated the problem, mapped assumptions, laid out a clear plan, detailed implementation nuances, considered edge cases, and discussed optimizations—all within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
