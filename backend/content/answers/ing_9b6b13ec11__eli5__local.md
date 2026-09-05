---
qid: ing_9b6b13ec11__eli5__local
question: When to implement RAW query in hibernate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 273
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:52-05:00'
sources: []
---

Imagine Hibernate as a kitchen that normally prepares dishes from a standard recipe book (the ORM). Most meals come out fine, but sometimes you need a special sauce that the cookbook doesn’t cover—maybe a rare spice blend or an exotic cooking technique. That’s when you bring in a raw recipe: write the exact instructions yourself so the stove does exactly what you want.

Use a RAW query in Hibernate when:

1. **Performance matters** – the ORM adds unnecessary joins or loads extra data; hand‑crafting a SELECT gives a leaner, faster result.
2. **Complex logic** – you need window functions, subqueries, or database‑specific features that Hibernate can’t express easily.
3. **Legacy tables** – mapping a table that doesn’t fit the usual entity pattern (no primary key, weird columns) is simpler with plain SQL.
4. **Bulk operations** – updates or deletes on many rows are quicker with a single native statement.

Just remember: keep the raw query short and clear, map its result back to an entity or DTO if you need Hibernate’s caching or transaction support. Think of it as a trusted sous‑chef for those special dishes that the main cookbook can’t handle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
