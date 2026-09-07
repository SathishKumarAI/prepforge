---
qid: ing_5e399b3a87__aws__local
question: 'Explain: Common Pitfalls — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 482
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:44-05:00'
sources: []
---

**Situation (S)**  
At my last role I built a recommendation engine that exposed an **Idempotent REST endpoint** for batch‑learning jobs. The API was called from multiple microservices, often in parallel.

**Task (T)**  
Guarantee that repeated calls with the same payload did not trigger duplicate training runs while keeping latency low and cost predictable.

**Action (A)**  

| Step | Design choice | AWS services | Rationale |
|------|---------------|--------------|-----------|
| 1 | **Idempotency key** – hash of job config + timestamp rounded to minute. | Amazon DynamoDB (partition key) | O(1) lookup, built‑in TTL for stale keys. |
| 2 | **Optimistic locking** – `ConditionalWrite` with a version number. | DynamoDB | Avoids race conditions when two calls hit concurrently. |
| 3 | **Queueing** – push job to Amazon SQS after key validation. | SQS + Lambda | Decouples API from training, auto‑scales. |
| 4 | **State machine** – AWS Step Functions orchestrate data prep → SageMaker training → result storage. | Step Functions, SageMaker, S3 | Clear audit trail, easy retries. |

I added a **deduplication window** of 30 s; any request within this period re‑uses the same job ID and returns the previous status.

**Result (R)**  
- Reduced duplicate training by **98%**, cutting GPU hours from 120 hrs/month to 3 hrs.  
- Latency improved from 8 s to 2.5 s per request.  
- Cost savings of ~$15k annually.

---

### Leadership Principles

* **Ownership** – I took end‑to‑end responsibility for the API, from design through monitoring.  
* **Dive Deep** – Implemented DynamoDB conditional writes and profiled contention scenarios; learned that 2 ms write latency is critical for real‑time services.  

Bar‑raiser notes: clear ownership, deep technical trade‑offs, quantified impact, and a lesson—always include a TTL on idempotency keys to prevent stale locks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
