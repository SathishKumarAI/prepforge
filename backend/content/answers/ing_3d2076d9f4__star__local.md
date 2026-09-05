---
qid: ing_3d2076d9f4__star__local
question: 'Explain: Footnotes — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 279
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:18-05:00'
sources: []
---

**Situation** – At my last job, we were building a real‑time fraud detection system for a payments platform that processed over 10 k transactions per second. The existing batch model lagged behind the live feed by minutes, so suspicious activity slipped through.

**Task** – I had to redesign the pipeline so that each transaction could be evaluated and flagged instantly, without compromising accuracy or throughput.

**Action** – I introduced an event‑driven architecture using Kafka for ingestion and a lightweight TensorFlow Lite model deployed on a serverless function. Each incoming payment was published as a message; the consumer triggered the inference, updated user risk scores in Redis, and sent alerts to our monitoring dashboard. To keep latency low, I batched micro‑events into 5 ms windows and used async IO for database writes. I also added circuit‑breaker logic so that if the model service failed, the system would fall back to a rule‑based guardrail.

**Result** – The new pipeline cut fraud detection time from 3 minutes to under 20 ms per transaction, reducing chargeback losses by 28% in the first quarter. I learned that coupling a well‑chosen event bus with lightweight inference can turn a batch ML workflow into a truly real‑time system without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
