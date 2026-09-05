---
qid: ing_144aa78695__star__local
question: 'Explain: Types of DI — GitHub - Anshul619/Java: This repo contains java
  \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 329
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:47-05:00'
sources: []
---

**Situation** – While leading a refactor of our legacy Java service for the new micro‑service architecture, I noticed that tight coupling to concrete DAO implementations made unit testing nearly impossible. The team was stuck on slow integration tests and frequent regressions during nightly builds.

**Task** – My goal was to decouple the persistence layer, introduce proper dependency injection (DI) patterns, and cut down test runtime by 60 %.

**Action** – I started by cloning the Anshul619/Java “how‑to‑todos” repo as a reference for clean DI. First, I replaced direct `new` calls with constructor injection, passing interfaces (`UserRepository`) into service constructors. Next, I added setter injection for optional dependencies (e.g., caching). I also created an interface‑based factory to abstract away the concrete JPA implementation, allowing mock implementations in tests. Finally, I integrated Spring’s `@Autowired` annotations and switched to a lightweight CDI container for production.

**Result** – After refactoring, unit test execution time dropped from 12 min to 4 min (a 67 % reduction). The new DI structure made it trivial to swap out the database layer, and we saw a 30 % decrease in integration‑test failures. I learned that mixing constructor and setter injection—guided by clear contracts—provides both compile‑time safety and runtime flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
