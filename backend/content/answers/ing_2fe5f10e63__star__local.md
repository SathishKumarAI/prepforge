---
qid: ing_2fe5f10e63__star__local
question: 'Explain: Java Exception Hierarchy — GitHub - Anshul619/Java: This repo
  contains java \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 291
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:13-05:00'
sources: []
---

**Situation:** While leading a backend refactor for our e‑commerce API, we discovered that the existing error handling was throwing raw `Exception` objects into production logs, making it hard to correlate client errors with specific HTTP status codes.

**Task:** I needed to redesign the exception layer so that each failure type mapped cleanly to an appropriate HTTP response and produced meaningful log messages for ops teams.

**Action:** I introduced a custom hierarchy rooted in a base `ApiException` extending `RuntimeException`. Under it, I defined `ValidationException`, `ResourceNotFoundException`, and `ServiceUnavailableException`. Each subclass held an error code and an HTTP status via Spring’s `@ResponseStatus`. I refactored the service layer to throw these specific exceptions instead of generic ones. Additionally, I added a global `@ControllerAdvice` that caught any uncaught `Throwable` and logged stack traces while returning a generic 500 response.

**Result:** The new hierarchy cut log noise by 70 % and reduced ambiguous error responses from 18 % to <1 %. The clear mapping also shortened our incident triage time by an average of 25 minutes per outage. I learned that a well‑structured exception tree not only improves observability but also enforces disciplined error handling across the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
