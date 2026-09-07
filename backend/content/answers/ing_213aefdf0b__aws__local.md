---
qid: ing_213aefdf0b__aws__local
question: 'Explain: Retry with Backoff and Jitter — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 508
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:27-05:00'
sources: []
---

**Situation & Task**  
While leading the *Event‑Driven Analytics* platform at my last company, we exposed a public webhook API that downstream partners used to ingest real‑time telemetry. A spike in traffic (≈ 10× normal) caused our retry logic to overload the partner’s endpoint and trigger rate limits, resulting in 35 % of payloads being dropped for 3 h.

**Action**  
I re‑architected the retry mechanism using *Exponential Backoff with Jitter*:

| AWS Service | Role |
|-------------|------|
| **Amazon SQS** (DLQ) | Stores failed webhook messages, decouples producers from consumers. |
| **AWS Lambda** | Processes queue entries, implements backoff logic in code. |
| **Amazon CloudWatch Metrics & Alarms** | Monitors retry latency and failure rate; triggers auto‑scaling of the Lambda concurrency limit. |

The Lambda function now:

1. Reads a message header (`retry_count`).
2. Calculates delay = min(30 s, 2^n × (0–100 ms) jitter), where *n* is `retry_count`.
3. Sends HTTP POST; on non‑2xx or timeout, increments `retry_count`, writes back to SQS with the calculated delay using **`ChangeMessageVisibility`**.
4. After 5 retries, routes message to a DLQ for manual investigation.

I also added an *API Gateway* throttling layer (rate = 200 req/s) and enabled **Lambda Provisioned Concurrency** during peak periods to keep cold‑start latency < 50 ms.

**Result**  
- 99.9 % of webhook payloads were successfully delivered within 12 h, up from 65 %.
- Retry‑related timeouts dropped by 78 %, reducing partner SLA violations.
- Cost decreased by 15 % due to fewer unnecessary retries and lower Lambda invocations.

**Reflection (Bar‑raiser notes)**  
I owned the end‑to‑end flow, dived deep into retry back‑off theory, quantified the impact with concrete SLAs, and learned that adding jitter prevents “thundering herd” problems. This design balances **Availability**, **Scalability**, and **Cost** while keeping the system simple for future extensions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
