---
qid: ing_c991f13a9e__aws__local
question: 'Explain: Protect Against Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 537
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:16-05:00'
sources: []
---

**Situation / Task**  
At my previous company we exposed a public webhook endpoint that received payment events from third‑party merchants. After an audit, we discovered that attackers could replay old payloads and trigger duplicate charges—our loss was **$1.2 M in the first quarter** before mitigation.

**Action**  
I owned the fix:  
* *Idempotency*: added a `X-Webhook-ID` header (UUID) and stored it in DynamoDB with TTL 24 h.  
* *Signature validation*: used HMAC‑SHA256 over `(timestamp|payload)` signed by the merchant’s secret; verified against the header.  
* *Replay guard*: every incoming request was first checked against the cache; if the ID existed, we returned `409 Conflict` immediately.  
I deployed this via API Gateway + Lambda (Python 3.11) and integrated CloudWatch metrics to flag repeated failures.

**Result**  
Within **two weeks**, replay attempts dropped to <0.01 % of total traffic, and our quarterly loss was reduced by **$1.2 M**—a 100 % cost saving. The solution handled >10k webhook calls per second with <5 ms latency and <$0.02 per million invocations.

---

### AWS Services & Trade‑offs  
| Service | Reasoning |
|---------|-----------|
| **API Gateway** | Low‑latency edge routing; built‑in throttling |
| **Lambda** | Event‑driven, no server ops; cold start <300 ms with provisioned concurrency |
| **DynamoDB (TTL)** | Single‑write capacity unit per key; fast reads for idempotency checks |
| **CloudWatch & X-Ray** | Visibility into replay attempts and latency |

### Bar‑raiser Checklist  
* **Ownership** – Took end‑to‑end responsibility, from design to monitoring.  
* **Dive Deep** – Analyzed logs to quantify replay patterns before choosing DynamoDB TTL.  
* **Quantified Impact** – Measured loss reduction in dollars and error rate percentages.  
* **Learning from Failure** – Documented the replay incident as a post‑mortem; updated our webhook spec with mandatory idempotency headers.

---

> **Leadership Principles Highlighted:** *Ownership*, *Customer Obsession*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
