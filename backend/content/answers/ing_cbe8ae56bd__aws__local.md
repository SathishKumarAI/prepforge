---
qid: ing_cbe8ae56bd__aws__local
question: 'Explain: Define enums — LLD-OOPs-Design-Patterns/TipsAndTechniques.md at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 422
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:49-05:00'
sources: []
---

**Situation / Task**

In a recent product launch I was tasked with standardizing status codes across our micro‑services (e.g., order, payment, inventory). The team had ad‑hoc strings and integers scattered in code, causing run‑time errors and breaking the contract API.

**Action**

I introduced **Java enums** as a single source of truth.  
* Defined an `OrderStatus` enum with `PLACED`, `PAID`, `SHIPPED`, `CANCELLED`.  
* Added a `toCode()` method to expose a stable numeric code for persistence and a `fromCode(int)` factory for deserialization.  
* Integrated the enum into our OpenAPI spec (Swagger) so clients get compile‑time validation.  
* Migrated all services via a **Feature Toggle** rollout, writing unit tests that hit DynamoDB’s global tables to verify idempotency.

**Result**

- Reduced runtime status‑related exceptions by **92%** within two weeks.  
- Cut the average API latency from 120 ms to 85 ms because enum lookups are O(1).  
- Saved roughly **$18k/month** in avoided support tickets and rollback costs.  

**Leadership Principles**

*Customer Obsession* – Delivered a bug‑free experience for millions of users.  
*Ownership* – Took full responsibility from design through deployment, owning the migration plan and fallback strategy.

**Bar‑raiser signals**

- Demonstrated *ownership* by driving end‑to‑end change.  
- Showed *dive deep* with detailed metrics on defect reduction and latency gains.  
- Quantified impact (92% error drop, $18k/month saved).  
- Learned from the initial rollout: we needed a fallback to legacy codes; added a graceful deprecation path in the next sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
