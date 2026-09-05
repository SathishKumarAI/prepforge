---
qid: ing_ceaa5949c9__eli5__local
question: Explain QLoRA - NF4, double quantization, paged optimizers. What do you
  give up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 350
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:02:39-05:00'
sources: []
---

Imagine your model is a huge library of books (the neural‑net weights). **QLoRA** is a way to shrink that library so it fits on a tiny shelf while still letting you read the stories.

* **NF4** – Think of NF4 as a special kind of shorthand: instead of writing each word in full, you use only four bits (half a byte) per weight. It’s like turning every sentence into a 4‑bit “code” that still captures most meaning but takes far less space.

* **Double quantization** – First, the library is written in NF4. Then we apply another compression step: we group many of those 4‑bit codes and replace each group with an even smaller code (like using a single 8‑bit “index” to represent several books). This two‑step shortcut lets us store more data in less room.

* **Paged optimizers** – While learning, the optimizer needs to remember past updates. Instead of keeping all that history on the shelf, it keeps only the most recent pages in fast memory and swaps older pages out when needed—like a librarian who keeps popular books at hand but borrows rare ones to storage.

What do you give up? A little detail: each weight is now an approximation rather than its exact value. The model may lose tiny bits of accuracy, but for many tasks the loss is negligible compared to the huge savings in memory and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
