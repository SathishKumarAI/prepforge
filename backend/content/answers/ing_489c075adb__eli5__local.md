---
qid: ing_489c075adb__eli5__local
question: 'Explain: Multi-turn handling — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 247
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:04-05:00'
sources: []
---

Imagine you’re chatting with a personal librarian who can fetch books from a huge library (the “RAG” system). In a one‑shot question, she grabs the book and hands it to you. But if you keep asking follow‑up questions—“What’s in chapter 3?” or “Can I see the summary of that section?”—she needs to remember where you left off so she can pull the right page next time.

That memory is what we call **multi‑turn handling**. The assistant keeps a short, tidy log of the conversation (the user’s last question, any key facts mentioned, and the answer it gave). When you ask again, it reads that log to decide which part of the library to search or which snippet to return, just like a librarian keeping track of your current book.

In an enterprise setting this means the assistant can carry context across many back‑and‑forth exchanges, so you don’t have to repeat yourself and the answers stay relevant. The key term: **turn** = one exchange of question and answer in the chat.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
