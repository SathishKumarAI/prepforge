---
qid: ing_54e5f60e93__eli5__local
question: 'Explain: F7: Catastrophic forgetting on rarely-seen tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 222
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:51:23-05:00'
sources: []
---

Imagine you’re learning to play many different musical instruments, but your teacher only plays the piano for a long time and then suddenly switches to the violin. Because you practice the piano so much, your fingers get used to its keys; when you try the violin later, you forget how to hold the bow or feel the strings. In AI this is called **catastrophic forgetting**: a model that has seen a task many times “forgets” what it learned on a rarely‑seen task once new data arrives.

Think of the model’s knowledge as a set of sticky notes on a whiteboard. Each time you add a new note (new training data), the board gets crowded and the older, less‑frequent notes get smudged or pushed away. The result is that the model performs well on common tasks but struggles with those it has seen only a few times. This happens because standard learning updates all weights at once, so information for rare tasks can be overwritten by abundant new data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
