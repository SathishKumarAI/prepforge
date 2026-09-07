---
qid: ing_682379300f__faang__local
question: 'Explain: Idempotency — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 471
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:54-05:00'
sources: []
---

**Idempotency in ML Systems – A FAANG‑style Answer**

| Step | What I’ll Cover |
|------|----------------|
| **Clarify** | Idempotency means that repeating an operation (e.g., a training job or inference request) yields the same result and has no side‑effects. Confirm assumptions: *What state changes are we protecting?* *Is the system distributed?* *Do we need to guard against duplicate model updates, data ingestion, or API calls?* |
| **Approach** | 1️⃣ Wrap every external trigger (API, scheduler, message queue) with a unique request ID. <br>2️⃣ Persist that ID and its outcome in a fast key‑value store (Redis/Spanner). <br>3️⃣ On receipt of a request, check the cache: if seen → return stored result; else process normally and record the outcome. |
| **Depth** | *Implementation*: Use a hash map where `key = operation_type + request_id`, `value = {status, payload}`. <br>*Complexity*: O(1) lookup/insert; memory proportional to active requests (evict after TTL). <br>*Trade‑offs*: Extra write overhead vs. guarantee of consistency and reduced resource waste. |
| **Edge Cases** | • Long‑running jobs that exceed the cache TTL → re‑run but mark as “already started”.<br>• Partial failures: store a “failed” flag so retries can be retried safely.<br>• Distributed workers: ensure cache is globally consistent (e.g., use a distributed lock or atomic upsert). |
| **Optimize & Communicate** | • Batch idempotency checks to reduce latency. <br>• Expose metrics (`idempotent_hits`, `retries`) for observability. <br>• Document the contract: clients must supply a request ID; servers guarantee at‑least‑once semantics with no side‑effects. |

*Result:* A robust ML pipeline that tolerates retries, network glitches, and duplicate requests while keeping compute costs in check—exactly what a FAANG system needs for high reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
