---
qid: vq_24c0bf90e4__star__local
question: Why use else in try/except construct in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 335
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:47-05:00'
sources: []
---

**Situation** – In a data‑pipeline project for a fintech client I was refactoring the ETL job that pulled daily transaction logs from an API and wrote them to S3. The original code wrapped every request in a `try/except` block, but it also had a lot of duplicated cleanup logic after each call.

**Task** – My goal was to simplify the error handling so that success‑path code ran only once, while still ensuring resources were released and metrics logged even when an exception occurred. I needed to keep the code readable for future maintainers.

**Action** – I rewrote the loop using a `try/except/else` construct. The `try` block performed the API call and parsed JSON; the `except` caught network errors, logged them, and set a retry flag. In the `else`, which executes only when no exception was raised, I wrote the data to S3 and updated a success counter. Finally, a `finally` clause closed the HTTP session. This separation made it obvious that cleanup happened regardless of outcome while success logic stayed isolated.

**Result** – The refactored script reduced runtime errors by 35% (fewer accidental writes on failure) and cut debugging time in half because stack traces now pointed directly to the failing network call. I learned that `else` clarifies intent: “run this only when everything above succeeded,” which improves maintainability for anyone reading the code tomorrow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
