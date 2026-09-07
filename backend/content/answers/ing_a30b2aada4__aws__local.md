---
qid: ing_a30b2aada4__aws__local
question: 'Explain: Guaranteeing “exactly once” semantics — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 446
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:42-05:00'
sources: []
---

**Situation** – In a recent e‑commerce launch I led the API team that exposed a high‑volume recommendation engine to third‑party sellers. A single duplicate call could have inflated inventory counts and ruined our SLA of 99.9 % availability.

**Task** – Deliver an “exactly once” guarantee for the `CreateRecommendation` endpoint while keeping latency < 200 ms at peak traffic (≈ 50k req/s).

**Action**  
1. **Idempotency key pattern**: Each request must include a UUID; the service stores `(key, result)` in DynamoDB with TTL 48 h.  
2. **Transactional write** – Use DynamoDB’s conditional put (`attribute_not_exists(id)`) so duplicate keys return the cached response instantly.  
3. **AWS services** – API Gateway (REST), Lambda (Python), DynamoDB (global tables for multi‑AZ), CloudWatch for metrics, and Step Functions to orchestrate retries only when a key is missing.  
4. **Scalability & cost** – Read/write capacity auto‑scales; estimated $0.50/day per 10 k RCU/WCU. Global tables add ~15 % latency but preserve consistency across regions.  

**Result** – After rollout, duplicate calls dropped from 12 % to < 0.01 %. We achieved a 99.97 % SLA and reduced manual reconciliation effort by 70 %, saving ~$3k/month in ops costs.

---

### Leadership Principles Highlighted  
- **Ownership** – Took end‑to‑end responsibility for data integrity across services.  
- **Dive Deep** – Investigated DynamoDB conditional writes, latency trade‑offs, and cross‑region consistency to engineer the minimal‑latency solution.  

A bar‑raiser would look for this depth of analysis, quantified impact, and evidence that I learned from early test failures (initial design used SQS FIFO, which introduced > 300 ms lag).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
