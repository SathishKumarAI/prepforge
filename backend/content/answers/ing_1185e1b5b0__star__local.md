---
qid: ing_1185e1b5b0__star__local
question: 'Explain: Difference b/w get() & load() — Java/Hibernate.md at main \u00b7
  Anshul619/Java \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 330
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:41-05:00'
sources: []
---

**Situation**  
At a fintech startup I was refactoring the persistence layer for our transaction service. The old code used `session.get()` everywhere, but we were hitting N+1 queries and occasional `LazyInitializationException`s when fetching account balances.

**Task**  
I had to replace the inefficient pattern with a lazy-loading strategy that still returned entities correctly while avoiding the dreaded exceptions, all within a two-week sprint.

**Action**  
I mapped out how Hibernate treats `get()` vs. `load()`. `get()` immediately hits the database and returns `null` if no row exists; it’s safe for eager loading but can be costly if called in loops. `load()` creates a proxy that defers the SQL until a property is accessed, throwing an `ObjectNotFoundException` only when the entity truly doesn’t exist. I rewrote the DAO to use `session.load(Account.class, id)` for lookups where the account was guaranteed to exist (e.g., after validation), and kept `get()` for optional entities. I also added a `@BatchSize` hint on collections to batch proxy initializations.

**Result**  
The refactor cut the transaction processing time by 35 % and eliminated all `LazyInitializationException`s in production. I learned that choosing between `get()` and `load()` is not just about performance but also about the semantics of existence checks, and that proper proxy handling can clean up code and improve throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
