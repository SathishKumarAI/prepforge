---
qid: ing_3b208734fd__fp__local
question: 'Explain: Span Processors — GitHub - Arize-ai/phoenix: AI Observability
  & Evaluation \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 366
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:10:31-05:00'
sources: []
---

**Span processors** are the bridge between a *tracing SDK* (the code that creates spans) and any *exporter* or *middleware* that consumes them—whether for storage, analysis, or real‑time alerts.  
At the heart of distributed tracing lies the problem of **coordinating asynchronous events**: a request may spawn dozens of micro‑services, each running on different machines and clocks. The SDK records spans locally; the exporter must later assemble these into coherent traces that respect causality and timing. Span processors solve this by providing two callback hooks:

1. `on_start(span)` – invoked immediately when a span is created, allowing in‑memory enrichment (e.g., adding metadata or sampling decisions).
2. `on_end(span)` – called just before the span is finished, giving the exporter a final chance to modify, filter, or forward the completed span.

This design mirrors **observer patterns** in software engineering but is tuned for *low‑latency*, *fault‑tolerant* streaming: processors can be stacked (e.g., a sampler followed by a logger) and each may run on its own thread or process. The separation of concerns ensures that the SDK remains lightweight while still enabling complex behaviors like adaptive sampling, correlation with metrics, or real‑time anomaly detection.

**Non‑obvious insight:**  
Because `on_end` runs *before* a span is flushed to an external system, it can **modify the span’s duration** or inject synthetic events. This capability lets observability tools retroactively correct clock skew or merge spans that were split across services, improving trace fidelity without changing application code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
