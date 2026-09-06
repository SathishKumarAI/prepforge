---
qid: ing_a69331ff0c__think__local
question: 'Q30: How do you implement observability for LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 513
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:04:02-05:00'
sources: []
---

**1️⃣ Clarify & Scope**  
   * Ask whether “observability” refers to monitoring, logging, tracing, or all three.  
   * Confirm the target LLM stack (OpenAI API, Hugging Face, custom inference server).  
   * Note constraints: latency budgets, privacy of user prompts, cost of instrumentation.

**2️⃣ Mental Model**  
   * Treat observability as a 3‑layer pyramid: **Metrics → Logs → Traces**.  
   * View each layer as a lens: metrics give health signals; logs provide context; traces reveal causal chains.  
   * Map LLM ops to common observability patterns (e.g., request–response, batch jobs).

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Define KPIs** – latency, throughput, error rate, token usage cost, hallucination frequency.  
   2. **Instrument metrics** – expose counters/latency histograms per endpoint or per model version.  
   3. **Add structured logs** – include request ID, prompt hash, user context (redacted), model name, output length.  
   4. **Implement distributed tracing** – propagate trace IDs through API calls and inference pipelines; record span durations for token generation steps.  
   5. **Integrate with a stack** – e.g., Prometheus + Grafana for metrics, Loki/ELK for logs, OpenTelemetry for traces.  
   6. **Automate anomaly detection** – alert on latency spikes or sudden error bursts; correlate with model version rollouts.

**4️⃣ Common Pitfalls to Avoid**  
   * Over‑logging sensitive prompts—ensure masking/redaction before ingestion.  
   * Ignoring cost of telemetry (e.g., sending every token).  
   * Failing to propagate trace context across async boundaries, leading to orphaned spans.  
   * Treating observability as a one‑time setup rather than iterative refinement.

**5️⃣ Sanity Checks & Communication**  
   * Run a “dry‑run” with synthetic traffic to confirm metric collection and log formatting.  
   * Validate that trace IDs surface in all downstream logs.  
   * Explain the stack diagram to stakeholders: show how each layer feeds into alerting dashboards, and how they map back to user‑visible SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
