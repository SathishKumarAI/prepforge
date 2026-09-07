---
qid: ing_6e395bf6d8__aws__local
question: 'Explain: External Side Effects — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 401
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:05-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a public ML‑prediction API that was exposed to millions of customers. The original endpoint performed side‑effects (logging, caching, billing) on every request, causing duplicate charges and inconsistent cache states when clients retried due to network glitches.

**Action**  
*Customer Obsession & Ownership* – I scoped an idempotent contract: each POST carries a client‑generated UUID (`request_id`).  
1. **AWS API Gateway + Lambda**: The Lambda validates the UUID against an **Amazon DynamoDB** table (`RequestLog`) using `PutItem` with a conditional expression (`attribute_not_exists(request_id)`). If the key exists, the function returns the stored result immediately—no side‑effects run again.  
2. **Side‑effect decoupling**: Billing and caching are pushed to an **SQS FIFO queue**; consumers process only once per UUID.  
3. **Scalability & Availability** – DynamoDB’s on‑demand mode handles burst traffic; API Gateway throttles to protect downstream services.  
4. **Cost** – Conditional writes avoid duplicate charges; SQS costs are minimal compared to potential overbilling.

**Result**  
After deployment, retry‑rate‑induced duplicate billing dropped from 12 % to <0.1 %. Cache consistency improved, reducing cache miss penalties by 30 %. The system now guarantees at‑least‑once semantics without compromising performance.

*Bar‑raiser cues*: I demonstrated ownership of the failure mode, deep dive into DynamoDB’s conditional writes, quantified impact (billing savings), and iterated on a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
