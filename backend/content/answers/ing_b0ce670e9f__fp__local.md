---
qid: ing_b0ce670e9f__fp__local
question: What are OpenTelemetry's GenAI semantic conventions, and why should you
  care?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 475
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:20:16-05:00'
sources: []
---

**OpenTelemetry’s GenAI Semantic Conventions**  
At its core, OpenTelemetry is a framework for *observability*: it gathers data (metrics, logs, traces) so that distributed systems can be understood and debugged. When you build generative‑AI services—chatbots, image generators, recommendation engines—you introduce a new kind of computation: a model consumes input text or images, performs internal inference, then emits output that may have value, risk, or bias.

The GenAI semantic conventions prescribe *exactly which attributes* should accompany every trace span that represents an AI request. For example:

| Attribute | Meaning | Why it matters |
|-----------|---------|----------------|
| `ai.model.name` | The model identifier (e.g., “gpt‑4o”) | Enables filtering by model for cost or compliance |
| `ai.input.tokens`, `ai.output.tokens` | Token counts | Drives latency, throughput, and billing metrics |
| `ai.response.type` | “text”, “image”, “embedding” | Allows routing to downstream services that expect a specific payload |
| `ai.prompt.id` | Correlation ID for the user prompt | Facilitates end‑to‑end tracing across multiple model calls |

**Why you should care**  
1. **Unified observability** – With standardized attributes, your telemetry can be ingested by any downstream analytics platform without custom parsers.  
2. **Cost & resource accounting** – Token counts and model names let you bill per inference or enforce quota limits automatically.  
3. **Compliance & safety** – By tagging prompts and outputs, auditors can trace how data flowed through the system, essential for GDPR or HIPAA.  

**Non‑obvious insight**  
Because GenAI workloads are *stateless* from a user’s perspective but *stateful* inside the model (attention caches, beam search), these conventions force you to treat each inference as an atomic transaction. That turns what would otherwise be opaque “black‑box” operations into first‑class citizens in your observability stack, enabling probabilistic performance modeling and robust auto‑scaling that truly reflects AI workload characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
