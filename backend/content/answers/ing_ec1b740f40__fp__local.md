---
qid: ing_ec1b740f40__fp__local
question: 'Explain: Metrics — Pydantic Logfire: AI Observability for LLMs, Apps &
  RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 529
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:44-05:00'
sources: []
---

## Why we need *metrics* in AI observability

At its core an AI system is a **probabilistic engine** that maps inputs to outputs under uncertainty.  
The only way to judge whether it behaves “well” is to quantify the *distribution* of its internal states and predictions over time.  
Metrics are therefore the **statistics that compress this distribution into actionable numbers**: error rates, latency histograms, prompt‑usage counts, or confidence calibration curves.  
They must satisfy three principles:

1. **Causality** – each metric should be attributable to a single source (e.g., a specific LLM endpoint or RAG retrieval step).  
2. **Observability** – it has to be computable from logs without re‑running the model, which means we rely on *structured log records* rather than raw traces.  
3. **Interpretability** – the metric should map cleanly onto business objectives (e.g., SLA compliance or cost per inference).

## Pydantic + Logfire: the engineering glue

- **Pydantic** gives us a type‑safe schema for every log event, ensuring that every field required by a metric is present and correctly typed.  
- **Logfire** streams those events to a backend (e.g., Loki or OpenTelemetry) where they can be aggregated in real time.

The combination yields *metric pipelines*:

| Metric | Source | Transformation |
|--------|--------|----------------|
| `inference_latency` | `InferenceRequest.duration_ms` | histogram |
| `prompt_error_rate`  | `InferenceResponse.error == true` | ratio |
| `retrieval_quality`  | `RAGResult.score` | average |

Because every log record is a Pydantic model, we can **derive metrics declaratively** by composing simple aggregations over the schema—no ad‑hoc parsing, no risk of missing fields.

## Non‑obvious insight

Most people treat metrics as *endpoints* that report on performance.  
In practice, they are *constraints*: each metric enforces a structural property (e.g., “all inference events must carry a `model_id`”).  
By designing the schema first, we guarantee that every metric has an unbroken lineage back to the source code, eliminating blind spots and making drift detection—when a new field is omitted or renamed—automatic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
