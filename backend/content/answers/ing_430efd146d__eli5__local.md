---
qid: ing_430efd146d__eli5__local
question: 'Explain: Entropy and Entropy Gap. — Rethinking On-Policy Distillation of
  Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 227
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:40-05:00'
sources: []
---

Think of a crowded library where each book is a possible answer to a question. **Entropy** is how mixed the books are: if every shelf holds only one type of book, the room feels very orderly and has low entropy; if every shelf has a random mix, the room is chaotic and has high entropy. In machine‑learning terms, a model’s predictions spread out over many possibilities—high entropy means it’s unsure.

The **entropy gap** is the difference between what the big, powerful language model (the master librarian) can do and what a smaller, distilled model can do. If the master knows the exact right book for each question (low entropy), but the student only guesses randomly (high entropy), that wide gap shows how much knowledge needs to be transferred.

Rethinking on‑policy distillation is like having the master librarian walk through the library with the student, pointing out which books belong where, gradually shrinking that entropy gap until the student can navigate the shelves confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
