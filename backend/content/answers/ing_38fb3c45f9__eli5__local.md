---
qid: ing_38fb3c45f9__eli5__local
question: The model streams JSON that your UI renders as live components (generative
  UI). How do you handle parsing while the JSON is incomplete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 190
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:06:34-05:00'
sources: []
---

Imagine a recipe book being written on a shared whiteboard while you’re cooking. The chef keeps adding new lines, but you can’t taste the dish until the whole recipe is finished. In our AI UI, the “recipe” is JSON data that streams in piece by piece. We treat it like a live‑draft text editor: as soon as we receive a chunk, we try to read what’s complete—just enough for one component (like a paragraph). If the JSON is cut off mid‑word, we hold back and wait for the rest before rendering that part. This way, each UI piece appears only when its full data block arrives, keeping the interface stable and preventing broken or incomplete displays. The trick is to keep a small buffer of incoming text and parse it only when we’ve got a whole JSON object ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
