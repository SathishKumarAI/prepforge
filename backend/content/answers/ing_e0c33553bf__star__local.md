---
qid: ing_e0c33553bf__star__local
question: 'Explain: Human review as ground truth — Pydantic Logfire: AI Observability
  for LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 386
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:08-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were launching an LLM‑driven compliance assistant. The product had to flag suspicious transactions with high precision, but early tests showed the model’s recall was only 68 %. Our regulatory team demanded a robust audit trail before any production rollout.

**Task**  
I needed to build a reliable ground truth dataset for continuous evaluation, and embed it into our observability stack so that every inference could be automatically scored against human review outcomes. The goal was to reduce false negatives by at least 10 % while keeping latency under 200 ms.

**Action**  
I set up a Pydantic schema in Logfire to capture each request, response, and the corresponding human annotator label. Using the `logfire` logger, I streamed every inference into Kafka with a unique trace ID. On the analyst side, we built a lightweight UI that fetched logs via Logfire’s API, allowed reviewers to tag outcomes, and pushed back verdicts as structured JSON. A background worker reconciled these labels with the original predictions, updating a rolling precision‑recall metric stored in Redis. I also added an alerting rule: if any model version fell below 80 % recall for more than three consecutive minutes, the CI pipeline blocked deployment.

**Result**  
Within two weeks we increased recall from 68 % to 78 %, and overall F1‑score rose to 0.82. The observability layer reduced manual audit time by 70 % and gave us real‑time confidence scores that regulators appreciated. I learned how tightly coupling human review with structured logging can turn subjective judgments into actionable telemetry, a pattern we now use across all our LLM products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
