---
qid: ing_15051907e3__eli5__local
question: 'Explain: ALiBi (Attention with Linear Biases) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 199
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:41-05:00'
sources: []
---

Imagine a long hallway where each room represents a word in a sentence. A language model walks down the hallway and can “talk” to any other room, but it prefers rooms that are closer because they’re easier to reach. ALiBi is like putting a gentle slope on every floor of the hallway: the farther you go, the more the slope pushes your voice down, making distant rooms naturally quieter. This slope is added linearly—each step down adds a small, fixed amount of silence—so the model doesn’t need extra memory to remember how far apart words are. The result is that the model still pays attention to nearby words but can also reach out farther when needed, all without storing huge distance tables. It’s a simple, built‑in bias that keeps the attention mechanism efficient and effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
