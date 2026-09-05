---
qid: ing_30d4e90c02__eli5__local
question: 'Explain: Sliding Window Attention (SWA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 206
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:22-05:00'
sources: []
---

**Sliding‑Window Attention (SWA)** is a way for an AI model to focus on only a small part of its input at a time—just like reading a book one paragraph at a time instead of trying to remember the whole story.

Imagine you’re in a crowded room, listening to a conversation. You can’t hear everyone simultaneously, so you turn your attention to a group of people right next to you (the *window*). As the talk moves, you shift that focus window along the crowd, always hearing only those nearby. In AI, each “word” or token looks at its neighbors inside this moving window and decides how important they are, building understanding step by step. The *attention mechanism* is simply the model’s way of weighting those neighboring words to decide what matters most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
