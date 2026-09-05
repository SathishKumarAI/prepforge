---
qid: ing_7139aa26b8__eli5__local
question: 'Explain: State-Handle Hijacking: The Stateless Core''s New Attack Surface'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 229
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:57-05:00'
sources: []
---

**State‑Handle Hijacking – a “Back‑Door in the Lock Box”**

Imagine a library that keeps every book’s location in an invisible, cloud‑based spreadsheet (the *stateless core*). Patrons only see the book cover; they never look inside the spreadsheet. A thief knows that each book has a tiny digital key—its *state handle*—that lets the system say “this is the right copy.” The thief copies one of these keys and, with it, can ask the library to hand over any book, even if it’s not on the shelf.  

In AI, the core model is stateless: it doesn’t remember past conversations. It relies on tiny state handles to track context. If an attacker steals or mimics a handle, they can “jailbreak” the system, making the AI answer questions it shouldn’t or expose private data—just like the thief gets any book from the library’s invisible spreadsheet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
