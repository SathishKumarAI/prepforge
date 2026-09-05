---
qid: ing_7fe5f0d0c1__eli5__local
question: Users ask "how many open orders are blocked on a supplier issue?" Plain
  RAG gets this wrong. Why, and what's the right architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 233
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:37-05:00'
sources: []
---

Think of a library where the books (data) are split into two parts: a **tiny index** (the “retrieval” side) that only knows *where* each book is, and a **story‑teller** (the “generation” side) that writes answers from scratch.  
When you ask, “How many open orders are blocked on a supplier issue?” the story‑teller reads the index but can’t see the actual order numbers because they’re hidden in the full database. It guesses or says “I don’t know,” just like a student who only remembers book titles but not their contents.

The right way is to let the story‑teller **look inside** the books it retrieves. In AI terms, use an architecture that first fetches the relevant records (orders, status flags) and then feeds those exact rows into a language model that can count them. This “retrieve‑and‑process” approach gives you accurate counts instead of vague answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
