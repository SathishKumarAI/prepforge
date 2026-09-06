---
qid: ing_8405dd95d4__think__local
question: Design the observability stack for a production LLM application. What does
  a good trace look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 760
total_tokens: 958
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:45:35-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Audience*: Engineers familiar with distributed tracing but new to LLM workloads.  
- *Production context*: Multi‑service (API gateway, inference server, datastore, monitoring).  
- *Observability goal*: Detect latency spikes, model drift, resource exhaustion, and security incidents.

**2️⃣ Adopt a layered mental model**  
1. **Infrastructure layer** – VMs/containers, networking, autoscaling.  
2. **Application layer** – request handling, tokenization, inference, post‑processing.  
3. **Data & ML layer** – embeddings, vector stores, training pipelines.  
4. **Observability plumbing** – tracing, metrics, logs, alerting.

Use the *OpenTelemetry* stack as a common language across layers.

**3️⃣ Reason step‑by‑step for a “good trace”**  

| Step | What to instrument | Key attributes | Why it matters |
|------|--------------------|-----------------|----------------|
| **1. API entry** | Gateway or API server | `trace_id`, `span_id`, `request_id`, `user_id` (PII‑redacted) | Root context for all downstream work. |
| **2. Auth & rate‑limit** | Auth service | `auth_status`, `rate_limit_remaining` | Early failure detection, abuse patterns. |
| **3. Tokenization** | NLP preprocessor | `token_count`, `batch_size` | Correlate token volume with latency. |
| **4. Inference call** | Model server (e.g., Triton) | `model_name`, `model_version`, `input_tokens`, `output_tokens`, `latency_ms`, `gpu_utilization` | Core performance metric; detect cold starts or GPU stalls. |
| **5. Post‑processing** | Generation formatter | `postproc_time_ms`, `response_length` | Capture overhead after inference. |
| **6. Persistence** | Vector store / DB | `db_write_latency`, `vector_dim` | Spot bottlenecks in storage layer. |
| **7. Response send** | API server | `http_status`, `bytes_sent` | Final user‑visible outcome. |

- **Correlation IDs**: All spans share the same `trace_id`.  
- **Timing granularity**: Use microsecond timestamps; avoid wall‑clock drift.  
- **Sampling strategy**: 100 % for error paths, 1–5 % for normal traffic, with adaptive rate‑limit.

**4️⃣ Common pitfalls to avoid**  
- *Missing context*: Not propagating `trace_id` across services leads to orphaned spans.  
- *Over‑instrumentation*: Logging every token can explode storage; focus on high‑level metrics.  
- *PII leakage*: Never log raw user prompts; hash or redact before tracing.  
- *Blind sampling*: Aggressive drop rates hide intermittent issues.

**5️⃣ Sanity‑check & communicate**  
1. **Visual check**: Trace should form a clean DAG, no cycles, minimal gaps.  
2. **Metric correlation**: Span times must align with Prometheus metrics (e.g., `request_latency_seconds`).  
3. **Alert linkage**: A trace that hits a high latency threshold should trigger an alert with the trace URL.  

When explaining to stakeholders, start with the *root cause* narrative: “A 2‑second request is dominated by a 1.8 s inference span; GPU utilization spikes at this point.” This concrete example demonstrates how the stack turns raw telemetry into actionable insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
