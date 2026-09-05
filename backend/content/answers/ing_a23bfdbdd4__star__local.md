---
qid: ing_a23bfdbdd4__star__local
question: 'Explain: OpenTelemetry native — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 333
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:03-05:00'
sources: []
---

**Situation:**  
At my last company we were building an autonomous customer‑support agent for a telecom provider. The QA team reported inconsistent responses and the production latency was creeping above the SLA of 300 ms per request.

**Task:**  
I had to design a systematic way to test, monitor, and evaluate the AI agent’s performance in real time—capturing both correctness of replies and runtime metrics—without adding significant overhead.

**Action:**  
I integrated OpenTelemetry directly into the agent’s inference pipeline. Using its native instrumentation SDK for Python, I added span tags for each intent match, token‑count, and model version. I wrapped the language model calls with a custom exporter that pushed telemetry to LangWatch, an open‑source dashboard tailored for LLM observability. On the evaluation side, I scripted automated test suites that sent 5,000 representative conversation flows per sprint, collected OpenTelemetry traces, and fed them into LangWatch’s anomaly detection engine. The system also logged confidence scores and flagged low‑confidence predictions for manual review.

**Result:**  
Within two sprints we reduced latency by 35 % (down to 195 ms) while improving answer accuracy from 82 % to 91 %. The real‑time dashboard enabled the ops team to spot drift in intent coverage within hours, and I learned how OpenTelemetry’s native tracing can be leveraged for both performance monitoring and model evaluation without duplicating data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
