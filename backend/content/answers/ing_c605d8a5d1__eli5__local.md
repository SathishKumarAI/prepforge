---
qid: ing_c605d8a5d1__eli5__local
question: 'Explain: Back in 2020 — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 247
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:53-05:00'
sources: []
---

Imagine a busy kitchen where chefs (the “computers”) are trying to finish many dishes at once. In 2020 Meta’s engineers decided that instead of waiting for each chef to finish one dish before starting the next—like a line cook who must finish a salad before making a sandwich—they let every chef work on different parts of several dishes simultaneously, even if some ingredients aren’t ready yet. This is **asynchronous computing**: tasks run in parallel and don’t pause for others.

Meta’s experiment showed that letting “chefs” (GPU threads) keep cooking while waiting for data (“ingredients”) saved time, but only if the kitchen layout (the software framework) allowed easy hand‑offs between tasks. They learned that to get the best speed, you need good “recipes” (code) that let each chef know exactly when and what to do next, and a robust “inventory system” (memory management) that tracks which ingredients are ready. The result: faster training of machine‑learning models with fewer idle resources—like a kitchen that serves more meals without extra cooks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
