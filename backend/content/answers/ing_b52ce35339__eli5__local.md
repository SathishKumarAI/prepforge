---
qid: ing_b52ce35339__eli5__local
question: 'Explain: Availability Numbers — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 262
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:23:59-05:00'
sources: []
---

Imagine you’re planning a road trip and want to know how likely it is that you’ll reach your destination without a detour. In system design, *availability* is the same idea: the chance that a service (like a machine‑learning model API) will be up and running when someone asks for it.

A quick “back‑of‑the‑envelope” estimate starts with two simple numbers:

1. **Mean Time Between Failures (MTBF)** – how long, on average, the system runs before something goes wrong.
2. **Mean Time to Repair (MTTR)** – how long it takes, on average, to fix a failure and bring the service back online.

Availability ≈ MTBF ÷ (MTBF + MTTR).  
For example, if a model server works for 100 hours before breaking down and takes 1 hour to recover, its availability is 100/(100+1) ≈ 99%.

This rough calculation lets you compare options—like adding redundant servers or better monitoring—to see how each change improves the chance that your ML service will be ready when users need it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
