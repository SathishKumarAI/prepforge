---
qid: ing_5f7c5cdd47__star__local
question: 'What is data encapsulation? — GitHub - Anshul619/Java: This repo contains
  java \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 305
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:30-05:00'
sources: []
---

**Situation:**  
During a sprint at my last company we were refactoring the user‑profile service that stored millions of records in PostgreSQL. The existing code exposed raw POJOs with public fields, so any part of the application could mutate data unexpectedly, leading to stale cache entries and frequent bugs.

**Task:**  
I was tasked with redesigning the domain model to enforce immutability and protect internal state while keeping API surface minimal, all within a two‑week deadline for the next release.

**Action:**  
First, I defined immutable value objects using Lombok’s `@Value` and made all fields private. Then I introduced a factory method that validates inputs (e.g., email format) before creating an instance. To keep backward compatibility, I added a thin wrapper class with a public getter for the legacy DTO but no setters. I also updated the JPA entity to use `@Access(AccessType.FIELD)` and removed any direct field access from services. Finally, I wrote unit tests that attempted to modify returned objects and verified they threw exceptions.

**Result:**  
The refactor reduced accidental data corruption by 95% (tracked via test coverage and incident reports). The service’s memory footprint dropped by ~12 % because immutable objects are shared across threads without defensive copying. I learned the value of coupling encapsulation with clear API contracts to prevent subtle bugs in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
