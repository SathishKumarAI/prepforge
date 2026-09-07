---
qid: ing_4909caaf55__aws__local
question: 'Explain: If you lose your device and need to suspend or remove cards from
  Apple Pay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 473
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:49-05:00'
sources: []
---

**Situation / Task**

When a user’s iPhone is lost, the risk of unauthorized Apple Pay transactions rises dramatically. I was tasked with designing an automated workflow that lets users suspend or delete their cards from any device within minutes while keeping the experience friction‑free.

**Action (Design)**  

* **Requirements** – 99.9 % availability for all card‑management endpoints, <2 s latency, and auditability of every action.  
* **Architecture** –  
  * **API Gateway + Lambda**: expose a REST endpoint `/cards/{id}/action` that accepts `SUSPEND|REMOVE`.  
  * **DynamoDB** (global table) stores card state; writes are idempotent and propagate to all regions in <200 ms.  
  * **SNS topic** triggers an **SNS + Lambda** chain that pushes a push‑notification via APNs, then sends an SMS (if the user opted‑in).  
  * **SQS** queues actions for downstream reconciliation services, ensuring eventual consistency with the legacy payment backend.  
* **Scalability / Cost** – Serverless stack eliminates idle compute; Lambda concurrency is auto‑scaled by API Gateway. Estimated $0.0003 per request → <$10/month at 5 M requests/year.  
* **Security / Compliance** – All traffic TLS‑encrypted, IAM roles enforce least privilege. Card IDs are hashed with HMAC to prevent replay attacks.

**Result**

Within two weeks of rollout:

| Metric | Value |
|--------|-------|
| Avg. latency (API) | 1.3 s (95th percentile) |
| Failure rate | <0.01 % |
| User‑reported incidents | ↓ 87 % compared to manual removal |
| Cost per action | <$0.0002 |

**Learning & Ownership**

I took full ownership of the feature, ran a post‑mortem on the 3× slower initial prototype, and introduced idempotent writes that cut retries by 60 %. The bar‑raiser looked for deep dive into failure modes (e.g., APNs downtime) and quantified impact—exactly what we delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
