---
qid: vq_fd6dca7357__star__local
question: Which of the following is not correct about an Exception ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 305
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:17-05:00'
sources: []
---

**Situation:** While leading a refactor of our microservice in Go, the CI pipeline started failing with mysterious “nil pointer dereference” errors during integration tests. The team was frustrated because the error logs were pointing to an exception handling module that we had just rewritten.

**Task:** I needed to pinpoint why the new exception handling logic was incorrectly propagating panic values and rewrite it so that the service would return proper HTTP 500 responses instead of crashing.

**Action:** First, I reproduced the failure locally by enabling `panic` recovery middleware. I traced the stack trace back to a helper function that wrapped errors with `fmt.Errorf("%w", err)` but mistakenly omitted the `%w` verb in one branch, breaking error unwrapping. Then I refactored the wrapper to always use `%w`, added unit tests covering both wrapped and plain errors, and introduced a custom `AppError` type that carries an HTTP status code. Finally, I updated the middleware to check for this type before deciding whether to recover or re‑panic.

**Result:** After deploying the changes, CI passed with 0% panic failures, and our error logs now include clear status codes. The service’s uptime improved by 15%, and I learned that consistent error wrapping is critical for reliable recovery logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
