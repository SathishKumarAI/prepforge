---
qid: ing_b991a296cf__eli5__local
question: 'Explain: When Not to Shard — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 226
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:29-05:00'
sources: []
---

**When Not to Shard – a Simple Analogy**

Think of a library that only holds one book: “Machine Learning Basics.” If the whole world reads this single volume, it’s easier to keep all copies in one place than to split them across many shelves. **Sharding** is like dividing a huge encyclopedia into separate sections (bookshelves) so each reader gets only what they need. But if you have just one book, sharding would create unnecessary complexity—extra doors, extra staff, and more chances for mistakes.

In system design, **shard when data or traffic grows large enough that one machine can’t handle it efficiently** (e.g., millions of users, petabytes of logs). **Don’t shard if the workload is small, predictable, or requires frequent cross‑section queries**, because sharding adds overhead and coordination costs. Keep it simple until you truly need the extra capacity and isolation that sharding provides.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
