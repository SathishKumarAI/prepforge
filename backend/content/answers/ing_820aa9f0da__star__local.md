---
qid: ing_820aa9f0da__star__local
question: 'Explain: The Dependency Rule — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 297
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:21-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection model for an online payment platform, our production latency was creeping past the 500 ms SLA, and any delay risked losing real‑time transaction approvals.

**Task:** I had to refactor the inference pipeline so that each component could be updated independently without breaking downstream services, while keeping the overall prediction time under 300 ms.

**Action:** I applied the Dependency Rule: every module should expose only a minimal set of inputs and outputs, avoiding hidden state or cross‑module side effects. First, I re‑structured the feature extractor to return a flat vector instead of a complex object; this removed implicit dependencies on the raw transaction payload. Next, I encapsulated the model inference inside a lightweight microservice that received only the vector and returned probabilities, so any future retraining could swap the model without touching the rest of the stack. Finally, I added contract tests ensuring each service adhered to its declared input/output schema and used Docker for isolated deployments.

**Result:** The refactor cut latency by 35 % (from 520 ms to 340 ms), met the SLA, and reduced deployment risk: new models could be rolled out in minutes without touching other services. I learned that enforcing explicit contracts not only speeds delivery but also makes scaling and maintenance far more manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
