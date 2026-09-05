---
qid: ing_76d137016c__eli5__local
question: How does ALiBi encode position, and what's its claim to fame?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 252
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:44:43-05:00'
sources: []
---

Imagine you’re reading a long story in a library where every book is stacked side‑by‑side but the shelves are all the same height. If you want to find the 10th sentence, you can’t just look at the text; you need a rule that tells you how far “up” or “down” each word should feel relative to the others.

**ALiBi (Attention with Linear Biases)** does exactly that for language models. Instead of giving the model a special “position number” for every word, it adds a tiny, steadily increasing bias to the attention scores between words: earlier words get a slight push toward being looked at more strongly than later ones. Think of it as a gentle slope on the library floor that nudges readers upward as they move through the story.

Because this slope is fixed and linear, ALiBi works no matter how long the text gets—it can “slide” over any length without having to learn new position IDs for each extra word. That’s its claim to fame: a simple, scalable way to give language models a sense of order that stays consistent even when they read very long passages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
