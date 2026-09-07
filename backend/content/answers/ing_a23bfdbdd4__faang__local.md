---
qid: ing_a23bfdbdd4__faang__local
question: 'Explain: OpenTelemetry native — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 478
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:01:38-05:00'
sources: []
---

**Clarify**  
We’re asked how *OpenTelemetry* (OTel) can be used natively for testing & evaluating an AI agent, as illustrated by the **LangWatch** project. Assume we have a generative‑LLM agent that receives prompts, produces responses, and may call external APIs. We want to capture latency, cost, correctness, and safety signals without instrumenting the agent’s code.

**Approach**  
1. Use OTel SDKs in the runtime environment (Python/Node).  
2. Create a *span* per user request that automatically records:  
   - **Inputs** (prompt, context) as attributes.  
   - **Outputs** (response text) and any downstream API calls as child spans.  
3. Attach *metrics* for latency, token counts, and cost.  
4. Export to a backend (Prometheus + Grafana or OpenTelemetry Collector → Jaeger).  
5. Run automated tests that inject varied prompts; OTel logs provide deterministic, structured telemetry.

**Depth**  
- **Instrumentation**: wrap the LLM call (`client.generate()`) in `tracer.start_as_current_span`.  
- **Metrics**: use `meter.create_counter("token_count")` and `histogram("response_latency")`.  
- **Safety checks**: add a span attribute `safety_flag=true/false` after post‑processing.  
Complexity is O(1) per request; storage scales with request volume but remains linear. Trade‑off: exposing raw inputs may raise privacy concerns—mask sensitive data before logging.

**Edge Cases**  
- Asynchronous streaming responses: use *in-progress* spans that close when stream ends.  
- API failures: capture exception details as span status.  
- High throughput bursts: ensure the exporter’s buffer doesn’t overflow (enable batching).

**Optimize & Communicate**  
- Batch export to reduce network overhead.  
- Use context‑propagation across microservices so downstream calls inherit the parent span ID, giving end‑to‑end visibility.  
Explain that this native OTel approach gives reproducible, language‑agnostic telemetry for AI agents—exactly what LangWatch needs to evaluate performance and safety at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
