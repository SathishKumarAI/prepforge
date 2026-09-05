---
qid: ing_83905f96e3__star__local
question: 'Q: When is durable execution overkill, and what would you use instead?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 305
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:28-05:00'
sources: []
---

**Situation:** At a fintech startup I was tasked with building a real‑time fraud detection pipeline that processed thousands of transactions per second. The initial design used AWS Step Functions for durable execution to guarantee eventual consistency across microservices.

**Task:** My goal was to reduce latency while maintaining reliability, but the Step Functions overhead (state persistence, retries, and 50 ms cold start) was adding ~200 ms per transaction, pushing us over our SLA of 400 ms.

**Action:** I evaluated alternatives: a lightweight message broker (Kafka) with idempotent consumer groups and a shared Redis cache for state. I refactored the workflow into stateless Lambda functions triggered by Kafka events, using DynamoDB TTLs to handle eventual cleanup instead of Step Functions’ long‑running state machine. I also introduced exponential backoff retries at the function level and used AWS X-Ray to trace latency.

**Result:** Transaction processing time dropped from 650 ms to 350 ms, meeting our SLA with a margin. The system cost decreased by ~30% due to fewer Step Function executions. I learned that durable execution is valuable for complex, long‑running workflows but overkill for high‑throughput, low‑latency tasks where event‑driven stateless services suffice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
