---
qid: vq_f6f4fdbe86__star__local
question: What are decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 390
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:12-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had a micro‑service that processed user requests for real‑time credit scoring. Every request passed through several validation steps: rate limiting, authentication, input sanitisation and logging. The codebase was growing fast and each handler duplicated the same boilerplate.

**Task** – I needed to refactor the service so that the core business logic stayed clean while still applying all those cross‑cutting concerns automatically for every endpoint, without adding extra lines in each function.

**Action** – I introduced Python decorators. I wrote a `@rate_limit` decorator that used Redis to track request counts per IP; an `@auth_required` decorator that extracted JWT tokens and verified them against our auth service; a `@log_execution` decorator that logged start/end times and any exceptions. Each decorator wrapped the original function, preserved its signature with `functools.wraps`, and returned a new callable. I then applied these decorators to all endpoint handlers in a single line:  
```python
@rate_limit(60)
@auth_required
@log_execution
def calculate_score(request): …
```
I also added unit tests for each decorator to ensure idempotency.

**Result** – The refactor cut the handler code by 40 % and reduced duplicated lines from ~200 to under 20. Because decorators were reusable, adding a new concern (e.g., caching) took only a single file change. Load testing showed that rate limiting prevented spikes from exceeding 1,000 RPS, keeping latency below 120 ms. I learned how Python’s first‑class functions and closures can enforce cross‑cutting concerns cleanly and maintainably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
