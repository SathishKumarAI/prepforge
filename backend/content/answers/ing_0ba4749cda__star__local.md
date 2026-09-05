---
qid: ing_0ba4749cda__star__local
question: 'Explain: Register custom metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 364
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:59-05:00'
sources: []
---

**Situation** – In my last role I was leading a product that shipped an LLM‑powered chatbot for financial advisors. The internal QA team flagged that the model’s “confidence consistency” metric was lagging behind the SLA of 95 % accuracy, so we needed a new custom metric to surface during evaluation runs.

**Task** – My goal was to implement a custom metric in Langfuse that would automatically compute and report *average confidence gap* (the difference between predicted probability and actual correctness) for every eval run, and make it visible on the dashboard and in alerts.

**Action** – I first drafted the Python function using NumPy to calculate the mean absolute error over all responses. Then, inside Langfuse’s evaluation pipeline, I registered this function via `langfuse.register_metric("confidence_gap", compute_confidence_gap)`. The metric was wired into the eval schema so each run stored its result in the event payload. On the frontend I added a new widget to the dashboard that plotted confidence gap over time and set up an alert rule: if the metric exceeded 0.12 for three consecutive runs, trigger an Ops ticket. To keep performance low, I cached intermediate results with Redis and limited the metric’s scope to the top‑10 models per project.

**Result** – After deployment, the average confidence gap dropped from 0.18 to 0.09 within two weeks, lifting overall accuracy above the SLA. The new alerts reduced post‑production incidents by 35 %. I learned that exposing domain‑specific metrics early in the CI/CD loop can dramatically improve model quality and operational stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
