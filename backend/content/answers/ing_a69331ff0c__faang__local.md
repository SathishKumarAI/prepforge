---
qid: ing_a69331ff0c__faang__local
question: 'Q30: How do you implement observability for LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 499
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:16-05:00'
sources: []
---

**Clarify**  
We need a runtime‑level observability strategy for large language model (LLM) services that lets us monitor correctness, latency, resource usage, and safety violations. Assumptions: the LLM runs behind an API gateway, can be scaled horizontally, and we have access to logs, metrics, traces, and policy enforcement hooks.

**Approach**  
1. **Instrumentation layer** – wrap every request/response with a context that records start time, user ID, model version, prompt token count, and output token count.  
2. **Distributed tracing** – use OpenTelemetry to propagate trace IDs through the pipeline (gateway → inference node → post‑processor).  
3. **Structured logging** – emit JSON logs containing request/response snippets, safety flag scores, and anomaly indicators.  
4. **Metrics collection** – expose Prometheus metrics for latency percentiles, token throughput, GPU/CPU utilization, and safety violation counts.  
5. **Safety & bias alerting** – hook into the model’s content filter to emit alerts when thresholds are crossed; store flagged outputs in a “red‑team” queue.  
6. **Feedback loop** – ingest user feedback (e.g., thumbs‑down) to adjust sampling weights or trigger retraining.

**Depth**  
- Traces give micro‑second granularity on token generation latency; we aggregate per endpoint and model version.  
- Metrics use histogram buckets for token rates, allowing 95th percentile latency alerts at ~200 ms.  
- Logs are rotated nightly; a sidecar parses them into an Elasticsearch cluster for full‑text search of problematic prompts.  
- Safety scores are stored in Redis with TTL to enable quick lookups during inference.

**Edge Cases**  
- Cold starts: instrument cache misses and initial GPU spin‑up times.  
- Adversarial prompts that trigger infinite loops—detect via token count ceilings.  
- Multi‑tenant environments: enforce per‑tenant isolation of metrics.

**Optimize & Communicate**  
Start with a lightweight OpenTelemetry SDK; later, batch trace spans to reduce overhead. Communicate the observability stack diagram during interviews, emphasizing how each component feeds into alerting and continuous improvement cycles. This structured plan shows clear problem framing, technical depth, and scalability considerations—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
