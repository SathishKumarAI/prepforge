---
qid: ing_da8e00bc3a__aws__local
question: 'Explain: Status and Lock Lifecycle — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 417
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:34-05:00'
sources: []
---

**Situation / Task**  
In a multi‑tenant ML platform we needed to guarantee that each training job was launched exactly once even under heavy concurrent requests from dozens of teams. The challenge was to build an “idempotent” status & lock lifecycle that survived failures, scale to thousands of jobs per day, and kept costs low.

**Action**  
I designed a *single source of truth* using **DynamoDB** with a composite key (`jobId‑tenant`) and a `status` attribute. A **Lambda** (or Step Function) receives the job request, first performs an atomic `GetItem` + conditional `PutItem` to create a lock record (`LOCKED`). If the item already exists, the Lambda returns the existing status—ensuring idempotency.  
When training starts, another Lambda updates the status to `RUNNING`. On success/failure it writes `COMPLETED/FAILED`, and an **SNS** topic notifies downstream services. A TTL on DynamoDB rows cleans stale locks after 24 h. For high throughput we use **DynamoDB Streams + Lambda** to trigger retries only when needed, keeping cost predictable.

**Result**  
The system handled >10k concurrent job submissions with <1 ms latency for lock acquisition and a 99.9% success rate of exactly‑once execution—down from the previous 2.3% duplicate launches. Operational costs dropped 35 % by eliminating unnecessary polling.  

**Leadership Principles**  
- **Customer Obsession / Deliver Results:** Delivered a robust, low‑latency workflow that met user SLA expectations.  
- **Ownership / Dive Deep:** Owns end‑to‑end lifecycle, continuously monitors metrics, and iterates on lock expiry logic after real‑world failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
