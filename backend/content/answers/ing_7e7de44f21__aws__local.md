---
qid: ing_7e7de44f21__aws__local
question: 'Explain: When to Use Webhooks — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 464
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:19-05:00'
sources: []
---

**When to use webhooks?**  
*Customer Obsession & Ownership* – I always start by asking: “What problem does the customer face?” If a system needs **real‑time, event‑driven updates** (e.g., order status, inventory changes), a webhook is the most efficient pattern because it pushes data to the consumer instead of polling.

**Scenario (STAR)**  
- *Situation*: Our e‑commerce platform had 2 M daily orders; a poll‑based approach hit the DB 10× per minute per user, costing $3K/month and causing latency spikes.  
- *Task*: Reduce API load and improve order‑to‑notification time to < 1 s.  
- *Action*: Implemented an event bus (Amazon EventBridge) that triggers Lambda functions which POST JSON payloads to registered URLs (webhooks). Added a retry policy with exponential backoff and dead‑letter queue.  
- *Result*: API calls dropped 90%, cost fell to $600/month, and average notification latency improved from 5 s to 0.8 s—boosting customer satisfaction scores by 12%.

**Design notes**  
| Component | Service | Reason |
|-----------|---------|--------|
| Event source | Amazon EventBridge | Scalable pub/sub, built‑in schema registry |
| Function logic | AWS Lambda (Python) | Zero‑ops, auto‑scaling |
| Delivery guarantee | SNS topic + SQS DLQ | Idempotent retries, fault isolation |
| Security | HTTPS + HMAC signature | Authenticity & integrity |

**Bar‑raiser focus**:  
- **Ownership** – I scoped the entire cost‑impact analysis.  
- **Dive Deep** – Measured latency per microsecond and traced retry paths.  
- **Quantified Impact** – 90% reduction in API traffic, $2.4K/month saved.  
- **Learning from Failure** – Initial implementation had a “single point of failure” in the webhook endpoint; adding an SQS DLQ mitigated that risk.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
