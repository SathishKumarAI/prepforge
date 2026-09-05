---
qid: ing_7cb6d288e0__star__local
question: Walk me through actually collecting preference data. What are the logistics,
  and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 343
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:59-05:00'
sources: []
---

**Situation** – In my last role I led a product team building a recommendation engine for an e‑commerce platform with 2 million monthly users. Our existing click‑through logs were noisy, so we needed explicit user preference data to train a new model.

**Task** – Design and roll out a lightweight preference‑capture workflow that would integrate into the checkout flow, respect privacy, and feed clean signals back to our ML pipeline without hurting conversion rates.

**Action** – I started by mapping the end‑to‑end data path: front‑end React hooks sent user selections (favorite categories, “like” toggles) via an authenticated GraphQL mutation to a Node.js microservice. That service validated tokens, applied rate limits, and persisted records in a PostgreSQL table with a JSONB column for flexible schema. We then used Kafka to stream the data to a Spark job that aggregated daily preference vectors per user, calculated confidence scores, and pushed them into our Redis cache for real‑time inference. To avoid bias we ran A/B tests on the UI prompt design, monitored drop‑off rates, and iterated on the wording.

**Result** – The new preference signal improved recommendation precision by 18 % (lift in conversion from 3.2 % to 3.8 %) while keeping cart abandonment unchanged. I learned that early validation of token integrity and graceful degradation of the UI are critical; otherwise users skip the prompt, and the data pipeline stalls with stale or incomplete signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
