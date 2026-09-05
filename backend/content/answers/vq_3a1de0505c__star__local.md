---
qid: vq_3a1de0505c__star__local
question: How to use decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 317
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:23-05:00'
sources: []
---

**Situation:** In a recent data‑pipeline project at my previous company, the nightly ETL job was generating duplicate logs for each transformation step, which bloated our monitoring dashboard and made it hard to spot real errors.

**Task:** I needed to add a reusable logging wrapper that would automatically record entry, exit, and execution time for any function without cluttering the core logic, while keeping the codebase clean for future developers.

**Action:** I designed a decorator factory `log_execution(level)` that accepted a log level and returned a decorator. Inside the decorator, I used `functools.wraps` to preserve metadata, logged the start time with `time.perf_counter()`, called the wrapped function, then logged the duration and result status. To avoid repetitive code across modules, I exposed the factory via a single `decorators.py` file and applied it to functions like `extract_data`, `transform_records`, and `load_to_db`. I also added unit tests that asserted log messages were emitted at the correct level.

**Result:** The duplicate logs dropped from 120 per run to just 3, cutting dashboard noise by ~97%. Execution time logging helped identify a bottleneck in `transform_records`, leading to a 15% performance improvement after refactoring. I learned how decorators can encapsulate cross‑cutting concerns cleanly and the importance of preserving function signatures with `functools.wraps`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
