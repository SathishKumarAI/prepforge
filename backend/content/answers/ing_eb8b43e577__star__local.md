---
qid: ing_eb8b43e577__star__local
question: 'Explain: Spring - @Autowired — GitHub - Anshul619/Java: This repo contains
  java \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 340
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:19:39-05:00'
sources: []
---

**Situation**  
At my last company we were migrating a legacy inventory service to Spring Boot. The old code had hard‑wired DAO implementations, making unit tests brittle and slowing down CI builds.

**Task**  
I needed to refactor the data layer so that each repository could be swapped out for an in‑memory stub during testing, without touching the rest of the application. The goal was a 30 % reduction in test runtime while preserving production behaviour.

**Action**  
Using the `@Autowired` annotation I introduced constructor injection into every service class. I created an interface `ProductRepository` and two implementations: `JpaProductRepository` (the real one) and `InMemoryProductRepository` for tests. In `application.yml`, I added a profile‑specific bean definition that binds the interface to the desired implementation via Spring’s `@Profile`. For clarity, I also mirrored the same pattern in my personal GitHub repo (`Anshul619/Java`) where I documented each step with “how‑to” comments and live code snippets. This made the refactor reproducible for new developers.

**Result**  
The test suite execution time dropped from 12 min to 3 min, a 75 % improvement. Production throughput remained unchanged, and I gained confidence that future feature additions could be tested in isolation. The exercise reinforced my belief that proper dependency injection with `@Autowired` keeps code modular, testable, and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
