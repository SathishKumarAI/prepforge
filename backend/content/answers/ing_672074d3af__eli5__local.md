---
qid: ing_672074d3af__eli5__local
question: 'Explain: Capacity and Storage Estimation — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 199
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:19:40-05:00'
sources: []
---

Imagine a library that can only hold a certain number of books – that limit is the **capacity**. In machine‑learning systems, *capacity* means how many patterns (features, rules) the model can learn before it starts to “overfit” or become too slow. Think of each book as one piece of knowledge; if you pile on too many, the shelves get crowded and the librarian (the algorithm) can’t find what he needs quickly.

Now picture a filing cabinet that stores every version of those books while training. **Storage estimation** is figuring out how much space that cabinet will need: it depends on the model’s size, the amount of data, and how many checkpoints you keep. Just as you’d calculate the number of drawers before buying the cabinet, engineers estimate storage to avoid running out of room mid‑project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
