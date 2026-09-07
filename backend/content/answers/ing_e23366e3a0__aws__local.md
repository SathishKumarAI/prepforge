---
qid: ing_e23366e3a0__aws__local
question: 'Explain: ACL enforcement (the make-or-break component)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 474
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:02-05:00'
sources: []
---

**Situation** – While launching a multi‑tenant recommendation engine at my last role, the team hit a compliance wall: every user’s data had to be isolated by an Access Control List (ACL) that could scale to 50 M users and support real‑time inference with <10 ms latency.

**Task** – I owned the ACL enforcement layer so we met GDPR and internal policy without hurting performance or cost.

**Action**  
1. **Design** – Implemented a *hierarchical ACL cache* in Amazon ElastiCache (Redis) keyed by `userID:resourceID`.  
2. **Policy store** – Persisted immutable rules in DynamoDB with TTL for dynamic updates, and triggered a Lambda to refresh the Redis cache on change.  
3. **Integration** – Wrapped the inference microservice (AWS Lambda + SageMaker endpoint) with an API Gateway authorizer that pulls ACL from cache, returning 403 immediately if unauthorized.  
4. **Scalability/Availability** – Used multi‑AZ ElastiCache clusters and DynamoDB global tables to ensure <1 ms lookups and 99.999% availability.  
5. **Cost control** – Employed Redis read replicas in a spot instance fleet, cutting cache spend by 35 % while keeping latency under 8 ms.

**Result** – Achieved 0 security incidents over 12 months, reduced inference latency from 15 ms to <10 ms, and cut ACL‑related operational costs by $120K annually. The solution also doubled the number of concurrent users before needing a new deployment.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for end‑to‑end ACL enforcement.  
- **Dive Deep** – Built a layered cache + DynamoDB system and quantified every trade‑off (latency, cost, consistency).  

Bar‑raiser cues: clear ownership narrative, depth of technical reasoning, measurable impact, and reflection on how we improved the design after a failed prototype that used plaintext ACL files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
