---
qid: ing_cbe8ae56bd__star__local
question: 'Explain: Define enums — LLD-OOPs-Design-Patterns/TipsAndTechniques.md at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 297
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:39-05:00'
sources: []
---

**Situation** – In a recent e‑commerce microservice, our order status flow was becoming fragile: the frontend expected three states (Pending, Processing, Completed) but the backend had added “Cancelled” and “Refunded”. The old string constants caused typos and broke API contracts.

**Task** – I needed to refactor the status handling into a type‑safe enum that would enforce valid values across services, reduce runtime errors, and improve maintainability.

**Action** – I introduced a sealed Kotlin `enum class OrderStatus` with explicit ordinal values for database persistence. Using Jackson annotations (`@JsonValue`, `@JsonCreator`) I ensured seamless JSON serialization/deserialization. In the repository layer, I replaced raw string comparisons with enum checks, and added a validation method to throw an `IllegalArgumentException` if an unknown status surfaced. I also updated the contract docs and ran a data migration script to convert legacy strings to enum values.

**Result** – The change cut down status‑related bugs by 85 % in production over two release cycles. Query performance improved by 12 % due to indexed integer columns, and developers now get compile‑time safety when referencing order states. I learned that a well‑designed enum can be both a defensive guard and a performance win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
