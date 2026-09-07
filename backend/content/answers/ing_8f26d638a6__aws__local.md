---
qid: ing_8f26d638a6__aws__local
question: 'Explain: Changing Events Safely — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:03-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science platform at my last company, we migrated our legacy event bus to **AWS SNS/SQS** so that ML pipelines could react in real time. The challenge was to allow downstream services to *change* the payload (e.g., augment with new metadata) without breaking consumers or duplicating work.

**Action**  
I introduced a **“safe‑update” pattern**:  
1. **Versioned event schema** stored in **AWS Glue Data Catalog**; each producer tags `event_version`.  
2. A **dedicated Lambda (`EventEnricher`)** subscribes to the SNS topic, reads the incoming message, adds new fields, and writes a *new* message to an SQS “enriched” queue with the same correlation ID.  
3. Consumers read from this enriched queue, use the correlation ID to idempotently process messages (checked against **DynamoDB**).  
4. All traffic is logged in **CloudWatch Logs**; we set a CloudWatch alarm for >5 % message loss.

**Result**  
- Reduced downstream error rate by **42 %** (from 1.8 % to 0.9 %).  
- Cut processing time per event from 350 ms to 180 ms, saving ~$12k/month in Lambda compute costs.  
- Achieved 99.99 % availability with multi‑AZ SQS and SNS.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end change, dove deep into idempotency trade‑offs, quantified impact via clear metrics, and iterated after an initial spike in duplicate events—learning that a stricter correlation check in DynamoDB eliminated 90 % of duplicates. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
