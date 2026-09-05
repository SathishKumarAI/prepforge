---
qid: ing_5e399b3a87__eli5__local
question: 'Explain: Common Pitfalls — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 314
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:45-05:00'
sources: []
---

**Idempotency in machine‑learning systems**

*Idempotency* means “doing the same thing twice gives the same result.” Imagine a vending machine that, when you press a button, always dispenses exactly one candy. If you press the button again right away, it should *not* give you another candy—just keep giving the first one until you’re finished.

In ML pipelines this is crucial: training jobs, model updates, or inference requests must be idempotent so that retries (caused by network glitches, timeouts, or duplicate logs) don’t create duplicate models, double‑count data, or corrupt a database. A common pitfall is letting a job write its output to the same file each run without checking if it already exists; the second run overwrites or duplicates results.

**How to avoid it**

1. **Idempotent writes** – Append new model checkpoints with unique names (e.g., include a timestamp or hash) instead of overwriting.
2. **Deduplication checks** – Before inserting a prediction into a table, verify whether that exact input‑output pair already exists.
3. **Transaction safety** – Wrap database updates in transactions so partial writes can be rolled back.

By treating each operation like the vending machine’s button—only producing one result per press—you keep your ML system reliable and free of “double candy” bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
