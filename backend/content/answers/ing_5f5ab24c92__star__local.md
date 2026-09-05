---
qid: ing_5f5ab24c92__star__local
question: 'Explain: Example: Orchestration-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 297
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:07-05:00'
sources: []
---

**Situation:** At my last company we built a real‑time recommendation engine that pulled user data from three microservices, ran feature engineering, trained a model, and pushed predictions back to the front end. The latency had ballooned after a recent database upgrade—users were seeing stale recommendations.

**Task:** I needed to redesign the workflow so each step could run independently, rollback on failure, and still guarantee exactly‑once delivery of predictions within 200 ms.

**Action:** I introduced an orchestration‑based Saga pattern using Temporal.io. Each activity (data fetch, feature extraction, inference, cache update) became a separate task in a single saga workflow. I added compensating actions—e.g., if inference failed, the saga rolled back the cache update and sent a fallback to the UI. We also instrumented each step with OpenTelemetry for latency tracing and used retry policies tuned per activity.

**Result:** The new orchestration cut end‑to‑end latency from 400 ms to 180 ms and reduced failure rates by 35%. Importantly, we eliminated data inconsistencies that had plagued the previous monolithic pipeline. I learned how sagas give ML ops the same fault tolerance guarantees as transactional systems while keeping the codebase modular and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
