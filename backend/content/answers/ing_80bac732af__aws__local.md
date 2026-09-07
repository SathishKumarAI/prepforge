---
qid: ing_80bac732af__aws__local
question: 'Explain: Payload Mismatch — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:01-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a **payment‑inbound API** for a global marketplace that had to guarantee exactly‑once processing even when clients sent duplicate requests or malformed payloads (payload mismatch). The goal: avoid double charges while keeping latency < 200 ms and cost < $0.01/transaction.

**Action – Design**  
1. **Idempotency Key** – Clients provide a UUID per logical transaction.  
2. **API Gateway + Lambda Authorizer** validates schema with *AWS AppConfig* (schema registry) → rejects mismatches immediately, saving downstream cost.  
3. **DynamoDB Global Table** stores `{idempotency_key, status, payload_hash}` with 1‑write capacity unit per key.  
4. **Lambda “Processor”**:  
   - Reads the row atomically (`ConditionExpression` ensures no overwrite).  
   - If `status = PENDING`, it processes; if `COMPLETED`, returns cached response (idempotent).  
5. **SNS + SQS** decouples heavy processing, ensuring high availability.  
6. **CloudWatch Alarms** on failed schema validations → alerts.

**Result**  
- 99.999% success rate for duplicate requests; 0.01 % of payload mismatches were caught before hitting the database.  
- Latency dropped from 350 ms to 180 ms (30 % improvement).  
- Cost per transaction reduced by 25 % due to early validation.

**Learning**  
I realized that *early exit* via schema validation is cheaper and more reliable than handling errors downstream—an example of **Customer Obsession** (preventing user frustration) and **Bias for Action** (quick prototype, iterate). The bar‑raiser will hear the ownership in choosing DynamoDB’s conditional writes, the depth in trade‑offs between SNS vs direct Lambda, and the quantified impact on latency & cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
