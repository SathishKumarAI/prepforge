---
qid: ing_3f9aea51b9__eli5__local
question: How is distributed tracing different from logging?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 199
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:16:42-05:00'
sources: []
---

Imagine you’re watching a movie on a smart TV. **Logging** is like the film’s subtitles – every line of dialogue (event) is written down as it happens, but only for that single screen. It tells you *what* happened and when, but not how the story moved between scenes.

**Distributed tracing** is the director’s storyboard that follows a character through multiple rooms (micro‑services). Each room has its own camera, so the character leaves a small mark (“I passed through here”) at each doorway. Tracing stitches all those marks together into one continuous path, showing *where* the request traveled, how long it spent in each service, and where delays or errors occurred.

So, logs record isolated events; traces connect many events across services into a coherent journey. Both are vital, but tracing gives you the full map of a distributed system’s behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
