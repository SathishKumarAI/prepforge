---
qid: ing_397025b9c8__eli5__local
question: 'Explain: FlashAttention-2 (Work Partitioning) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 247
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:30-05:00'
sources: []
---

Imagine an enormous library where every book (a token in a sentence) needs to know how relevant it is to every other book before the librarian can answer a question. In classic “attention,” the librarian would walk through all books and compare each pair—slow, especially when there are thousands of books.

FlashAttention‑2 is like giving that librarian a set of smart sorting trays. First, the library’s floor plan (the *work partitioning*) is split into small, non‑overlapping zones. Each zone handles only its own books: it quickly groups similar topics together and lets the books talk to each other locally. Only after this local chatter do the zones exchange a few key summaries with neighboring trays. This two‑step process keeps every book’s “attention” focused on nearby neighbors first, then only a handful of long‑distance conversations—dramatically cutting the time needed.

**Key terms explained**

- **Token**: A word or piece of text the model reads.
- **Attention**: The way a model weighs how much one token should influence another when forming its output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
