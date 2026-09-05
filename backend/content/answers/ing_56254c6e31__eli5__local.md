---
qid: ing_56254c6e31__eli5__local
question: When should you use synchronous vs. asynchronous replication?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 233
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:14-05:00'
sources: []
---

Think of your data as a recipe book that many chefs (computers) need to read.  
**Synchronous replication** is like having every chef copy the book in real time: as soon as the head chef writes a new page, all other chefs stop what they’re doing, grab the fresh copy, and confirm they have it before moving on. This guarantees that everyone has exactly the same version at every moment, but it can slow things down because each chef must wait for all the others to finish copying.

**Asynchronous replication** is like sending the new page by courier: chefs keep cooking while the page travels; when it arrives they update their copy later. It’s faster and keeps the kitchen busy, but there’s a brief period where some chefs may still have an older version of the recipe.

Use **synchronous** when you can’t tolerate any discrepancy—critical banking records or live stock trades. Use **asynchronous** for less time‑sensitive data—blog posts or logs—where speed matters more than instant consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
