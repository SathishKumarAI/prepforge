---
qid: ing_b0ce670e9f__faang__local
question: What are OpenTelemetry's GenAI semantic conventions, and why should you
  care?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 548
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:14-05:00'
sources: []
---

**Clarify**  
We’re asked what the *OpenTelemetry* **GenAI semantic conventions** are and why they matter. I’ll assume: (1) “GenAI” refers to generative‑AI workloads; (2) we need a concise explanation of the conventions, their purpose, and practical impact.

---

**Approach**  
1. Define OpenTelemetry & its role in observability.  
2. Summarize the GenAI semantic conventions (key attributes).  
3. Explain why these conventions matter to developers/operations teams.  

---

**Depth**  
OpenTelemetry is a vendor‑neutral framework for collecting traces, metrics, and logs. The *GenAI* semantic conventions are a set of standardized attribute keys that describe AI model execution in telemetry data. Key attributes include:

| Attribute | Meaning |
|-----------|---------|
| `ai.model.id` | Model name/identifier (e.g., “gpt‑4o”). |
| `ai.model.version` | Version or revision of the model. |
| `ai.input.tokens` / `ai.output.tokens` | Token counts for request & response. |
| `ai.prompt.type` | Prompt style (“chat”, “completion”). |
| `ai.response.status` | Success, failure, or error code. |
| `ai.request.id` | Correlation ID for a specific inference call. |

These conventions let you:

* **Uniformly identify** which model and version generated a response.  
* **Measure cost & performance** by token counts (billing & latency).  
* **Correlate logs/traces** across services that invoke AI endpoints.  
* **Enforce compliance** (e.g., data handling policies) via standardized attributes.

---

**Edge Cases**  
* Non‑token‑based models (image, audio) may need custom attributes.  
* Legacy systems that emit raw OpenTelemetry without these keys will miss granularity.  
* High‑volume inference pipelines could generate a flood of trace spans; sampling strategies must be tuned.

---

**Optimize & Communicate**  
To maximize value:  
1. **Instrument all AI gateways** to emit the defined attributes.  
2. Use **sampling rules** that keep high‑impact spans (e.g., failures, long latency).  
3. Expose dashboards that aggregate `ai.input.tokens` vs. cost per user.

When presenting this to stakeholders, I’d emphasize: *Standardized telemetry turns opaque AI calls into actionable metrics—enabling faster debugging, cost forecasting, and compliance—all while keeping the observability stack vendor‑agnostic.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
