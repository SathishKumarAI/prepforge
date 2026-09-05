---
qid: ing_576dad563d__eli5__local
question: How would you use synthetic data to build or extend an eval set, and what
  are the failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 213
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:10-05:00'
sources: []
---

Imagine a chef who wants to test a new recipe but has only a few guests (real data). To get more opinions, she creates “mock” diners in a kitchen simulator—synthetic data. She feeds the recipe to the simulation, gets taste reports, and adds them to her test menu (the eval set). This lets her check how the dish behaves with many different palates without inviting everyone.

When using synthetic diners, two pitfalls appear:

1. **Unreal flavors** – if the simulator’s palate is too simple or biased, it will rate dishes differently from real people, making the eval misleading.
2. **Missing edge cases** – rare but important taste combinations (corner‑case inputs) might never appear in the simulation, so the recipe seems safe while failing in reality.

So, synthetic data expands tests quickly, but you must keep the simulator realistic and verify that critical unusual scenarios are still covered by real examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
