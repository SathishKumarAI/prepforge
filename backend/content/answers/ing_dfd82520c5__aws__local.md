---
qid: ing_dfd82520c5__aws__local
question: 'Explain: Idempotent APIs — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 437
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:39-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation / Task**  
I led a migration of our recommendation engine from a monolithic batch job to a serverless API that needed to guarantee consistent results for every customer request.

**Action**  
1. **Stateful vs. Stateless Design** – I evaluated two patterns:  
   - *Stateless:* Each invocation receives the full context (user profile, session state) and performs inference in isolation. This simplifies scaling but can produce inconsistent recommendations if external data changes between calls.  
   - *Stateful:* Persist a lightweight “recommendation cache” per user in DynamoDB and use an SQS‑driven Lambda to update it asynchronously.

2. **Idempotency Strategy** – Implemented an `X-Request-ID` header; each Lambda checks a Redis (Elasticache) key before recomputing, ensuring the same result for repeated calls even under retry scenarios.

3. **AWS Services & Trade‑offs**  
   - *API Gateway* + *Lambda* (stateless) → low cost, 99.9 % availability, but higher read latency when pulling state from DynamoDB.  
   - *DynamoDB Global Tables* for multi‑region reads; *Elasticache* for cache invalidation.  
   - Chose **Serverless** to avoid over‑provisioning while guaranteeing *O(1)* lookup time.

4. **Metrics & Results**  
   - Reduced API latency from 650 ms to 180 ms (72% improvement).  
   - Increased request throughput by 4× before hitting rate limits.  
   - Achieved >99.97 % idempotent success rate, cutting duplicate processing cost by $12K/month.

**Result** – Delivered a highly available, scalable recommendation API that balances statefulness for consistency with statelessness for elasticity, meeting both customer obsession and ownership standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
