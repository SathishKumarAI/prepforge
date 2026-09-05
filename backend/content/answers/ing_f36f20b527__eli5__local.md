---
qid: ing_f36f20b527__eli5__local
question: 'Explain: Problem — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 262
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:59:50-05:00'
sources: []
---

**Pattern: “Database per Service”**

Imagine each *service* is like a small bakery that makes only one type of cake—say, chocolate, vanilla, or lemon. Every bakery keeps its own recipe book and ingredients shelf, so it can bake whenever someone orders without asking the others. In software, a service (a piece of code that does one job) gets its *own* database, just like each bakery has its own storage.

**Why it works**

- **Isolation:** If the chocolate bakery runs out of cocoa, the vanilla shop isn’t affected.
- **Speed:** Each bakery can pick up ingredients quickly because they’re right next to them.
- **Flexibility:** The lemon bakery may decide later to switch from a wooden oven to an electric one without changing how the others bake.

**Unavoidable term**

*Database*: A structured collection of data that software can read, write, and update.  

With this pattern, each service owns its database, keeps it separate, and talks to other services only through well‑defined messages—just like bakeries sharing recipes but not their shelves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
