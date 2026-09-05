---
qid: ing_db60f16d3e__eli5__local
question: 'Explain: Sliding Window Attention — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 193
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:21:32-05:00'
sources: []
---

Imagine you’re watching a long movie on a giant screen, but your eyes can only focus on a small “window” of the frame at once. Each time you shift that window a little to the left or right, you still see most of what’s happening while keeping the view manageable.

In a conversational AI, *sliding‑window attention* does exactly this for text. The model looks at a fixed‑size chunk (the “window”) of words in a sentence or dialogue and learns how each word relates to the others inside that chunk. Then it slides the window forward, overlapping with the previous one, so every word eventually interacts with its neighbors without needing the entire conversation at once.

This keeps memory usage low and lets the AI handle very long chats—just like you can enjoy a full movie by watching it in small, overlapping slices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
