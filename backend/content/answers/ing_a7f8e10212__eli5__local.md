---
qid: ing_a7f8e10212__eli5__local
question: 'Explain: The Decoder Side — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 254
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:19-05:00'
sources: []
---

Imagine you’re writing a story with a helpful co‑writer who already knows the plot (the encoder). The decoder is that co‑writer, taking each sentence one by one and deciding what to say next while staying on track.

When the decoder starts, it first reads the “story outline” sent over from the encoder. For every new word it wants to write, it looks back at two things:

1. **What it has already written** (the previous words in the sentence). It uses a *self‑attention* mechanism that lets each word weigh how much it should listen to its own neighbors—like a writer revising earlier sentences to keep tone consistent.

2. **The original outline** (encoder output). Through *cross‑attention*, it checks the plot again, ensuring the new word fits the overall story.

These two attentions feed into tiny neural “decision makers” that pick the next word. The decoder repeats this process until a special end marker signals the sentence is finished. Thus, like a careful co‑writer, the decoder builds coherent output by constantly referring to both what it has said and the original context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
