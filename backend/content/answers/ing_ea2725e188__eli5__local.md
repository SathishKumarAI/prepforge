---
qid: ing_ea2725e188__eli5__local
question: 'Q: Explain the difference between bi-encoders, cross-encoders, and late
  interaction models. When would you choose each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 326
total_tokens: 500
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:12-05:00'
sources: []
---

Think of a **search system** as a library assistant who needs to find the best book for a reader’s question.

* **Bi‑encoders** are like two separate librarians: one reads and remembers the question, the other reads and remembers every book. They each create a short “summary” (a vector) independently. To answer, the librarian comparing the question’s summary with each book’s summary uses a quick dot product—fast but sometimes missing subtle clues.

* **Cross‑encoders** are one diligent librarian who reads both the question *and* the book together every time, writing a detailed note that captures how they fit. This gives the best answer because it sees all interactions, but it is slow since the whole pair must be re‑read for each comparison.

* **Late interaction models** sit between them. Two librarians first produce summaries (like bi‑encoders), then a third librarian looks at the detailed “words” that appear in both summaries and matches them carefully. It captures richer interactions than pure dot products but is still faster than cross‑encoding.

Choose **bi‑encoders** when you need thousands of quick comparisons (e.g., initial retrieval). Pick **cross‑encoders** for final ranking where accuracy matters most, even if slower. Use **late interaction** models when you want a good trade‑off: better matching than bi‑encoders but faster than full cross‑encoding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
