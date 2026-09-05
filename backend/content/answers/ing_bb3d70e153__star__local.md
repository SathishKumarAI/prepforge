---
qid: ing_bb3d70e153__star__local
question: 'Explain: NullAway — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 349
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:33-05:00'
sources: []
---

**Situation:**  
At my previous role at a ride‑sharing company, we were migrating our legacy Java services to Kotlin to reduce runtime errors and improve developer velocity. During the migration, a spike in production null pointer exceptions hit our driver‑matching microservice, causing intermittent downtime for 30 % of rides.

**Task:**  
I needed to eliminate unchecked nulls across the codebase while preserving backward compatibility with existing Java modules, all within a two‑week sprint before the next quarterly release.

**Action:**  
I introduced Uber’s NullAway static analysis plugin into our Gradle build. First, I configured it to treat `@Nullable` annotations from Lombok and our custom nullability library as source of truth. Then I ran a baseline scan, identified 1,200 false‑positive violations, and created a suppression strategy for legacy patterns that couldn’t be refactored immediately. Next, I integrated NullAway into the CI pipeline so every pull request triggered an automated check. Finally, I organized a half‑day workshop where senior engineers walked through real examples of common null pitfalls and how NullAway flags them.

**Result:**  
Within a month, we cut null pointer exceptions in production by 95 %, reduced incident response time from 45 minutes to 10 minutes, and improved code coverage for null safety checks from 60 % to 98 %. The experience taught me that coupling static analysis with culture change—through tooling, training, and continuous feedback—is the most effective way to guard a complex system against subtle bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
