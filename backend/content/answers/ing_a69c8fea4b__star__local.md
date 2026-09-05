---
qid: ing_a69c8fea4b__star__local
question: 'Explain: Stateless computation and enforceable guarantees'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 399
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:22-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of our on‑device recommendation engine from a monolithic C++ service to a serverless architecture on AWS Lambda. The existing system stored user session state in Redis, which caused cold‑start delays and made it hard to guarantee consistent latency for high‑traffic events.

**Task** – My goal was to redesign the pipeline so that each inference call was completely stateless while still delivering an end‑to‑end SLA of 120 ms for 95% of requests. I also had to ensure we could audit predictions and roll back faulty models without downtime.

**Action** – I refactored the code into a set of isolated Lambda functions: one for feature extraction, another for model inference (using ONNX Runtime), and a final aggregator that recombines results. Each function received all necessary inputs via JSON payloads, eliminating shared memory or external caches. To enforce guarantees I added distributed tracing with AWS X-Ray, set up CloudWatch metrics to monitor latency per stage, and implemented a step‑function workflow that automatically retried failed calls with exponential backoff. For auditability, every inference result was signed with an HMAC and stored in DynamoDB alongside the input vector.

**Result** – The stateless design cut average cold‑start time from 350 ms to under 30 ms, pushing our overall latency below 120 ms for 97% of requests. Because each function is isolated, we could deploy new model versions in A/B tests without affecting live traffic, and roll back instantly if accuracy dipped. The audit trail enabled us to satisfy compliance audits with zero manual intervention. This experience taught me that statelessness, coupled with observable metrics, turns complex AI services into resilient, enforceable guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
